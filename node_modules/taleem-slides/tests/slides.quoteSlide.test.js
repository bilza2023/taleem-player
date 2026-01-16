import { describe, test, expect } from "vitest";
import { QuoteSlide } from "../src/slides/QuoteSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("QuoteSlide", () => {
  test("renders quoteSlide from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      s => s.type === "quoteSlide"
    );

    const slide = QuoteSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("quoteSlide");
    expect(html).toContain("<blockquote");
  });
});
