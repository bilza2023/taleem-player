// src/engines/player.js

import { getSlideTemplate } from "taleem-slides";
import { createStage } from "./stage.js";

export function createTaleemPlayer({ mount, deck }) {

  const stage = createStage(mount);
  let lastSlide = null;
  let lastRenderedKey = null;

  function getSlideAtTime(deck, time) {
    const slides = deck.deck;
    for (let i = slides.length - 1; i >= 0; i--) {
      const s = slides[i];
      if (time >= s.start && time < s.end) return s;
    }
    return null;
  }

  function computeRenderState(slide, time) {
    if (!Array.isArray(slide.data)) {
      return {};
    }

    let visibleCount = 0;
    let activeIndex = -1;

    slide.data.forEach((item, index) => {
      if (typeof item.showAt === "number" && time >= item.showAt) {
        visibleCount++;
        activeIndex = index;
      }
    });

    return {
      visibleCount,
      activeIndex
    };
  }

  function renderAt(time) {
    const slide = getSlideAtTime(deck, time);

    if (!slide) {
      stage.clear();
      lastSlide = null;
      lastRenderedKey = null;
      return;
    }

    const renderState = computeRenderState(slide, time);
    const renderKey = `${slide.start}-${renderState.visibleCount}-${renderState.activeIndex}`;

    if (slide !== lastSlide) {
      stage.clear();
      lastSlide = slide;
      lastRenderedKey = null;
    }

    if (renderKey === lastRenderedKey) {
      return;
    }

    const Template = getSlideTemplate(slide.type);
    const slideInstance = Template.fromJSON(slide);
    const html = slideInstance.render(renderState);

    stage.el.innerHTML = html;
    lastRenderedKey = renderKey;
  }

  function destroy() {
    stage.destroy();
  }

  return {
    renderAt,
    destroy
  };
}
