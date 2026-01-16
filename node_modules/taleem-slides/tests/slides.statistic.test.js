import { describe, test, expect } from "vitest";
import { StatisticSlide } from "../src/slides/StatisticSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("StatisticSlide", () => {
  test("renders statistic slide from golden deck", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "statistic");

    const slide = StatisticSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("slide statistic");
    expect(html).toContain("stat-value");
    expect(html).toContain("stat-label");
    expect(html).toContain("75%");
    expect(html).toContain("Completion Rate");
  });
});
