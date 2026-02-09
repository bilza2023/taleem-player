/**
 * normalizeDeckForPlayerV1
 *
 * Fixes / patches a deck to be safe for taleem-player.
 * Assumes schema is already valid.
 * This is a NORMALIZER, not a validator.
 */

export function normalizeDeckForPlayerV1(deck, opts = {}) {
    const {
      slideDuration = 5,   // default seconds per slide
      itemStep = 1         // default gap between showAt items
    } = opts;
  
    let time = 0;
  
    const slides = deck.deck.map((slide) => {
      const start = isNumber(slide.start) ? slide.start : time;
      const end = isNumber(slide.end) && slide.end > start
        ? slide.end
        : start + slideDuration;
  
      const fixedSlide = {
        ...slide,
        start,
        end,
        data: fixShowAt(slide.data, start, end, itemStep)
      };
  
      time = end;
      return fixedSlide;
    });
  
    return {
      ...deck,
      deck: slides
    };
  }
  
  /* ───────────────────── helpers ───────────────────── */
  
  function fixShowAt(data, start, end, step) {
    if (!Array.isArray(data)) return data;
  
    let t = start;
  
    return data.map((item) => {
      const showAt = isNumber(item.showAt)
        ? clamp(item.showAt, start, end - 0.0001)
        : t;
  
      t = showAt + step;
  
      // EQ lines: spItems inherit timing, never get showAt
      if (item.name === "line" && Array.isArray(item.spItems)) {
        return {
          ...item,
          showAt,
          spItems: item.spItems.map(sp => stripShowAt(sp))
        };
      }
  
      return { ...item, showAt };
    });
  }
  
  function stripShowAt(obj) {
    if (!obj || typeof obj !== "object") return obj;
    const { showAt, ...rest } = obj;
    return rest;
  }
  
  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }
  
  function isNumber(v) {
    return typeof v === "number" && !Number.isNaN(v);
  }
  