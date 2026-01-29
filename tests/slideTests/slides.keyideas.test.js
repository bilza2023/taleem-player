
import { describe, test, expect } from "vitest";
import { KeyIdeasSlide } from "../../src/slides/templates/KeyIdeasSlide.js";
import { goldenDeckV1 } from "../../src/spec/goldenDeckV1.js";

describe("KeyIdeasSlide", () => {
  test("renders keyIdeasSlide from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      slide => slide.type === "keyIdeasSlide"
    );

    const slide = KeyIdeasSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("keyIdeasSlide");
    expect(html).toContain("key-idea");
  });
});
