import { build } from "esbuild";
import fs from "fs";

// -----------------
// setup
// -----------------
const dist = "dist";

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// -----------------
// JS: Runtime ESM
// -----------------
await build({
  entryPoints: ["src/index.js"],
  outfile: "dist/taleem-player.esm.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  sourcemap: false
});

// -----------------
// JS: Runtime UMD
// -----------------
await build({
  entryPoints: ["src/index.js"],
  outfile: "dist/taleem-player.umd.js",
  bundle: true,
  format: "iife",
  globalName: "TaleemPlayer",
  platform: "browser",
  sourcemap: false
});

// -----------------
// JS: Math (opt-in)
// -----------------
fs.mkdirSync("dist/math", { recursive: true });

await build({
  entryPoints: ["src/math/useMath.js"],
  outfile: "dist/math/useMath.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  sourcemap: false,
  loader: {
    ".css": "css",
    ".woff": "file",
    ".woff2": "file",
    ".ttf": "file"
  },
  assetNames: "assets/[name]"
});

// -----------------
// CSS
// -----------------
fs.mkdirSync("dist/css/themes", { recursive: true });

fs.copyFileSync("src/css/taleem.css", "dist/css/taleem.css");
fs.copyFileSync("src/css/themes/dark.css", "dist/css/themes/dark.css");
fs.copyFileSync("src/css/themes/light.css", "dist/css/themes/light.css");
fs.copyFileSync("src/css/themes/paper.css", "dist/css/themes/paper.css");

console.log("✔ taleem-player build complete");
