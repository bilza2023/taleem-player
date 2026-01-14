
// slides.contactSlide.test.js
import { describe, test, expect } from "vitest";
import { ContactSlide } from "../src/slides/ContactSlide.js";

describe("ContactSlide", () => {
  test("renders contact lines", () => {
    const raw = {
      type: "contactSlide",
      data: [
        { name: "line", content: "Email" },
        { name: "line", content: "Phone" }
      ]
    };

    const slide = ContactSlide.fromJSON(raw);
    const html = slide.render();

    expect(html).toContain("Email");
    expect(html).toContain("Phone");
  });

  test("throws without content", () => {
    expect(() =>
      ContactSlide.fromJSON({ type: "contactSlide", data: [] })
    ).toThrow("contactSlide: content required");
  });
});
