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

  /** URL for the detail page, used from the index page. */
  detailPageHref(): string {
    return `projects/${this.data.slug}/`;
  }

  /** URL for the cover image when used from the index page. */
  cardCoverHref(): string {
    return `projects/${this.data.slug}/${this.data.cover}`;
  }
}
