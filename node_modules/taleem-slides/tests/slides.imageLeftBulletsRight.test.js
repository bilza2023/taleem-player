
import { describe, test, expect } from "vitest";
import { ImageLeftBulletsRightSlide } from "../src/slides/ImageLeftBulletsRightSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("ImageLeftBulletsRightSlide", () => {
  test("renders imageLeftBulletsRight from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      s => s.type === "imageLeftBulletsRight"
    );

    const slide = ImageLeftBulletsRightSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("imageLeftBulletsRight");
    expect(html).toContain("<img");
    expect(html).toContain("<li>");
  });
});
