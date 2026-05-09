import type { Html } from "../jsx/jsx-runtime.ts";

export type LayoutOptions = {
  title: string;
  /** Path to styles.css from the page being rendered (e.g. "styles.css" or "../../styles.css"). */
  stylesHref: string;
  /** Inner markup for <main>. */
  body: Html;
  /** Optional language code, defaults to "ja". */
  lang?: string;
};

export function renderPage({ title, stylesHref, body, lang = "ja" }: LayoutOptions): string {
  const doc = (
    <html lang={lang}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href={stylesHref} />
      </head>
      <body>
        <main>
          {body}
          <hr />
          <footer>© 2026 Takeru Tokoro</footer>
        </main>
      </body>
    </html>
  );
  return `<!DOCTYPE html>\n${doc.value}\n`;
}
