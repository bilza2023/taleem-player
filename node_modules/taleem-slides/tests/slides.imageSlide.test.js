

// slides.imageSlide.test.js
import { describe, test, expect } from "vitest";
import { ImageSlide } from "../src/slides/ImageSlide.js";

describe("ImageSlide", () => {
  test("renders image", () => {
    const raw = {
      type: "imageSlide",
      data: [{ name: "image", content: "img.png" }]
    };

    const slide = ImageSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("img.png");
  });

  test("throws without image", () => {
    expect(() =>
      ImageSlide.fromJSON({ type: "imageSlide", data: [] })
    ).toThrow("imageSlide: image required");
  });
});
