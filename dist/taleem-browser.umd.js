var TaleemBrowser = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.js
  var index_exports = {};
  __export(index_exports, {
    assertDeckPlayable: () => assertDeckPlayable,
    createTaleemPlayer: () => createTaleemPlayer,
    getDeckDuration: () => getDeckDuration,
    getSlideAtTime: () => getSlideAtTime
  });

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
  return __toCommonJS(index_exports);
})();
