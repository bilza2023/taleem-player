// tests/slides.table.test.js
import { describe, test, expect } from "vitest";
import { TableSlide } from "../src/slides/TableSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("TableSlide", () => {
  test("renders from golden deck", () => {
    const raw = goldenDeckV1.deck.find(s => s.type === "table");
    const slide = TableSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("slide table");
    expect(html).toContain("<th>A</th>");
    expect(html).toContain("<td>1</td>");
  });
});
