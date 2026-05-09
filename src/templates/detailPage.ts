import type { Project } from "../Project.ts";
import { renderPage } from "./layout.ts";

export function renderDetailPage(project: Project): string {
  return renderPage({
    title: `${project.title} — Takeru Tokoro`,
    stylesHref: "../../styles.css",
    body: project.renderDetailMain(),
  });
}
