
import { describe, test, expect } from "vitest";
import { CornerWordsSlide } from "../src/slides/CornerWordsSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("CornerWordsSlide", () => {
  test("renders cornerWordsSlide from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      slide => slide.type === "cornerWordsSlide"
    );

    const slide = CornerWordsSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("cornerWordsSlide");
    expect(html).toContain("corner-card");
  });
});
