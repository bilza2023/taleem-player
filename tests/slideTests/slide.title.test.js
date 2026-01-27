import { describe, test, expect } from "vitest";
import { TitleSlide } from "../../src/slides/templates/TitleSlide.js";
import { goldenDeckV1 } from "../../src/spec/goldenDeckV1.js";

describe("TitleSlide", () => {
  test("renders title slide structure", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "titleSlide");
    const slide = TitleSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("titleSlide");
    expect(html).toContain("<h1>");
  });
});
