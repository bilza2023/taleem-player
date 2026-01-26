import { describe, test, expect } from "vitest";
import { EqSlide } from "../../src/slides/templates/EqSlide.js";

describe("EqSlide", () => {
  const slideData = {
    type: "eq",
    start: 90,
    end: 100,
    data: [
      { name: "line", content: "L1", showAt: 90 },
      {
        name: "line",
        content: "L2",
        showAt: 91,
        spItems: [{ type: "spText", content: "E2" }]
      },
      {
        name: "line",
        content: "L3",
        showAt: 92,
        spItems: [{ type: "spText", content: "E3" }]
      },
      { name: "line", content: "L4", showAt: 93 },
      { name: "line", content: "L5", showAt: 94 }
    ]
  };

  test("timed mode renders cumulative lines", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render(92);

    expect(html).toContain("L1");
    expect(html).toContain("L2");
    expect(html).toContain("L3");
  });

  test("only active line shows explanation in timed mode", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render(92);

    expect(html).toContain("E3");
    expect(html).not.toContain("E2");
  });

  test("rolling window keeps last 3 lines", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render(94);

    expect(html).not.toContain("L1");
    expect(html).not.toContain("L2");
    expect(html).toContain("L3");
    expect(html).toContain("L4");
    expect(html).toContain("L5");
  });

  test("no-timing mode renders all lines and all explanations", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render(null);

    expect(html).toContain("L1");
    expect(html).toContain("L2");
    expect(html).toContain("L3");
    expect(html).toContain("L4");
    expect(html).toContain("L5");
    expect(html).toContain("E2");
    expect(html).toContain("E3");
  });

  test("does not render side panel layout", () => {
    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render(92);

    expect(html).not.toContain("eq-left");
    expect(html).not.toContain("eq-right");
    expect(html).not.toContain("sidebar");
  });
});
