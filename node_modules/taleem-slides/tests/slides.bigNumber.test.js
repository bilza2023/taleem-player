import { describe, test, expect } from "vitest";
import { BigNumberSlide } from "../src/slides/BigNumberSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("BigNumberSlide", () => {
  test("renders bigNumber from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      slide => slide.type === "bigNumber"
    );

    const slide = BigNumberSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("bigNumber");
    expect(html).toContain(slide.number);
  });
});
