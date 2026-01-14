
// slides.fillImage.test.js
import { describe, test, expect } from "vitest";
import { FillImageSlide } from "../src/slides/FillImageSlide.js";

describe("FillImageSlide", () => {
  test("renders image", () => {
    const raw = {
      type: "fillImage",
      data: [{ name: "image", content: "/img.png" }]
    };

    const slide = FillImageSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("/img.png");
  });

  test("throws without image", () => {
    expect(() =>
      FillImageSlide.fromJSON({ type: "fillImage", data: [] })
    ).toThrow("fillImage: image required");
  });
});
