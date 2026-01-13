// src/core/stage.js
function createStage(mount) {
  if (!mount) throw new Error("taleem-player: mount is required");
  const root = typeof mount === "string" ? document.querySelector(mount) : mount;
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

// src/utils/timing.js
function getDeckDuration(deck) {
  if (!deck?.deck?.length) return 0;
  return Math.max(...deck.deck.map((s) => s.end));
}
function getSlideAtTime(deck, time) {
  return deck.deck.find((s) => time >= s.start && time < s.end) || null;
}

// src/utils/assertPlayable.js
function assertDeckPlayable(deck) {
  if (!deck || deck.version !== "deck-v1") {
    throw new Error("Invalid deck version");
  }
  if (!Array.isArray(deck.deck)) {
    throw new Error("Deck must contain slides");
  }
  deck.deck.forEach((s, i) => {
    if (typeof s.start !== "number" || typeof s.end !== "number") {
      throw new Error(`Slide ${i} has invalid timing`);
    }
    if (s.end <= s.start) {
      throw new Error(`Slide ${i} end must be > start`);
    }
  });
  return true;
}

// src/core/player.js
function createTaleemPlayer({ mount, deck, renderer }) {
  if (!renderer || typeof renderer.render !== "function") {
    throw new Error("taleem-player: renderer with render() required");
  }
  assertDeckPlayable(deck);
  const stage = createStage(mount);
  let lastSlide = null;
  function renderAt(time) {
    const slide = getSlideAtTime(deck, time);
    if (!slide) {
      stage.clear();
      lastSlide = null;
      return;
    }
    if (slide !== lastSlide) {
      stage.clear();
      lastSlide = slide;
    }
    renderer.render({
      mount: stage.el,
      slide,
      time
    });
  }
  function destroy() {
    stage.destroy();
  }
  return {
    renderAt,
    destroy
  };
}
export {
  assertDeckPlayable,
  createTaleemPlayer,
  getDeckDuration,
  getSlideAtTime
};
