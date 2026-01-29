import { describe, test, expect } from "vitest";
import { TitleAndParaSlide } from "../../src/slides/templates/TitleAndParaSlide.js";

describe("TitleAndParaSlide", () => {
  test("renders when both title and para exist", () => {
    const raw = {
      type: "titleAndPara",
      data: [
        { name: "title", content: "Hello", showAt: 0 },
        { name: "para", content: "World", showAt: 1 }
      ]
    };

    const slide = TitleAndParaSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain('class="slide titleAndPara"');
    expect(html).toContain("<h1>Hello</h1>");
    expect(html).toContain("<p>World</p>");
  });

  test("renders with title only", () => {
    const raw = {
      type: "titleAndPara",
      data: [{ name: "title", content: "Only Title", showAt: 0 }]
    };

    const slide = TitleAndParaSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("<h1>Only Title</h1>");
    expect(html).not.toContain("<p>");
  });

  test("renders with para only", () => {
    const raw = {
      type: "titleAndPara",
      data: [{ name: "para", content: "Only Para", showAt: 0 }]
    };

    const slide = TitleAndParaSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("<p>Only Para</p>");
    expect(html).not.toContain("<h1>");
  });

  test("throws when neither title nor para exist", () => {
    const raw = {
      type: "titleAndPara",
      data: []
    };

    expect(() => {
      TitleAndParaSlide.fromJSON(raw);
    }).toThrow("titleAndPara: requires at least title or para");
  });
});
