// src/core/stage.js

export function createStage(mount) {
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
  
    root.appendChild(stage);
  
    function clear() {
      stage.innerHTML = "";
    }
  
    function destroy() {
      root.innerHTML = "";
    }
  
    return {
      el: stage,
      clear,
      destroy
    };
  }
  