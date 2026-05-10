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

export type Project = {
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

/** All asset filenames (images / videos / posters) referenced by this project. */
export function assetFiles(p: Project): string[] {
  const files = new Set<string>([p.cover]);
  for (const m of p.media) {
    files.add(m.src);
    if (m.type === "video" && m.poster) files.add(m.poster);
  }
  return [...files];
}

/** URL for the detail page, used from the index page. */
export function detailPageHref(p: Project): string {
  return `projects/${p.slug}/`;
}

/** URL for the cover image when used from the index page. */
export function cardCoverHref(p: Project): string {
  return `projects/${p.slug}/${p.cover}`;
}
