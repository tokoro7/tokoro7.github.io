import { escapeHtml } from "../html.ts";

export type LayoutOptions = {
  /** <title> contents — escaped automatically. */
  title: string;
  /** Path to styles.css from the page being rendered (e.g. "styles.css" or "../../styles.css"). */
  stylesHref: string;
  /** Inner markup for <main>. */
  body: string;
  /** Optional language code, defaults to "ja". */
  lang?: string;
};

export function renderPage(opts: LayoutOptions): string {
  return `<!DOCTYPE html>
<html lang="${escapeHtml(opts.lang ?? "ja")}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(opts.title)}</title>
<link rel="stylesheet" href="${escapeHtml(opts.stylesHref)}">
</head>
<body>

<main>

${opts.body}

  <hr>
  <footer>© 2026 Takeru Tokoro</footer>

</main>

</body>
</html>
`;
}
