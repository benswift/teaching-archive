import type { Root, Text, InlineCode, Link, Definition } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

export interface RemarkTemplateOptions {
  site?: Record<string, unknown>;
}

const TEMPLATE_RE = /\{\{\s*(?:(?:page|site)\.)?[\w.]+\s*\}\}/g;
const PARTS_RE = /\{\{\s*(?:(page|site)\.)?([\w.]+)\s*\}\}/;

function resolve(obj: Record<string, unknown>, path: string): string | undefined {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur != null ? String(cur) : undefined;
}

function replaceTemplates(
  input: string,
  frontmatter: Record<string, unknown>,
  siteVars: Record<string, unknown>,
): string {
  if (!TEMPLATE_RE.test(input)) return input;
  TEMPLATE_RE.lastIndex = 0;

  return input.replace(TEMPLATE_RE, (match) => {
    const m = PARTS_RE.exec(match);
    if (!m) return match;
    const [, namespace, key] = m;
    if (namespace === "site") {
      return resolve(siteVars, key) ?? match;
    }
    return resolve(frontmatter, key) ?? match;
  });
}

const remarkTemplate: Plugin<[RemarkTemplateOptions?], Root> = (options = {}) => {
  const siteVars = options.site ?? {};

  return (tree, file) => {
    const frontmatter = (file.data as any)?.astro?.frontmatter ?? {};

    visit(tree, (node) => {
      if (node.type === "text" || node.type === "inlineCode") {
        (node as Text | InlineCode).value = replaceTemplates(
          (node as Text | InlineCode).value,
          frontmatter,
          siteVars as Record<string, unknown>,
        );
      } else if (node.type === "link" || node.type === "definition") {
        (node as Link | Definition).url = replaceTemplates(
          (node as Link | Definition).url,
          frontmatter,
          siteVars as Record<string, unknown>,
        );
      }
    });
  };
};

export default remarkTemplate;
