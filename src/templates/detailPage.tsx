import { ProjectDetail } from "../components/ProjectDetail.tsx";
import type { Project } from "../project.ts";
import { profile } from "../siteContent.ts";
import { renderPage } from "./layout.tsx";

export function renderDetailPage(project: Project): string {
  return renderPage({
    title: `${project.title} — ${profile.name}`,
    stylesHref: "../../styles.css",
    body: <ProjectDetail project={project} />,
  });
}
