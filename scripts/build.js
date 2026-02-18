import { build } from "esbuild";
import fs from "fs";
import path from "path";
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
// JS: Validation (opt-in, tooling)
// -----------------
fs.mkdirSync("dist/validation", { recursive: true });

await build({
  entryPoints: ["src/validation/index.js"],
  outfile: "dist/validation/index.js",
  bundle: true,
  format: "esm",
  platform: "node",
  sourcemap: false
});

// -----------------
// JS: Spec (artifacts)
// -----------------
fs.mkdirSync("dist/spec", { recursive: true });

await build({
  entryPoints: ["src/spec/index.js"],
  outfile: "dist/spec/index.js",
  bundle: true,
  format: "esm",
  platform: "neutral",
  sourcemap: false
});

// -----------------
// CSS
// -----------------
// -----------------
// CSS (bundle modular css)
// -----------------
fs.mkdirSync("dist/css/themes", { recursive: true });

await build({
  entryPoints: ["src/css/index.css"],
  bundle: true,
  outfile: "dist/css/taleem.css",
  minify: true,
  loader: {
    ".css": "css"
  }
});
/////Themes
const themesDest = "dist/css/themes";
const themesSrc = "src/css/themes";
fs.mkdirSync(themesDest, { recursive: true });

fs.readdirSync(themesSrc).forEach(file => {
  const srcFile = path.join(themesSrc, file);
  const destFile = path.join(themesDest, file);
  fs.copyFileSync(srcFile, destFile);
});

//////////////////////////////////////////////
// -----------------
// CSS: Copy app.css
// -----------------
fs.mkdirSync("dist/css/app", { recursive: true });

fs.copyFileSync(
  "src/css/app/app.css",
  "dist/css/app/app.css"
);

//////////////////////////////////////////////
console.log("✔ taleem-player build complete");
