import type { Project } from "../Project.ts";
import { renderPage } from "./layout.ts";

export function renderIndexPage(projects: readonly Project[]): string {
  const body = `  <h1>Takeru Tokoro <span class="handle">/ tokoro7</span></h1>
  <p class="intro">Unityを中心にVR・モバイルアプリを開発するエンジニアです。</p>
  <p class="links">
    <a href="https://github.com/tokoro7">GitHub</a> ·
    <a href="mailto:your.email@example.com">Email</a>
  </p>

  <h2>About</h2>
  <p>VRアプリケーション開発をルーツに、Unityでのアプリ開発を続けてきました。現在はUnityでのモバイルアプリ開発を本業としています。</p>
  <p>趣味ではWebサービスを作ったり、AIを組み込んだアプリケーションを開発したりもしています。新しい技術を試して、形にすることが好きです。</p>

  <h2>Awards</h2>
  <ul class="awards">
    <li><span class="year">2023</span>「IVRC2023メタバース部門」, 総合優勝・特別審査員賞Voxel Kei賞, 作品名: "Hz"</li>
    <li><span class="year">2021</span>「東京大学総長賞」, 大賞, 題目: "コロナ禍の中での「バーチャル東大」の構築および高校生のためのオープンキャンパスでの公開" </li>
  </ul>

  <h2>Projects</h2>
  <div class="project-grid">

${projects.map((p) => p.renderCard()).join("\n\n")}

  </div>

  <h2>Skills</h2>
  <p class="skills">Unity, C#, VR / XR, iOS, Android, TypeScript, React, Next.js, Python, OpenAI API</p>

  <h2>Resume / 履歴書・職務経歴書</h2>
  <p><a href="mailto:takerutkr0130@gmail.com">メール</a>でご連絡ください。</p>`;

  return renderPage({
    title: "Takeru Tokoro",
    stylesHref: "styles.css",
    body,
  });
}
