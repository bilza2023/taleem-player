import { describe, test, expect } from "vitest";
import { TwoColumnTextSlide } from "../../src/slides/templates/TwoColumnTextSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("TwoColumnTextSlide", () => {
  test("renders two-column structure", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "twoColumnText");
    const slide = TwoColumnTextSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain('class="slide twoColumnText"');
    expect(html).toContain('class="col left"');
    expect(html).toContain('class="col right"');
  });
});
