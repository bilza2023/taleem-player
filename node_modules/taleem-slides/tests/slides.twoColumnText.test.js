// tests/slides.twoColumnText.test.js
import { describe, test, expect } from "vitest";
import { TwoColumnTextSlide } from "../src/slides/TwoColumnTextSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("TwoColumnTextSlide", () => {
  test("renders from golden deck", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "twoColumnText");
    const slide = TwoColumnTextSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("twoColumnText");
    expect(html).toContain("Left column");
    expect(html).toContain("Right column");
  });
});
