
// slides.cornerWordsSlide.test.js
import { describe, test, expect } from "vitest";
import { CornerWordsSlide } from "../src/slides/CornerWordsSlide.js";

describe("CornerWordsSlide", () => {
  test("renders words", () => {
    const raw = {
      type: "cornerWordsSlide",
      data: [{ name: "word", content: "A" }]
    };

    const slide = CornerWordsSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("A");
  });

  test("throws without words", () => {
    expect(() =>
      CornerWordsSlide.fromJSON({ type: "cornerWordsSlide", data: [] })
    ).toThrow("cornerWordsSlide: requires at least one word");
  });
});
