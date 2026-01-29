import { describe, test, expect } from "vitest";
import { BarChartSlide } from "../../src/slides/templates/BarChartSlide";
import { goldenDeckV1 } from "../../src/spec/goldenDeckV1.js";

describe("BarChartSlide", () => {
  test("renders barChart slide from golden deck", () => {
    // 1. Extract canonical barChart slide from golden deck
    const barChartSlide = goldenDeckV1.deck.find(
      slide => slide.type === "barChart"
    );

    // Safety check
    expect(barChartSlide).toBeTruthy();

    // 2. Render
    const slide = BarChartSlide.fromJSON(barChartSlide);
    const html = slide.render();

    // 3. Assert rendered HTML structure (current renderer)
    expect(html).toContain("barChart");
    expect(html).toContain("bar-row");
    expect(html).toContain("bar-fill");
    expect(html).toContain("bar-label");
    expect(html).toContain("bar-value");
  });
});
