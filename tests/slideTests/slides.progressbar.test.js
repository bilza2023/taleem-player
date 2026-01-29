import { describe, test, expect } from "vitest";
import { Progressbar } from "../../src/slides/templates/Progressbar.js";
import { goldenDeckV1 } from "../../src/spec/goldenDeckV1.js";

describe("Progressbar", () => {
  test("renders progressbar structure", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "progressbar");
    const slide = Progressbar.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("progressbar");
    expect(html).toContain("progressbar-item");
    expect(html).toContain("progressbar-fill");
  });
});
