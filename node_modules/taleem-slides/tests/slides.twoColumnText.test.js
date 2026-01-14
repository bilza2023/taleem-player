import { describe, test, expect } from "vitest";
import { TwoColumnTextSlide } from "../src/slides/TwoColumnTextSlide.js";

describe("TwoColumnTextSlide", () => {
  test("builds with left and right", () => {
    const raw = {
      type: "twoColumnText",
      data: [
        { name: "left", content: "L1" },
        { name: "right", content: "R1" }
      ]
    };

    const slide = TwoColumnTextSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("L1");
    expect(html).toContain("R1");
  });

  test("throws if one side missing", () => {
    expect(() =>
      TwoColumnTextSlide.fromJSON({
        type: "twoColumnText",
        data: [{ name: "left", content: "Only" }]
      })
    ).toThrow("twoColumnText: requires left and right columns");
  });
});
