import { describe, test, expect } from "vitest";
import { TitleAndSubtitleSlide } from "../../src/slides/templates/TitleAndSubtitleSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("TitleAndSubtitleSlide", () => {
  test("renders title and subtitle structure", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "titleAndSubtitle");
    const slide = TitleAndSubtitleSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("titleAndSubtitle");
    expect(html).toContain("<h1>");
    expect(html).toContain("<h2>");
  });
});
