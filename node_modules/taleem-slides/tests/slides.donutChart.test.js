// slides.donutChart.test.js
import { describe, test, expect } from "vitest";
import { DonutChartSlide } from "../src/slides/DonutChartSlide.js";

describe("DonutChartSlide", () => {
  test("renders segments", () => {
    const raw = {
      type: "donutChart",
      data: [
        { name: "segment", content: { label: "A", value: 40 } },
        { name: "segment", content: { label: "B", value: 60 } }
      ]
    };

    const slide = DonutChartSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("A");
    expect(html).toContain("40");
    expect(html).toContain("B");
    expect(html).toContain("60");
  });

  test("throws without segments", () => {
    expect(() =>
      DonutChartSlide.fromJSON({ type: "donutChart", data: [] })
    ).toThrow("donutChart: requires at least one segment");
  });
});
