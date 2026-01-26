// useMath.js

import renderMathInElement from "katex/contrib/auto-render";
import "katex/dist/katex.min.css";

/**
 * Enables KaTeX math rendering inside a container.
 * Math is opt-in via $...$ or $$...$$.
 *
 * @param {HTMLElement} rootEl - Slide root or player root element
 */
export function useMath(rootEl) {
  if (!rootEl) return;

  renderMathInElement(rootEl, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false
  });
}
