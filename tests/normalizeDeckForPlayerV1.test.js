import { describe, it, expect } from "vitest";
import { normalizeDeckForPlayerV1 } from "../src/validation/normalizeDeckForPlayerV1.js";
import { validatePlayerDeckV1 } from "../src/validation/validatePlayerDeckV1.js";

describe("normalizeDeckForPlayerV1", () => {
  it("adds start/end and showAt when missing", () => {
    const deck = {
      deck: [
        {
          type: "titleAndPara",
          data: [
            { name: "title", content: "Hello" },
            { name: "para", content: "World" }
          ]
        }
      ]
    };

    const fixed = normalizeDeckForPlayerV1(deck);
    const slide = fixed.deck[0];

    expect(slide.start).toBe(0);
    expect(slide.end).toBeGreaterThan(slide.start);

    slide.data.forEach(item => {
      expect(typeof item.showAt).toBe("number");
    });
  });

  it("forces sequential slide timing", () => {
    const deck = {
      deck: [
        { type: "titleAndPara", data: [] },
        { type: "titleAndPara", data: [] }
      ]
    };

    const fixed = normalizeDeckForPlayerV1(deck);

    expect(fixed.deck[0].start).toBe(0);
    expect(fixed.deck[1].start).toBe(fixed.deck[0].end);
  });

  it("clamps showAt inside slide range", () => {
    const deck = {
      deck: [
        {
          type: "bulletList",
          start: 0,
          end: 5,
          data: [
            { name: "bullet", content: "A", showAt: 100 }
          ]
        }
      ]
    };

    const fixed = normalizeDeckForPlayerV1(deck);
    const item = fixed.deck[0].data[0];

    expect(item.showAt).toBeLessThan(5);
    expect(item.showAt).toBeGreaterThanOrEqual(0);
  });

  it("removes showAt from EQ spItems", () => {
    const deck = {
      deck: [
        {
          type: "eq",
          data: [
            {
              name: "line",
              type: "math",
              content: "$(a+b)^2$",
              spItems: [
                { type: "spText", content: "explain", showAt: 99 }
              ]
            }
          ]
        }
      ]
    };

    const fixed = normalizeDeckForPlayerV1(deck);
    const spItem = fixed.deck[0].data[0].spItems[0];

    expect(spItem.showAt).toBeUndefined();
  });

  it("always produces a deck that passes player validation", () => {
    const brokenDeck = {
      deck: [
        {
          type: "eq",
          data: [
            {
              name: "line",
              type: "math",
              content: "$(a+b)^2$",
              spItems: [{ type: "spText", content: "note" }]
            }
          ]
        },
        {
          type: "titleAndPara",
          data: [{ name: "title", content: "Next" }]
        }
      ]
    };

    const fixed = normalizeDeckForPlayerV1(brokenDeck);
    const result = validatePlayerDeckV1(fixed);

    expect(result.ok).toBe(true);
  });
});
