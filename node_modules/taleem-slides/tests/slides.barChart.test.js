// slides.barChart.test.js
import { describe, test, expect } from "vitest";
import { BarChartSlide } from "../src/slides/BarChartSlide.js";

describe("BarChartSlide", () => {
  test("builds and renders bars", () => {
    const raw = {
      type: "barChart",
      data: [
        { name: "bar", content: { label: "A", value: 10 } },
        { name: "bar", content: { label: "B", value: 20 } }
      ]
    };

    const slide = BarChartSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("A");
    expect(html).toContain("10");
    expect(html).toContain("B");
    expect(html).toContain("20");
  });

  test("throws if no bars", () => {
    expect(() =>
      BarChartSlide.fromJSON({ type: "barChart", data: [] })
    ).toThrow("barChart: requires at least one bar");
  });
});
