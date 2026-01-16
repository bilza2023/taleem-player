
// tests/slides.titleAndSubtitle.test.js
import { describe, test, expect } from "vitest";
import { TitleAndSubtitleSlide } from "../src/slides/TitleAndSubtitleSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("TitleAndSubtitleSlide", () => {
  test("renders from golden deck", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "titleAndSubtitle");
    const slide = TitleAndSubtitleSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("titleAndSubtitle");
    expect(html).toContain("Title & Subtitle");
    expect(html).toContain("Schema language demo");
  });
});
