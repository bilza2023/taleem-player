// tests/slides.titleSlide.test.js
import { describe, test, expect } from "vitest";
import { TitleSlide } from "../src/slides/TitleSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("TitleSlide", () => {
  test("renders from golden deck", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "titleSlide");
    const slide = TitleSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("titleSlide");
    expect(html).toContain("Golden Deck");
  });
});
