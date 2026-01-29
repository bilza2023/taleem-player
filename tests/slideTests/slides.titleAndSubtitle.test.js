
import { describe, test, expect } from "vitest";
import { TitleAndSubtitleSlide } from "../../src/slides/templates/TitleAndSubtitleSlide";


describe("TitleAndSubtitleSlide", () => {
  test("renders with title only (subtitle optional)", () => {
    const raw = {
      type: "titleAndSubtitle",
      data: [
        { name: "title", content: "Welcome to Taleem", showAt: 0 }
      ]
    };

    const slide = TitleAndSubtitleSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain('class="slide titleAndSubtitle"');
    expect(html).toContain("<h1>Welcome to Taleem</h1>");
    expect(html).not.toContain("<h2>");
  });

  test("renders subtitle when provided", () => {
    const raw = {
      type: "titleAndSubtitle",
      data: [
        { name: "title", content: "Welcome to Taleem", showAt: 0 },
        { name: "subtitle", content: "Learn with clarity", showAt: 1 }
      ]
    };

    const slide = TitleAndSubtitleSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("<h1>Welcome to Taleem</h1>");
    expect(html).toContain("<h2>Learn with clarity</h2>");
  });

  test("throws when title is missing", () => {
    const raw = {
      type: "titleAndSubtitle",
      data: [
        { name: "subtitle", content: "Orphan subtitle", showAt: 0 }
      ]
    };

    expect(() => {
      TitleAndSubtitleSlide.fromJSON(raw);
    }).toThrow("titleAndSubtitle: requires title");
  });
});
