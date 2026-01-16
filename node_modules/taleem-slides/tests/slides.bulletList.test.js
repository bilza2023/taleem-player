import { describe, test, expect } from "vitest";
import { BulletListSlide } from "../src/slides/BulletListSlide.js";
import { goldenDeckV1 } from "taleem-core";

describe("BulletListSlide", () => {
  test("renders bulletList from golden deck", () => {
    const slideData = goldenDeckV1.deck.find(
      slide => slide.type === "bulletList"
    );

    const slide = BulletListSlide.fromJSON(slideData);
    const html = slide.render();

    expect(html).toContain("bulletList");
    expect(html).toContain("<li");
  });
});
