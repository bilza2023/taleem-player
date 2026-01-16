
import { describe, test, expect } from "vitest";
import { ContactSlide } from "../src/slides/ContactSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("ContactSlide", () => {
  test("renders contactSlide from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      slide => slide.type === "contactSlide"
    );

    const slide = ContactSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("contactSlide");
    expect(html).toContain("<div>");
  });
});
