import { describe, test, expect } from "vitest";
import { EqSlide } from "../../src/slides/templates/EqSlide.js";

describe("EqSlide (new renderer)", () => {
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

  test("renders all lines when activeIndex is -1", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ activeIndex: -1 });

    expect(html).toContain("L1");
    expect(html).toContain("L5");
  });

  test("highlights active line only", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ activeIndex: 2 });

    expect(html).toContain("highlighted");
    expect(html).toContain("L3");
  });

  test("renders explanation only for active line", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ activeIndex: 2 });

    expect(html).toContain("E3");
    expect(html).not.toContain("E2");
  });

  test("renders empty side panel if active line has no spItems", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ activeIndex: 0 });

    expect(html).not.toContain("E2");
    expect(html).not.toContain("E3");
  });

  test("applies sliding window after 3rd line", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render({ activeIndex: 4 });

    // window should start at index 2 (5 - 3)
    expect(html).not.toContain("L1");
    expect(html).not.toContain("L2");
    expect(html).toContain("L3");
    expect(html).toContain("L5");
  });
});
