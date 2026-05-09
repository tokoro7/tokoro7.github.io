import { escapeAttr, escapeHtml } from "./html.ts";

export type ImageMedia = {
  type: "image";
  src: string;
  caption?: string;
};

export type VideoMedia = {
  type: "video";
  src: string;
  poster?: string;
  caption?: string;
};

export type Media = ImageMedia | VideoMedia;

export type TeamRow = { label: string; value: string };

export type Link = { label: string; href: string };

export type ProjectData = {
  slug: string;
  title: string;
  /** Detail page tagline (shown under the title on the detail page). */
  tagline: string;
  /** Short summary for the index card. Falls back to tagline if omitted. */
  cardSummary?: string;
  cover: string;
  overview: string[];
  team: TeamRow[];
  techStack: string[];
  media: Media[];
  links: Link[];
};

export class Project {
  constructor(public readonly data: ProjectData) {}

  get slug(): string {
    return this.data.slug;
  }

  get title(): string {
    return this.data.title;
  }

  /** All asset filenames (images / videos / posters) referenced by this project. */
  assetFiles(): string[] {
    const files = new Set<string>([this.data.cover]);
    for (const m of this.data.media) {
      files.add(m.src);
      if (m.type === "video" && m.poster) files.add(m.poster);
    }
    return [...files];
  }

  /** URL for the detail page, used from the index page (root-relative-ish). */
  detailPageHref(): string {
    return `projects/${this.data.slug}/`;
  }

  /** URL for the cover image when used from the index page. */
  cardCoverHref(): string {
    return `projects/${this.data.slug}/${this.data.cover}`;
  }

  /** Card markup, embedded inside the index page. */
  renderCard(): string {
    const summary = this.data.cardSummary ?? this.data.tagline;
    return `    <a href="${escapeAttr(this.detailPageHref())}" class="project-card">
      <img class="thumb" src="${escapeAttr(this.cardCoverHref())}" alt="" onerror="this.style.visibility='hidden'">
      <div class="body">
        <h3>${escapeHtml(this.data.title)}</h3>
        <p>${escapeHtml(summary)}</p>
      </div>
    </a>`;
  }

  /** Inner <main> markup of the detail page. */
  renderDetailMain(): string {
    return [
      `  <p class="back"><a href="../../">← Back</a></p>`,
      ``,
      `  <h1>${escapeHtml(this.data.title)}</h1>`,
      `  <p class="intro">${escapeHtml(this.data.tagline)}</p>`,
      ``,
      `  <img class="hero" src="${escapeAttr(this.data.cover)}" alt="" onerror="this.style.display='none'">`,
      ``,
      `  <h2>Overview</h2>`,
      ...this.data.overview.map((p) => `  <p>${escapeHtml(p)}</p>`),
      ``,
      `  <h2>Team & Role</h2>`,
      `  <dl class="project-meta">`,
      ...this.data.team.flatMap((t) => [
        `    <dt>${escapeHtml(t.label)}</dt>`,
        `    <dd>${escapeHtml(t.value)}</dd>`,
      ]),
      `  </dl>`,
      ``,
      `  <h2>Tech Stack</h2>`,
      `  <p class="skills">${escapeHtml(this.data.techStack.join(", "))}</p>`,
      ``,
      `  <h2>Media</h2>`,
      `  <div class="gallery">`,
      ...this.data.media.flatMap(renderMediaFigure),
      `  </div>`,
      ``,
      `  <h2>Links</h2>`,
      `  <p>`,
      ...this.data.links.map(
        (l, i, arr) =>
          `    <a href="${escapeAttr(l.href)}">${escapeHtml(l.label)}</a>${i < arr.length - 1 ? " ·" : ""}`,
      ),
      `  </p>`,
    ].join("\n");
  }
}

function renderMediaFigure(m: Media): string[] {
  const captionLine =
    m.caption && m.caption.length > 0
      ? `      <figcaption>${escapeHtml(m.caption)}</figcaption>`
      : null;

  const inner =
    m.type === "video"
      ? `      <video src="${escapeAttr(m.src)}" controls${m.poster ? ` poster="${escapeAttr(m.poster)}"` : ""} onerror="this.closest('figure').style.display='none'"></video>`
      : `      <img src="${escapeAttr(m.src)}" alt="" onerror="this.closest('figure').style.display='none'">`;

  const lines = [`    <figure>`, inner];
  if (captionLine) lines.push(captionLine);
  lines.push(`    </figure>`);
  return lines;
}
