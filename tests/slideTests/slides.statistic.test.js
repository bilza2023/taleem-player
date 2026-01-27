import { describe, test, expect } from "vitest";
import { StatisticSlide } from "../../src/slides/templates/StatisticSlide.js";
import { goldenDeckV1 } from "../../src/spec/goldenDeckV1.js";

describe("StatisticSlide", () => {
  test("renders statistic slide structure", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "statistic");
    const slide = StatisticSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain('class="slide statistic"');
    expect(html).toContain('class="stat-value"');
    expect(html).toContain('class="stat-label"');
  });
});
