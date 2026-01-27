
import { describe, test, expect } from "vitest";
import { ImageWithCaptionSlide } from "../../src/slides/templates/ImageWithCaptionSlide.js";
import { goldenDeckV1 } from "../../src/spec/goldenDeckV1.js";

describe("ImageWithCaptionSlide", () => {
  test("renders imageWithCaption from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      s => s.type === "imageWithCaption"
    );

    const slide = ImageWithCaptionSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("imageWithCaption");
    expect(html).toContain("<figcaption>");
  });
});
