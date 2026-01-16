
import { describe, test, expect } from "vitest";
import { DonutChartSlide } from "../src/slides/DonutChartSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("DonutChartSlide", () => {
  test("renders donutChart from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      slide => slide.type === "donutChart"
    );

    const slide = DonutChartSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("donutChart");
    expect(html).toContain("%");
  });
});

