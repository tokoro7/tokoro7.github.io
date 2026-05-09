import { ProjectDetail } from "../components/ProjectDetail.tsx";
import type { Project } from "../Project.ts";
import { renderPage } from "./layout.tsx";

export function renderDetailPage(project: Project): string {
  return renderPage({
    title: `${project.title} — Takeru Tokoro`,
    stylesHref: "../../styles.css",
    body: <ProjectDetail project={project} />,
  });
}
