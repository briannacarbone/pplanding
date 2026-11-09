const assert = require("node:assert/strict");
const fs = require("node:fs");
const css = fs.readFileSync("src/app/new-client/new-client.module.css", "utf8");
function color(selector, property) {
  const rule = css.slice(css.indexOf(selector + "{" )).split("}")[0];
  const hex = rule.match(new RegExp(property + ":[^;]*?(#[0-9a-f]{6})"))?.[1];
  assert.ok(hex, `Missing ${property} for ${selector}`);
  return hex;
}
function luminance(hex) {
  return hex.slice(1).match(/../g).map(value => {
    const s = parseInt(value, 16) / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  }).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
}
function check(name, foreground, background, minimum) {
  const values = [luminance(foreground), luminance(background)].sort((a,b)=>b-a);
  const ratio = (values[0] + 0.05) / (values[1] + 0.05);
  assert.ok(ratio >= minimum, `${name}: ${ratio} below ${minimum}`);
  console.log(`${name}: ${ratio.toFixed(2)}:1`);
}
check("Placeholder text", color(".grid input::placeholder", "color"), "#ffffff", 4.5);
check("Footer text", color(".footer", "color"), color(".page", "background"), 4.5);
check("Input boundary", color(".grid select", "border"), "#ffffff", 3);

// Solid brand-color labels on the light page surface (not image overlays).
const globalCss = fs.readFileSync("src/app/globals.css", "utf8");
const token = name => globalCss.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`))?.[1];
check("Brand labels on cream", token("pp-main"), token("pp-cream"), 4.5);
for (const background of ["#ffffff", token("pp-cream"), token("pp-mint")]) {
  check(`Dark brand labels on ${background}`, token("pp-main-deep"), background, 4.5);
}
