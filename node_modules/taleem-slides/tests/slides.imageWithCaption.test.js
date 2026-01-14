
// slides.imageWithCaption.test.js
import { describe, test, expect } from "vitest";
import { ImageWithCaptionSlide } from "../src/slides/ImageWithCaptionSlide.js";

describe("ImageWithCaptionSlide", () => {
  test("renders image and caption", () => {
    const raw = {
      type: "imageWithCaption",
      data: [
        { name: "image", content: "img.png" },
        { name: "caption", content: "Caption text" }
      ]
    };

    const slide = ImageWithCaptionSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("img.png");
    expect(html).toContain("Caption text");
  });

  test("throws if missing image or caption", () => {
    expect(() =>
      ImageWithCaptionSlide.fromJSON({ type: "imageWithCaption", data: [] })
    ).toThrow("imageWithCaption: image and caption required");
  });
});
