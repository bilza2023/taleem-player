
// tests/slides.titleAndPara.test.js
import { describe, test, expect } from "vitest";
import { TitleAndParaSlide } from "../src/slides/TitleAndParaSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("TitleAndParaSlide", () => {
  test("renders from golden deck", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "titleAndPara");
    const slide = TitleAndParaSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("titleAndPara");
    expect(html).toContain("End");
    expect(html).toContain("All 21 slide types validated.");
  });
});
