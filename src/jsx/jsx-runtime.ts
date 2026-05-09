const VOID_ELEMENTS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);

const ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const escape = (s: string): string => s.replace(/[&<>"']/g, (c) => ESCAPE_MAP[c]!);

/** Marker for already-rendered HTML — children of this type are inserted as-is. */
export class Html {
  constructor(public readonly value: string) {}
  toString(): string {
    return this.value;
  }
}

/** Wrap a pre-rendered string as trusted HTML (skips escaping). Use sparingly. */
export const raw = (s: string): Html => new Html(s);

type Child = Html | string | number | boolean | null | undefined | Child[];

function renderChild(child: Child): string {
  if (child == null || typeof child === "boolean") return "";
  if (child instanceof Html) return child.value;
  if (Array.isArray(child)) return child.map(renderChild).join("");
  return escape(String(child));
}

function renderAttrs(props: Record<string, unknown>): string {
  let out = "";
  for (const key of Object.keys(props)) {
    if (key === "children") continue;
    const value = props[key];
    if (value == null || value === false) continue;
    if (value === true) {
      out += ` ${key}`;
      continue;
    }
    out += ` ${key}="${escape(String(value))}"`;
  }
  return out;
}

type Component = (props: Record<string, unknown>) => Html;

export function jsx(tag: string | Component, props: Record<string, unknown>): Html {
  if (typeof tag === "function") return tag(props);
  const inner = renderChild(props.children as Child);
  if (VOID_ELEMENTS.has(tag)) return new Html(`<${tag}${renderAttrs(props)}>`);
  return new Html(`<${tag}${renderAttrs(props)}>${inner}</${tag}>`);
}

export const jsxs = jsx;
export const jsxDEV = jsx;

export const Fragment: Component = (props) =>
  new Html(renderChild(props.children as Child));
