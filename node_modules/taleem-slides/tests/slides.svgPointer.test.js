

// slides.svgPointer.test.js
import { describe, test, expect } from "vitest";
import { SvgPointerSlide } from "../src/slides/SvgPointerSlide.js";

describe("SvgPointerSlide", () => {
  test("renders svg content", () => {
    const raw = {
      type: "svgPointer",
      data: [{ name: "svg", content: "<svg></svg>" }]
    };

    const slide = SvgPointerSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("<svg>");
  });

  test("throws without svg", () => {
    expect(() =>
      SvgPointerSlide.fromJSON({ type: "svgPointer", data: [] })
    ).toThrow("svgPointer: svg required");
  });
});
