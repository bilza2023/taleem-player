
// slides.bigNumber.test.js
import { describe, test, expect } from "vitest";
import { BigNumberSlide } from "../src/slides/BigNumberSlide.js";

describe("BigNumberSlide", () => {
  test("renders number and label", () => {
    const raw = {
      type: "bigNumber",
      data: [
        { name: "number", content: 42 },
        { name: "label", content: "Students" }
      ]
    };

    const slide = BigNumberSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("42");
    expect(html).toContain("Students");
  });

  test("throws without number", () => {
    expect(() =>
      BigNumberSlide.fromJSON({ type: "bigNumber", data: [] })
    ).toThrow("bigNumber: number required");
  });
});
