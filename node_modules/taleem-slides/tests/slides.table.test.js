import { describe, test, expect } from "vitest";
import { TableSlide } from "../src/slides/TableSlide.js";

describe("table", () => {
  test("builds with rows", () => {
    const raw = {
      type: "table",
      data: [
        { name: "row", content: ["A", "B"] },
        { name: "row", content: ["C", "D"] }
      ]
    };

    const slide = TableSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("<td>A</td>");
    expect(html).toContain("<td>D</td>");
  });

  test("throws if no rows provided", () => {
    expect(() =>
      TableSlide.fromJSON({
        type: "table",
        data: []
      })
    ).toThrow("table: requires at least one row");
  });

  test("render output is deterministic", () => {
    const raw = {
      type: "table",
      data: [{ name: "row", content: ["X"] }]
    };

    const a = TableSlide.fromJSON(raw);
    const b = TableSlide.fromJSON(raw);

    expect(a.render()).toBe(b.render());
  });
});
