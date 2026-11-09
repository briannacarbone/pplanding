// Static DOM checks, not browser rendering or full WCAG conformance.
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM } = require("jsdom");
const axe = require("axe-core");
const root = path.resolve(".next/server/app");
function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? files(filename) : filename.endsWith(".html") && entry.name !== "_global-error.html" ? [filename] : [];
  });
}
(async () => {
  const pages = files(root);
  if (!pages.length) throw new Error("Build the site first.");
  const results = [];
  for (const filename of pages) {
    // No site scripts execute and no external resources are fetched.
    const dom = new JSDOM(fs.readFileSync(filename, "utf8"), { runScripts: "outside-only", url: "https://www.planet-pooch.com/" });
    dom.window.eval(axe.source);
    const result = await dom.window.axe.run(dom.window.document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] },
      rules: { "color-contrast": { enabled: false } },
    });
    results.push({ page: path.relative(root, filename), violations: result.violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })), incomplete: result.incomplete.map(v => v.id) });
    dom.window.close();
    if (results.length % 25 === 0) console.log(`Checked ${results.length}/${pages.length}`);
  }
  fs.writeFileSync("accessibility-semantics-results.json", JSON.stringify({ scope: "Static unhydrated DOM; no visual/interaction checks; contrast disabled", results }, null, 2) + "\n");
  const failures = results.filter(r => r.violations.length);
  console.log(JSON.stringify({ checked: results.length, failingPages: failures.length, ruleIds: [...new Set(failures.flatMap(r => r.violations.map(v => v.id)))] }));
  process.exitCode = failures.length ? 1 : 0;
})().catch(error => { console.error(error); process.exitCode = 1; });
