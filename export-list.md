what to export



css

  "./css": "./dist/css/taleem.css",
    "./css/dark": "./dist/css/themes/dark.css",
    "./css/light": "./dist/css/themes/light.css",
    "./css/paper": "./dist/css/themes/paper.css"

    zodDeckV1,
    validateDeckV1,
    useMath


 ".": {
      "import": "./dist/taleem-player.esm.js",
      "require": "./dist/taleem-player.umd.js"
    },


"./spec": {
  "import": "./dist/spec/index.js"
}
import { SLIDE_TYPES_V1, goldenDeckV1 } from "taleem-player/spec";




index.js



// engines (modes)
export { createTaleemPlayer } from "./engines/player/player.js";
export { createTaleemBrowser } from "./engines/browser/browser.js";

// utils
export { assignMockTimings } from "./utils/assignMockTimings.js";
export { resolveAssetPaths } from "./utils/resolveAssetPaths.js";
export { resolveBackground } from "./utils/resolveBackground.js";
export { getDeckEndTime } from "./utils/getDeckEndTime.js";

