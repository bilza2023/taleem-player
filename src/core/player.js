import { createStage } from "./stage.js";
import { getSlideAtTime } from "../utils/timing.js";
import { assertDeckPlayable } from "../utils/assertPlayable.js";

export function createTaleemPlayer({ mount, deck, renderer }) {
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

    // re-render only if slide OR time changed meaningfully
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
