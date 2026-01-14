
// slides.quoteSlide.test.js
import { describe, test, expect } from "vitest";
import { QuoteSlide } from "../src/slides/QuoteSlide.js";

describe("QuoteSlide", () => {
  test("renders quote and author", () => {
    const raw = {
      type: "quoteSlide",
      data: [
        { name: "quote", content: "Knowledge is power" },
        { name: "author", content: "Francis Bacon" }
      ]
    };

    const slide = QuoteSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("Knowledge is power");
    expect(html).toContain("Francis Bacon");
  });

  test("throws without quote", () => {
    expect(() =>
      QuoteSlide.fromJSON({ type: "quoteSlide", data: [] })
    ).toThrow("quoteSlide: quote required");
  });
});
