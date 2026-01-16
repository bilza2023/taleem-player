
import { describe, test, expect } from "vitest";
import { QuoteWithImageSlide } from "../src/slides/QuoteWithImageSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("QuoteWithImageSlide", () => {
  test("renders quoteWithImage from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      s => s.type === "quoteWithImage"
    );

    const slide = QuoteWithImageSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("quoteWithImage");
    expect(html).toContain("<img");
    expect(html).toContain("<blockquote");
  });
});
