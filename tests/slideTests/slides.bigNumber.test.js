import { describe, test, expect } from "vitest";
import { BigNumberSlide } from "../../src/slides/templates/BigNumberSlide.js";
import { goldenDeckV1 } from "../../src/spec/goldenDeckV1.js";

describe("BigNumberSlide", () => {
  test("renders bigNumber structure", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "bigNumber");
    const slide = BigNumberSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain('class="slide bigNumber"');
    expect(html).toContain('class="number"');
    expect(html).toContain('class="label"');
  });
});
