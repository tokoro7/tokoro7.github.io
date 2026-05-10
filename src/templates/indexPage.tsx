import { ProjectCard } from "../components/ProjectCard.tsx";
import type { Project } from "../project.ts";
import { about, awards, profile, skills } from "../siteContent.ts";
import { renderPage } from "./layout.tsx";

export function renderIndexPage(projects: readonly Project[]): string {
  const body = (
    <>
      <h1>
        {profile.name} <span class="handle">/ {profile.handle}</span>
      </h1>
      <p class="intro">{profile.tagline}</p>
      <p class="links">
        <a href={profile.github}>GitHub</a> ·{" "}
        <a href={`mailto:${profile.email}`}>Email</a>
      </p>

      <h2>About</h2>
      {about.map((p) => (
        <p>{p}</p>
      ))}

      <h2>Awards</h2>
      <ul class="awards">
        {awards.map((a) => (
          <li>
            <span class="year">{a.year}</span>
            {a.text}
          </li>
        ))}
      </ul>

      <h2>Projects</h2>
      <div class="project-grid">
        {projects.map((p) => (
          <ProjectCard project={p} />
        ))}
      </div>

      <h2>Skills</h2>
      <p class="skills">{skills.join(", ")}</p>

      <h2>Resume / 履歴書・職務経歴書</h2>
      <p>
        <a href={`mailto:${profile.email}`}>メール</a>でご連絡ください。
      </p>
    </>
  );

  return renderPage({
    title: profile.name,
    stylesHref: "styles.css",
    body,
  });
}
