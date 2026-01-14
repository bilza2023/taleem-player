
// slides.imageLeftBulletsRight.test.js
import { describe, test, expect } from "vitest";
import { ImageLeftBulletsRightSlide } from "../src/slides/ImageLeftBulletsRightSlide.js";

describe("ImageLeftBulletsRightSlide", () => {
  test("renders image and bullets", () => {
    const raw = {
      type: "imageLeftBulletsRight",
      data: [
        { name: "image", content: "img.png" },
        { name: "bullet", content: "One" }
      ]
    };

    const slide = ImageLeftBulletsRightSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("img.png");
    expect(html).toContain("One");
  });
});
