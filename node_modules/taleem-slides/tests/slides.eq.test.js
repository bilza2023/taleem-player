
import { describe, test, expect } from "vitest";
import { EqSlide } from "../src/slides/EqSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("EqSlide", () => {
  test("renders eq slide from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      slide => slide.type === "eq"
    );

    const slide = EqSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("eq");
    expect(html).toContain("eq-line");
  });
});
