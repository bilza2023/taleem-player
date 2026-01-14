
// slides.bulletList.test.js
import { describe, test, expect } from "vitest";
import { BulletListSlide } from "../src/slides/BulletListSlide.js";

describe("BulletListSlide", () => {
  test("renders bullets with state", () => {
    const raw = {
      type: "bulletList",
      data: [
        { name: "bullet", content: "A" },
        { name: "bullet", content: "B" },
        { name: "bullet", content: "C" }
      ]
    };

    const slide = BulletListSlide.fromJSON(raw);
    const html = slide.render({ visibleCount: 2, activeIndex: 1 });

    expect(html).toContain("A");
    expect(html).toContain("B");
    expect(html).not.toContain("C");
    expect(html).toContain("is-active");
  });

  test("throws without bullets", () => {
    expect(() =>
      BulletListSlide.fromJSON({ type: "bulletList", data: [] })
    ).toThrow("bulletList: requires at least one bullet");
  });
});
