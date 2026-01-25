// src/core/stage.js

export function createStage(mount, background = {}) {
  if (!mount) throw new Error("taleem-player: mount is required");

  const root =
    typeof mount === "string" ? document.querySelector(mount) : mount;

  if (!root) throw new Error("taleem-player: mount element not found");

  root.innerHTML = "";

  const stage = document.createElement("div");
  stage.className = "taleem-player-stage";
  stage.style.position = "relative";
  stage.style.width = "100%";
  stage.style.height = "100%";
  stage.style.overflow = "hidden";

  // ---- background layer ----
  const bgLayer = document.createElement("div");
  bgLayer.className = "taleem-player-bg";
  bgLayer.style.position = "absolute";
  bgLayer.style.inset = "0";
  bgLayer.style.zIndex = "0";
  bgLayer.style.backgroundRepeat = "no-repeat";
  bgLayer.style.backgroundSize = "cover";
  bgLayer.style.backgroundPosition = "center";

  if (background.backgroundColor) {
    bgLayer.style.backgroundColor = background.backgroundColor;
  }

  if (background.backgroundImage) {
    bgLayer.style.backgroundImage = `url("${background.backgroundImage}")`;
  }

  if (
    typeof background.backgroundImageOpacity === "number" &&
    background.backgroundImageOpacity < 1
  ) {
    bgLayer.style.opacity = String(background.backgroundImageOpacity);
  }

  // ---- slide layer ----
  const slideLayer = document.createElement("div");
  slideLayer.className = "taleem-player-slides";
  slideLayer.style.position = "relative";
  slideLayer.style.zIndex = "1";
  slideLayer.style.width = "100%";
  slideLayer.style.height = "100%";

  stage.appendChild(bgLayer);
  stage.appendChild(slideLayer);
  root.appendChild(stage);

  function clear() {
    slideLayer.innerHTML = "";
  }

  function destroy() {
    root.innerHTML = "";
  }

  return {
    el: slideLayer,
    clear,
    destroy
  };
}
