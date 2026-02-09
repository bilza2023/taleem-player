import { describe, it, expect } from "vitest";
import { validatePlayerDeckV1 } from "../src/validation/validatePlayerDeckV1.js";

describe("validatePlayerDeckV1", () => {
  it("passes for a valid minimal deck", () => {
    const deck = {
      deck: [
        {
          type: "titleAndPara",
          start: 0,
          end: 5,
          data: [
            { name: "title", content: "Hello", showAt: 0 },
            { name: "para", content: "World", showAt: 1 }
          ]
        }
      ]
    };

    const result = validatePlayerDeckV1(deck);
    expect(result.ok).toBe(true);
  });

  it("fails if slide start >= end", () => {
    const deck = {
      deck: [
        {
          type: "titleAndPara",
          start: 5,
          end: 5,
          data: []
        }
      ]
    };

    const result = validatePlayerDeckV1(deck);
    expect(result.ok).toBe(false);
    expect(result.errors[0].code).toBe("SLIDE_TIME_ORDER");
  });

  it("fails if slides are not sequential", () => {
    const deck = {
      deck: [
        { type: "titleAndPara", start: 0, end: 5, data: [] },
        { type: "titleAndPara", start: 6, end: 10, data: [] }
      ]
    };

    const result = validatePlayerDeckV1(deck);
    expect(result.ok).toBe(false);
    expect(result.errors.some(e => e.code === "SLIDE_SEQUENCE_BREAK")).toBe(true);
  });

  it("fails if showAt is outside slide range", () => {
    const deck = {
      deck: [
        {
          type: "bulletList",
          start: 0,
          end: 5,
          data: [
            { name: "bullet", content: "Bad", showAt: 10 }
          ]
        }
      ]
    };

    const result = validatePlayerDeckV1(deck);
    expect(result.ok).toBe(false);
    expect(result.errors[0].code).toBe("SHOWAT_OUT_OF_RANGE");
  });

  it("fails if EQ spItem defines showAt", () => {
    const deck = {
      deck: [
        {
          type: "eq",
          start: 0,
          end: 10,
          data: [
            {
              name: "line",
              type: "math",
              content: "$(a+b)^2$",
              showAt: 1,
              spItems: [
                { type: "spText", content: "bad", showAt: 2 }
              ]
            }
          ]
        }
      ]
    };

    const result = validatePlayerDeckV1(deck);
    expect(result.ok).toBe(false);
    expect(result.errors[0].code).toBe("EQ_SPITEM_SHOWAT_FORBIDDEN");
  });
});
