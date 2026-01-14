
// slides.imageWithTitle.test.js
import { describe, test, expect } from "vitest";
import { ImageWithTitleSlide } from "../src/slides/ImageWithTitleSlide.js";

describe("ImageWithTitleSlide", () => {
  test("renders image and title", () => {
    const raw = {
      type: "imageWithTitle",
      data: [
        { name: "image", content: "img.png" },
        { name: "title", content: "Title" }
      ]
    };

    const slide = ImageWithTitleSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("img.png");
    expect(html).toContain("Title");
  });

  test("throws if missing image or title", () => {
    expect(() =>
      ImageWithTitleSlide.fromJSON({ type: "imageWithTitle", data: [] })
    ).toThrow("imageWithTitle: image and title required");
  });
});
