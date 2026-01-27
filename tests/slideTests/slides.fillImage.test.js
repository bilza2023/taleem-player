
import { describe, test, expect } from "vitest";
import { FillImageSlide } from "../../src/slides/templates/FillImageSlide.js";
import { goldenDeckV1 } from "../../src/spec/goldenDeckV1.js";

describe("FillImageSlide", () => {
  test("renders fillImage from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      slide => slide.type === "fillImage"
    );

    const slide = FillImageSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("fillImage");
    expect(html).toContain("<img");
  });
});
