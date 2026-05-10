# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

Bun + TypeScript の自作 SSG でビルドする静的ポートフォリオサイト。出力は `dist/` で、`main` への push で GitHub Pages にデプロイされる (`.github/workflows/deploy.yml`)。

## コマンド

- `bun run build` — `dist/` を再生成 (`src/build.ts`)
- `bun run dev` — `--watch` で再ビルド。dev サーバはないので `dist/index.html` を直接開く

## アーキテクチャ

- エントリは `src/build.ts`。`src/projects/index.ts` の `projects` 配列を index ページと各詳細ページにレンダリングし、参照アセットを `dist/projects/<slug>/` にコピーする。
- 各プロジェクトは `src/projects/<slug>/index.ts` で `new Project({...})` として定義し、同ディレクトリにアセットを置く。**`cover` か `media[]` から参照されていないファイルはコピーされない。**
- `Project.ts` がモデル (データ + URL ヘルパ)、`templates/` がページ、`components/` が再利用 JSX。View/Model 分離を保つこと。

## 自作 JSX ランタイム

- JSX は React ではなく、ビルド時に HTML 文字列へ展開される (`src/jsx/`)。`tsconfig.json` の `jsxImportSource: "ssg-jsx"` + `paths` エイリアスで解決している (パッケージは存在しない)。
- 属性は HTML 名 (`class`, `charset`)。子要素は自動エスケープされる。エスケープ回避は `raw("...")` のみ。
- コンポーネントは純関数で state/hook なし。動的挙動は `onerror="..."` 等の文字列で埋め込む。

## 補足

- `_local/` は gitignore 対象のスクラッチ領域。`src/` から参照しない。
- 開発項目は `_local/docs/todo.md` にまとまっている。ユーザからの指示に応じて適宜参照し、進捗や追加項目を反映するよう更新すること。
- TypeScript は strict + `noUncheckedIndexedAccess`。
- ユーザ向け文言は日本語。
