// src/core/player.js

import { validateDeckV1 } from "taleem-core";
import { createStage } from "./stage.js";

/**
 * Create a Taleem player instance.
 *
 * @param {Object} options
 * @param {HTMLElement|string} options.mount - DOM element or selector
 * @param {Object} options.deck - deck-v1 JSON
 * @param {Object} options.renderer - renderer with render({ mount, slide, time })
 */
export function createTaleemPlayer({ mount, deck, renderer }) {
  if (!renderer || typeof renderer.render !== "function") {
    throw new Error("taleem-player: renderer with render() required");
  }

  // ✅ single source of truth for validity
  const result = validateDeckV1(deck);
  if (!result.ok) {
    throw new Error(
      "taleem-player: invalid deck\n" +
        result.errors.map(e => e.message).join("\n")
    );
  }

  const stage = createStage(mount);
  let lastSlide = null;

  // 🔒 PRIVATE time → slide mapping (player-owned)
  function getSlideAtTime(deck, time) {
    const slides = deck.deck;
    for (let i = slides.length - 1; i >= 0; i--) {
      const s = slides[i];
      if (time >= s.start && time < s.end) return s;
    }
    return null;
  }

  function renderAt(time) {
    const slide = getSlideAtTime(deck, time);

    if (!slide) {
      stage.clear();
      lastSlide = null;
      return;
    }

    // re-render only when slide changes
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
