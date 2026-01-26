import { describe, test, expect } from "vitest";
import { TableSlide } from "../../src/slides/templates/TableSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("TableSlide", () => {
  test("renders table structure from golden deck", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "table");

    expect(() => TableSlide.fromJSON(raw)).not.toThrow();

    const slide = TableSlide.fromJSON(raw);
    const html = slide.render();

    // structure assertions only (NEW schema)
    expect(html).toContain('<table class="slide table">');
    expect(html).toContain("<tbody>");
    expect(html).toContain("<tr>");
    expect(html).toContain("<td>");
  });
});
