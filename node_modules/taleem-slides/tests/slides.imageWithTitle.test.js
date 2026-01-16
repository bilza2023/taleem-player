
import { describe, test, expect } from "vitest";
import { ImageWithTitleSlide } from "../src/slides/ImageWithTitleSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("ImageWithTitleSlide", () => {
  test("renders imageWithTitle from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      s => s.type === "imageWithTitle"
    );

    const slide = ImageWithTitleSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("imageWithTitle");
    expect(html).toContain("<h1>");
  });
});
