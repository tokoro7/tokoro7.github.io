import type { Project } from "../Project.ts";
import { MediaFigure } from "./MediaFigure.tsx";

export function ProjectDetail({ project }: { project: Project }) {
  const { title, tagline, cover, overview, team, techStack, media, links } =
    project.data;

  return (
    <>
      <p class="back">
        <a href="../../">← Back</a>
      </p>

      <h1>{title}</h1>
      <p class="intro">{tagline}</p>

      <img
        class="hero"
        src={cover}
        alt=""
        onerror="this.style.display='none'"
      />

      <h2>Overview</h2>
      {overview.map((p) => (
        <p>{p}</p>
      ))}

      <h2>Team & Role</h2>
      <dl class="project-meta">
        {team.map((t) => (
          <>
            <dt>{t.label}</dt>
            <dd>{t.value}</dd>
          </>
        ))}
      </dl>

      <h2>Tech Stack</h2>
      <p class="skills">{techStack.join(", ")}</p>

      <h2>Media</h2>
      <div class="gallery">
        {media.map((m) => (
          <MediaFigure media={m} />
        ))}
      </div>

      <h2>Links</h2>
      <p>
        {links.map((l, i) => (
          <>
            <a href={l.href}>{l.label}</a>
            {i < links.length - 1 ? " ·" : ""}
          </>
        ))}
      </p>
    </>
  );
}
