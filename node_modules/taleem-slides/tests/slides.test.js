// tests/slides.test.js
import { describe, test, expect } from "vitest";
import { getSlideTemplate } from "../src/getSlideTemplate.js";

describe("taleem-slides public API", () => {
  test("getSlideTemplate returns a template with fromJSON", () => {
    const tpl = getSlideTemplate("titleSlide");
    expect(typeof tpl.fromJSON).toBe("function");
  });

  test("render output is deterministic", () => {
    const TitleSlide = getSlideTemplate("titleSlide");

    const slide = TitleSlide.fromJSON({
      type: "titleSlide",
      data: [{ name: "title", content: "Deterministic" }]
    });

    const html1 = slide.render();
    const html2 = slide.render();

    expect(html1).toBe(html2);
  });

  test("throws on unknown slide type", () => {
    expect(() => getSlideTemplate("does-not-exist")).toThrow();
  });
});
