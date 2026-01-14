
// slides.statistic.test.js
import { describe, test, expect } from "vitest";
import { StatisticSlide } from "../src/slides/StatisticSlide.js";

describe("StatisticSlide", () => {
  test("renders statistic", () => {
    const raw = {
      type: "statistic",
      data: [
        { name: "label", content: "Students" },
        { name: "value", content: 1200 }
      ]
    };

    const slide = StatisticSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("Students");
    expect(html).toContain("1200");
  });

  test("throws if missing label or value", () => {
    expect(() =>
      StatisticSlide.fromJSON({ type: "statistic", data: [] })
    ).toThrow("statistic: requires label and value");
  });
});
