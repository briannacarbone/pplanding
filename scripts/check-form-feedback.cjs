// Isolated component behavior test: fetch is replaced; no inquiry is transmitted.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
const { JSDOM } = require("jsdom");
require.extensions[".css"] = module => { module.exports = {}; };
for (const ext of [".ts", ".tsx"]) {
  require.extensions[ext] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText, filename);
}
const dom = new JSDOM('<div id="root"></div>', { url: "https://example.test/new-client/" });
Object.assign(global, { window: dom.window, document: dom.window.document, FormData: dom.window.FormData,
  HTMLElement: dom.window.HTMLElement, IS_REACT_ACT_ENVIRONMENT: true });
window.matchMedia = () => ({ matches: true });
window.HTMLElement.prototype.scrollIntoView = function () {};
global.requestAnimationFrame = callback => setTimeout(callback, 0);
const React = require("react");
const { createRoot } = require("react-dom/client");
const { NewClientForm } = require("../src/app/new-client/new-client-form.tsx");
let resolveRequest;
let rejectRequest;
let calls = 0;
const payloads = [];
global.fetch = (_url, options) => {
  calls++;
  payloads.push(JSON.parse(options.body));
  return new Promise((resolve, reject) => { resolveRequest = resolve; rejectRequest = reject; });
};
const root = createRoot(document.getElementById("root"));
(async () => {
  for (const serviceMode of ["resort", "grooming"]) {
  calls = 0;
  payloads.length = 0;
  await React.act(async () => root.render(React.createElement(NewClientForm, { serviceMode })));
  const form = document.querySelector("form");
  form.elements.firstName.value = "Local test";
  if (serviceMode === "resort") form.elements.services.value = "Daycare";
  const submit = form.querySelector('[type="submit"]');
  submit.focus();
  const send = () => form.dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true }));
  await React.act(async () => send());
  assert.equal(document.activeElement, submit, "Pending submission must retain Submit focus");
  assert.equal(submit.getAttribute("aria-disabled"), "true");
  assert.match(document.body.textContent, /Submitting your inquiry/);
  await React.act(async () => send());
  assert.equal(calls, 1, "Repeated submission while pending must not send twice");
  await React.act(async () => resolveRequest({ ok: false, json: async () => ({ error: "Temporary delivery failure. Please retry." }) }));
  const alert = document.querySelector('[role="alert"]');
  assert.equal(document.activeElement, alert, "Failure must focus its recovery message");
  assert.match(alert.textContent, /Temporary delivery failure/);
  assert.equal(form.elements.firstName.value, "Local test", "Failure must retain entered values");
  assert.equal(submit.getAttribute("aria-disabled"), "false");
  for (const failure of ["network", "invalid-json", "empty-json"]) {
    submit.focus();
    await React.act(async () => send());
    await React.act(async () => {
      if (failure === "network") rejectRequest(new TypeError("Failed to fetch"));
      else resolveRequest({ ok: failure === "empty-json", json: async () => {
        if (failure === "invalid-json") throw new SyntaxError("Unexpected token <");
        return null;
      } });
    });
    const recovery = document.querySelector('[role="alert"]');
    assert.equal(document.activeElement, recovery, `${failure} must focus recovery guidance`);
    assert.match(recovery.textContent, /Your details are still here.*check your connection and try again/);
    assert.doesNotMatch(recovery.textContent, /Failed to fetch|Unexpected token/);
    assert.equal(form.elements.firstName.value, "Local test");
    assert.equal(submit.getAttribute("aria-disabled"), "false");
    assert.equal(form.querySelector('fieldset').disabled, false);
  }
  await React.act(async () => send());
  assert.equal(calls, 5);
  assert.equal(new Set(payloads.map(payload => payload.submissionId)).size, 1, "Retries retain the same submission ID");
  assert.deepEqual(payloads[0].services, [serviceMode === "resort" ? "Daycare" : "In-house grooming"]);
  assert.equal(payloads[0].marketingConsent, false, "Optional consent remains unchecked");
  await React.act(async () => {
    resolveRequest({ ok: true, json: async () => ({ ok: true, eventId: "isolated-test" }) });
    await new Promise(resolve => setTimeout(resolve, 20));
  });
  await React.act(async () => { await new Promise(resolve => setTimeout(resolve, 20)); });
  assert.match(document.activeElement.textContent, /You’re on our list/);
  assert.equal(document.querySelector("form"), null);
  await React.act(async () => root.render(null));
  console.log(`PASS ${serviceMode}: pending focus/status, duplicate prevention, server/network/invalid-response recovery, value retention, stable retry ID and success focus.`);
  }
  await React.act(async () => root.unmount());
  dom.window.close();
  console.log("No network requests sent. These dispatched-submit checks do not test native browser constraint validation or live delivery.");
})().catch(error => { console.error(error); dom.window.close(); process.exitCode = 1; });
