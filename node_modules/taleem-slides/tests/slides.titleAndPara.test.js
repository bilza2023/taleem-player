// tests/slides.titleAndPara.test.js
import { describe, test, expect } from "vitest";
import { TitleAndParaSlide } from "../src/slides/TitleAndParaSlide.js";

describe("TitleAndParaSlide", () => {
  test("renders title and paragraph", () => {
    const slide = TitleAndParaSlide.fromJSON({
      type: "titleAndPara",
      data: [
        { name: "title", content: "Hello" },
        { name: "para", content: "World" }
      ]
    });

    const html = slide.render();

    expect(html).toContain("Hello");
    expect(html).toContain("World");
  });

  test("throws if title or para missing", () => {
    expect(() =>
      TitleAndParaSlide.fromJSON({
        type: "titleAndPara",
        data: []
      })
    ).toThrow("titleAndPara: requires title and para");
  });
});
