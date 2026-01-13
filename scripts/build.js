import { build } from "esbuild";
import fs from "fs";

const dist = "dist";

// clean dist
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// ---- JS: ESM build ----
await build({
  entryPoints: ["src/index.js"],
  outfile: "dist/taleem-player.esm.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  sourcemap: false
});

// ---- JS: UMD build ----
await build({
  entryPoints: ["src/index.js"],
  outfile: "dist/taleem-player.umd.js",
  bundle: true,
  format: "iife",
  globalName: "TaleemPlayer",
  platform: "browser",
  sourcemap: false
});

console.log("✔ taleem-player build complete");
