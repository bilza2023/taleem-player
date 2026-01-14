import { describe, test, expect } from "vitest";
import { TitleAndSubtitleSlide } from "../src/slides/TitleAndSubtitleSlide.js";

describe("TitleAndSubtitleSlide", () => {
  test("builds successfully", () => {
    const raw = {
      type: "titleAndSubtitle",
      data: [
        { name: "title", content: "Hello" },
        { name: "subtitle", content: "World" }
      ]
    };

    const slide = TitleAndSubtitleSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("Hello");
    expect(html).toContain("World");
  });

  test("throws on missing data", () => {
    expect(() =>
      TitleAndSubtitleSlide.fromJSON({
        type: "titleAndSubtitle",
        data: []
      })
    ).toThrow("titleAndSubtitle: requires title and subtitle");
  });
});
