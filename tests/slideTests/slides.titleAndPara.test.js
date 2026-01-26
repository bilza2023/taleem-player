import { describe, test, expect } from "vitest";
import { TitleAndParaSlide } from "../../src/slides/templates/TitleAndParaSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("TitleAndParaSlide", () => {
  test("renders title and paragraph structure", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "titleAndPara");
    const slide = TitleAndParaSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain('class="slide titleAndPara"');
    expect(html).toContain("<h1>");
    expect(html).toContain("<p>");
  });
});
