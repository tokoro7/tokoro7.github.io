import type { Project } from "../Project.ts";

export function ProjectCard({ project }: { project: Project }) {
  const { data } = project;
  const summary = data.cardSummary ?? data.tagline;
  return (
    <a href={project.detailPageHref()} class="project-card">
      <img
        class="thumb"
        src={project.cardCoverHref()}
        alt=""
        onerror="this.style.visibility='hidden'"
      />
      <div class="body">
        <h3>{data.title}</h3>
        <p>{summary}</p>
      </div>
    </a>
  );
}
