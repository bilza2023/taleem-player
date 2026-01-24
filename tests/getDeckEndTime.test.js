
import { describe, it, expect } from "vitest";
import { getDeckEndTime } from "../src/index.js";
import { goldenDeck } from "./fixtures/goldenDeck.js";

describe("getDeckEndTime", () => {
  it("returns the end time of the last slide", () => {
    const endTime = getDeckEndTime(goldenDeck);

    // golden deck has 2 slides with implicit ordering
    expect(endTime).toBe(goldenDeck.deck[goldenDeck.deck.length - 1].end);
  });

  it("returns 0 for empty deck", () => {
    const emptyDeck = { deck: [] };
    expect(getDeckEndTime(emptyDeck)).toBe(0);
  });

  it("returns 0 for invalid deck input", () => {
    expect(getDeckEndTime(null)).toBe(0);
    expect(getDeckEndTime({})).toBe(0);
  });
});
