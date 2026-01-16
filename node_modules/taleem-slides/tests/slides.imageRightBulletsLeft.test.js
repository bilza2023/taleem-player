import { describe, test, expect } from "vitest";
import { ImageRightBulletsLeftSlide } from "../src/slides/ImageRightBulletsLeftSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("ImageRightBulletsLeftSlide", () => {
  test("renders imageRightBulletsLeft from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      s => s.type === "imageRightBulletsLeft"
    );

    const slide = ImageRightBulletsLeftSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("imageRightBulletsLeft");
    expect(html).toContain("<img");
    expect(html).toContain("<li>");
  });
});
