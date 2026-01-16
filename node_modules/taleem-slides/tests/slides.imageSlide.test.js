
import { describe, test, expect } from "vitest";
import { ImageSlide } from "../src/slides/ImageSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("ImageSlide", () => {
  test("renders imageSlide from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      s => s.type === "imageSlide"
    );

    const slide = ImageSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("imageSlide");
    expect(html).toContain("<img");
  });
});
