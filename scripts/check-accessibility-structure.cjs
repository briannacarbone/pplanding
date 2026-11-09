// Structural regression checks only; browser and assistive-technology audits
// are still required for WCAG conformance. Run after npm run build.
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(".next/server/app");
const failures = [];
const titles = new Map();
let checked = 0;
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) { walk(filename); continue; }
    if (!filename.endsWith(".html")) continue;
    // Next's internal global-error shell is not the rendered custom boundary.
    if (entry.name === "_global-error.html") continue;
    const html = fs.readFileSync(filename, "utf8");
    const page = path.relative(root, filename);
    checked++;
    const check = (condition, message) => { if (!condition) failures.push({ page, message }); };
    check(/<html\b[^>]*\blang="en"/.test(html), "Expected English document language");
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
    check(Boolean(title), "Missing descriptive page title");
    if (title) {
      check(!titles.has(title), `Duplicate title also used by ${titles.get(title)}`);
      titles.set(title, page);
    }
    check((html.match(/<main\b/g) || []).length === 1, "Expected one main landmark");
    check((html.match(/<h1\b/g) || []).length === 1, "Expected one page heading");
    check((html.match(/id="page-content"/g) || []).length === 1, "Expected one skip destination");
    check(/<h1\b[^>]*id="page-content"[^>]*tabindex="-1"/.test(html), "Skip destination must accept focus");
    check(html.includes('href="#page-content"'), "Missing skip link");
    for (const image of html.matchAll(/<img\b[^>]*>/g)) check(/\balt=/.test(image[0]), "Image missing alt attribute");
    for (const frame of html.matchAll(/<iframe\b[^>]*>/g)) check(/\btitle="[^"]+"/.test(frame[0]), "Iframe missing title");
  }
}
walk(root);
if (!checked) throw new Error("No built HTML found; build the site first.");
console.log(JSON.stringify({ checked, failures }, null, 2));
process.exitCode = failures.length ? 1 : 0;
