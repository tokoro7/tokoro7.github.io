import { Project } from "../../Project.ts";

export const hz = new Project({
  slug: "hz",
  title: "Hz",
  tagline: "IVRC2023 メタバース部門 総合優勝・特別審査員賞 Voxel Kei賞",
  cardSummary: "IVRC2023 総合優勝・特別審査員賞のVR作品",
  cover: "cover.png",
  overview: [
    "IVRC2023 メタバース部門に出展したVR作品です。総合優勝および特別審査員賞（Voxel Kei賞）を受賞しました。",
  ],
  team: [
    { label: "開発体制", value: "3名のチームによる共同制作" },
    {
      label: "担当",
      value:
        "Director, Lead Unity Engineer, Lead Programmer, Concept Artist, Spatial Design, 3D Modeling, 2D Design",
    },
  ],
  techStack: ["Unity", "C#", "PUN2", "VR / XR"],
  media: [
    { type: "video", src: "demo.mp4", poster: "cover.png", caption: "説明動画" },
    { type: "image", src: "screenshot01.png" },
    { type: "image", src: "screenshot02.png" },
    { type: "image", src: "screenshot03.png" },
  ],
  links: [
    {
      label: "IVRC2023メタバース部門 LEAP STAGE",
      href: "https://ivrc.net/2023_metaverse/leap-stage/",
    },
  ],
});
