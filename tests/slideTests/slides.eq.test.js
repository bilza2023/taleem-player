import { describe, test, expect } from "vitest";
import { EqSlide } from "../../src/slides/templates/EqSlide.js";

describe("EqSlide", () => {
  const slideData = {
    type: "eq",
    data: [
      { name: "line", content: "L1" },
      {
        name: "line",
        content: "L2",
        spItems: [{ type: "spText", content: "E2" }]
      },
      {
        name: "line",
        content: "L3",
        spItems: [{ type: "spText", content: "E3" }]
      },
      { name: "line", content: "L4" },
      { name: "line", content: "L5" }
    ]
  };

  test("renders cumulative lines up to visibleCount", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ visibleCount: 3 });

    expect(html).toContain("L1");
    expect(html).toContain("L2");
    expect(html).toContain("L3");
    expect(html).not.toContain("L4");
  });

  test("renders explanation for active line only", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ visibleCount: 3 });

    expect(html).toContain("E3");
    expect(html).not.toContain("E2");
  });

  test("renders all lines when visibleCount equals total", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ visibleCount: 5 });

    expect(html).toContain("L1");
    expect(html).toContain("L5");
  });

  test("renders empty side panel if active line has no spItems", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ visibleCount: 1 });

    expect(html).not.toContain("E2");
    expect(html).not.toContain("E3");
  });

  test("does not introduce EQ-specific layout wrappers", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ visibleCount: 3 });

    expect(html).not.toContain("eq-left");
    expect(html).not.toContain("eq-right");
    expect(html).not.toContain("sidebar");
  });
});
