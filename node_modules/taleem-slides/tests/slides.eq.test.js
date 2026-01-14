
// slides.eq.test.js
import { describe, test, expect } from "vitest";
import { EqSlide } from "../src/slides/EqSlide.js";

describe("EqSlide", () => {
  test("renders equations with active index", () => {
    const raw = {
      type: "eq",
      data: [
        { content: "a+b=c" },
        { content: "x=y" }
      ]
    };

    const slide = EqSlide.fromJSON(raw);
    const html = slide.render({ activeIndex: 1 });

    expect(html).toContain("a+b=c");
    expect(html).toContain("x=y");
    expect(html).toContain("is-active");
  });

  test("throws if data is not array", () => {
    expect(() =>
      EqSlide.fromJSON({ type: "eq", data: null })
    ).toThrow("eq: data must be array");
  });
});
