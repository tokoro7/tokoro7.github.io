import { copyFile, mkdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import type { Project } from "./Project.ts";
import { projects } from "./projects/index.ts";
import { renderDetailPage } from "./templates/detailPage.ts";
import { renderIndexPage } from "./templates/indexPage.ts";

const SRC_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = dirname(SRC_DIR);
const DIST_DIR = join(ROOT_DIR, "dist");

async function writeText(path: string, content: string): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
  await Bun.write(path, content);
}

async function copyProjectAssets(p: Project): Promise<void> {
  const srcDir = join(SRC_DIR, "projects", p.slug);
  const dstDir = join(DIST_DIR, "projects", p.slug);
  await mkdir(dstDir, { recursive: true });
  for (const file of p.assetFiles()) {
    await copyFile(join(srcDir, file), join(dstDir, file));
  }
}

async function main(): Promise<void> {
  await rm(DIST_DIR, { recursive: true, force: true });
  await mkdir(DIST_DIR, { recursive: true });

  // Index page
  await writeText(join(DIST_DIR, "index.html"), renderIndexPage(projects));

  // Detail pages + assets
  for (const p of projects) {
    await writeText(
      join(DIST_DIR, "projects", p.slug, "index.html"),
      renderDetailPage(p),
    );
    await copyProjectAssets(p);
  }

  // Stylesheet
  await copyFile(join(SRC_DIR, "styles.css"), join(DIST_DIR, "styles.css"));

  console.log(`Built ${projects.length} project page(s) → ${DIST_DIR}`);
}

await main();
