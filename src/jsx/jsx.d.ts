import type { Html } from "./jsx-runtime.ts";

type Primitive = string | number | boolean | null | undefined;
type Child = Html | Primitive | Child[];

type CommonAttrs = {
  children?: Child;
  class?: string;
  id?: string;
  style?: string;
  title?: string;
  lang?: string;
  hidden?: boolean;
  /** Inline error handler kept as a string — outputs as `onerror="..."`. */
  onerror?: string;
  onclick?: string;
  onload?: string;
  /** Escape hatch for any other attribute. */
  [attr: `data-${string}`]: Primitive;
  [attr: `aria-${string}`]: Primitive;
};

type AnchorAttrs = CommonAttrs & {
  href?: string;
  target?: string;
  rel?: string;
};

type ImgAttrs = CommonAttrs & {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  loading?: "lazy" | "eager";
};

type VideoAttrs = CommonAttrs & {
  src?: string;
  poster?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsinline?: boolean;
};

type LinkAttrs = CommonAttrs & {
  rel?: string;
  href?: string;
  type?: string;
};

type MetaAttrs = CommonAttrs & {
  name?: string;
  content?: string;
  charset?: string;
  "http-equiv"?: string;
};

type HtmlElAttrs = CommonAttrs & { lang?: string };

declare global {
  namespace JSX {
    type Element = Html;
    type ElementChildrenAttribute = { children: unknown };

    interface IntrinsicElements {
      a: AnchorAttrs;
      img: ImgAttrs;
      video: VideoAttrs;
      link: LinkAttrs;
      meta: MetaAttrs;
      html: HtmlElAttrs;
      // Generic fallback for anything we don't explicitly type.
      [tag: string]: CommonAttrs & Record<string, unknown>;
    }
  }
}

export {};
