import { cardCoverHref, detailPageHref, type Project } from "../project.ts";

export function ProjectCard({ project }: { project: Project }) {
  const summary = project.cardSummary ?? project.tagline;
  return (
    <a href={detailPageHref(project)} class="project-card">
      <img
        class="thumb"
        src={cardCoverHref(project)}
        alt=""
        onerror="this.style.visibility='hidden'"
      />
      <div class="body">
        <h3>{project.title}</h3>
        <p>{summary}</p>
      </div>
    </a>
  );
}
