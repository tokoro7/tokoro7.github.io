export type Award = { year: string; text: string };

export const profile = {
  name: "Takeru Tokoro",
  handle: "tokoro7",
  tagline: "Unityを中心にVR・モバイルアプリを開発するエンジニアです。",
  github: "https://github.com/tokoro7",
  email: "takerutkr0130@gmail.com",
} as const;

export const about: string[] = [
  "VRアプリケーション開発をルーツに、Unityでのアプリ開発を続けてきました。現在はUnityでのモバイルアプリ開発を本業としています。",
  "趣味ではWebサービスを作ったり、AIを組み込んだアプリケーションを開発したりもしています。新しい技術を試して、形にすることが好きです。",
];

export const awards: Award[] = [
  {
    year: "2023",
    text: "「IVRC2023メタバース部門」, 総合優勝・特別審査員賞Voxel Kei賞, 作品名: \"Hz\"",
  },
  {
    year: "2021",
    text: "「東京大学総長賞」, 大賞, 題目: \"コロナ禍の中での「バーチャル東大」の構築および高校生のためのオープンキャンパスでの公開\"",
  },
];

export const skills: string[] = [
  "Unity",
  "C#",
  "VR / XR",
  "iOS",
  "Android",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "OpenAI API",
];
