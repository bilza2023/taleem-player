
import { getSlideTemplate } from "taleem-slides";

/**
 * createTaleemBrowser
 * Deterministic, index-based slide browser
 */
export function createTaleemBrowser({ mount, deck }) {
  if (!mount) {
    throw new Error("taleem-browser: mount is required");
  }

  if (!deck || !Array.isArray(deck.deck)) {
    throw new Error("taleem-browser: valid deck-v1 required");
  }

  const root =
    typeof mount === "string" ? document.querySelector(mount) : mount;

  if (!root) {
    throw new Error("taleem-browser: mount not found");
  }

  /* static DOM shell (PUBLIC CONTRACT) */
  root.innerHTML = `
    <div class="taleem-browser-bg"></div>
    <div class="taleem-browser-slide"></div>
  `;

  const bgEl = root.querySelector(".taleem-browser-bg");
  const slideEl = root.querySelector(".taleem-browser-slide");

  applyBackground(bgEl, deck.background);

  /* build slide instances ONCE */
  const slides = deck.deck.map((slideJSON, i) => {
    if (!slideJSON.type) {
      throw new Error(`taleem-browser: slide ${i} missing type`);
    }

    const Template = getSlideTemplate(slideJSON.type);
    if (!Template) {
      throw new Error(`taleem-browser: unknown slide type "${slideJSON.type}"`);
    }

    return Template.fromJSON(slideJSON);
  });

  const total = slides.length;

  function render(index, renderState = {}) {
    if (index < 0 || index >= total) return;

    const slide = slides[index];
    slideEl.innerHTML = slide.render(renderState);
  }

  return {
    render,
    getTotal() {
      return total;
    }
  };
}

/* helpers (PRIVATE) */

function applyBackground(el, bg = {}) {
  el.style.position = "absolute";
  el.style.inset = "0";
  el.style.zIndex = "0";
  el.style.backgroundColor = bg.backgroundColor || "#000";
  el.style.backgroundImage = bg.backgroundImage
    ? `url(${bg.backgroundImage})`
    : "none";
  el.style.backgroundSize = "cover";
  el.style.backgroundPosition = "center";
  el.style.opacity =
    bg.backgroundImageOpacity !== undefined
      ? bg.backgroundImageOpacity
      : 1;
}
