// Generates public/llms.txt in the llmstxt.org format from the docs frontmatter.
// Run via `pnpm generate:llms` (also wired into the build).
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const DOCS_DIR = join(ROOT, "content", "docs");
const OUT = join(ROOT, "public", "llms.txt");
const BASE_URL = "https://animbits.dev";

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else if (entry.endsWith(".mdx")) files.push(full);
  }
  return files;
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) data[m[1]] = m[2].replace(/^["']|["']$/g, "").trim();
  }
  return data;
}

function urlForFile(file) {
  const rel = relative(DOCS_DIR, file).replace(/\.mdx$/, "");
  const parts = rel.split(sep);
  if (parts.length === 1 && parts[0] === "index") return "/docs";
  return `/docs/${parts.join("/")}`;
}

// Human-readable group titles keyed by the path under content/docs.
const GROUP_TITLES = {
  "": "Getting Started",
  "animations/buttons": "Button Animations",
  "animations/cards": "Card Animations",
  "animations/icons": "Icon Animations",
  "animations/lists": "List Animations",
  "animations/loaders": "Loaders",
  "animations/pages": "Page Transitions",
  "animations/specials": "Special Components",
  "animations/text": "Text Animations",
  "hooks": "Hooks",
  "transitions": "Transitions",
};

const GROUP_ORDER = Object.keys(GROUP_TITLES);

function groupKey(file) {
  const rel = relative(DOCS_DIR, file);
  const parts = rel.split(sep);
  parts.pop(); // drop filename
  return parts.join("/");
}

const files = walk(DOCS_DIR);
const groups = new Map();

for (const file of files) {
  const fm = parseFrontmatter(readFileSync(file, "utf8"));
  const key = groupKey(file);
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push({
    title: fm.title || urlForFile(file),
    description: fm.description || "",
    url: `${BASE_URL}${urlForFile(file)}`,
  });
}

const orderedKeys = [
  ...GROUP_ORDER.filter((k) => groups.has(k)),
  ...[...groups.keys()].filter((k) => !GROUP_ORDER.includes(k)).sort(),
];

let out = `# AnimBits

> A curated suite of copy-and-paste animations, hooks, and components for React and Next.js. Built on Motion and the shadcn registry, AnimBits helps you ship polished, accessible, production-ready interfaces. Every component installs through the shadcn CLI and ships with TypeScript types.

`;

for (const key of orderedKeys) {
  const items = groups.get(key);
  if (!items || items.length === 0) continue;
  items.sort((a, b) => a.title.localeCompare(b.title));
  const heading = GROUP_TITLES[key] || key;
  out += `## ${heading}\n\n`;
  for (const item of items) {
    out += item.description
      ? `- [${item.title}](${item.url}): ${item.description}\n`
      : `- [${item.title}](${item.url})\n`;
  }
  out += `\n`;
}

writeFileSync(OUT, out.trimEnd() + "\n", "utf8");
console.log(`Wrote ${OUT} (${files.length} pages across ${orderedKeys.length} groups).`);
