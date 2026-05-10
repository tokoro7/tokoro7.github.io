import type { Project } from "../../project.ts";

export const virtualToudai: Project = {
  slug: "virtual-toudai",
  title: "バーチャル東大",
  tagline: "東京大学総長賞 大賞 — バーチャル東大の構築と公開",
  cardSummary: "東京大学総長賞 大賞のバーチャルキャンパス",
  cover: "thumbnail_hall.png",
  overview: [
    "コロナ禍の中で東京大学のキャンパスをVR空間に構築し、高校生のためのオンラインオープンキャンパスとして公開したプロジェクトです。安田講堂をはじめとする主要建物を再現し、来場者がアバターで歩き回りながら大学の雰囲気を体験できるようにしました。",
    "本プロジェクトは「東京大学総長賞」大賞を受賞しました。",
  ],
  team: [
    { label: "開発体制", value: "3名のチームによる共同制作" },
    {
      label: "担当",
      value: "Director, Unity Engineer, Spatial Design, 3D Modeling",
    },
  ],
  techStack: ["Unity", "C#", "VR / XR"],
  media: [
    { type: "image", src: "thumbnail_yasuda.png" },
    { type: "image", src: "proto01.png", caption: "プロトタイプ制作時" },
    { type: "image", src: "proto02.png", caption: "プロトタイプ制作時" },
  ],
  links: [
    {
      label: "バーチャル東大 公式サイト",
      href: "https://vr.u-tokyo.ac.jp/virtualUT/",
    },
  ],
};
