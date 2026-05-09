import type { Media } from "../Project.ts";

export function MediaFigure({ media: m }: { media: Media }) {
  return (
    <figure>
      {m.type === "video" ? (
        <video
          src={m.src}
          controls
          poster={m.poster}
          onerror="this.closest('figure').style.display='none'"
        />
      ) : (
        <img
          src={m.src}
          alt=""
          onerror="this.closest('figure').style.display='none'"
        />
      )}
      {m.caption && <figcaption>{m.caption}</figcaption>}
    </figure>
  );
}
