import { describe, test, expect } from "vitest";
import { BarChartSlide } from "../src/slides/BarChartSlide.js";
import { goldenDeckV1 } from "taleem-core"; // path may vary in monorepo

describe("BarChartSlide", () => {
  test("renders barChart slide from golden deck", () => {
    // 1. Extract canonical barChart slide from golden deck
    const barChartSlide = goldenDeckV1.deck.find(
      slide => slide.type === "barChart"
    );

    // Safety check (optional but fine during refactor)
    expect(barChartSlide).toBeTruthy();

    // 2. Feed EXACT golden-deck data into renderer
    const slide = BarChartSlide.fromJSON(barChartSlide);
    const html = slide.render();

    // 3. Assert rendered HTML (presentation only)
    expect(html).toContain("bar");
    expect(html).toContain("span");
    expect(html).toContain("barChart");
  });
});
