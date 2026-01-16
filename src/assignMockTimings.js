
// src/assignMockTimings.js

import { zodDeckV1 } from "taleem-core";

/**
 * Compile a golden / browser-ready deck into a player-ready deck
 * by assigning mock absolute timings.
 *
 * @param {object} goldenDeck - schema-valid deck-v1 (no player guarantees)
 * @param {number} slideDuration - seconds per slide (default: 5)
 * @returns {object} player-ready deck
 */
export function assignMockTimings(goldenDeck, slideDuration = 5) {
  // ensure golden deck is canonical
  zodDeckV1.parse(goldenDeck);

  let currentTime = 0;

  const deckWithTimings = {
    ...goldenDeck,
    deck: goldenDeck.deck.map(slide => {
      const start = currentTime;
      const end = start + slideDuration;
      currentTime = end;

      const data = Array.isArray(slide.data)
        ? slide.data.map(item => ({
            ...item,
            showAt: start + (typeof item.showAt === "number" ? item.showAt : 0)
          }))
        : slide.data;

      return {
        ...slide,
        start,
        end,
        data
      };
    })
  };

  return deckWithTimings;
}
