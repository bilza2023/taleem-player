import { build } from "esbuild";
import fs from "fs";
import path from "path";

const dist = "dist";

// clean dist
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// ---- JS: ESM build ----
await build({
  entryPoints: ["src/index.js"],
  outfile: "dist/taleem-browser.esm.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  sourcemap: false
});

// ---- JS: UMD build ----
await build({
  entryPoints: ["src/index.js"],
  outfile: "dist/taleem-browser.umd.js",
  bundle: true,
  format: "iife",
  globalName: "TaleemBrowser",
  platform: "browser",
  sourcemap: false
});

// ---- CSS copy ----
// fs.copyFileSync(
//   "src/styles/taleem.css",
//   "dist/taleem.css"
// );

console.log("✔ taleem-browser build complete");
