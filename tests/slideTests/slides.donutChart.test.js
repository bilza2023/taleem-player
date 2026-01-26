import { describe, test, expect } from "vitest";
import { DonutChartSlide } from "../../src/slides/templates/DonutChartSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("DonutChartSlide", () => {
  test("renders donutChart structure", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "donutChart");
    const slide = DonutChartSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("donutChart");
    expect(html).toContain("donut");
  });
});
