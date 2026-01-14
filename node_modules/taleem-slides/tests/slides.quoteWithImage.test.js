
// slides.quoteWithImage.test.js
import { describe, test, expect } from "vitest";
import { QuoteWithImageSlide } from "../src/slides/QuoteWithImageSlide.js";

describe("QuoteWithImageSlide", () => {
  test("renders quote with image", () => {
    const raw = {
      type: "quoteWithImage",
      data: [
        { name: "quote", content: "Learn daily" },
        { name: "image", content: "img.png" }
      ]
    };

    const slide = QuoteWithImageSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("Learn daily");
    expect(html).toContain("img.png");
  });

  test("throws if missing quote or image", () => {
    expect(() =>
      QuoteWithImageSlide.fromJSON({ type: "quoteWithImage", data: [] })
    ).toThrow("quoteWithImage: quote and image required");
  });
});
