// src/utils/assertPlayable.js

export function assertDeckPlayable(deck) {
    if (!deck || deck.version !== "deck-v1") {
      throw new Error("Invalid deck version");
    }
  
    if (!Array.isArray(deck.deck)) {
      throw new Error("Deck must contain slides");
    }
  
    deck.deck.forEach((s, i) => {
      if (typeof s.start !== "number" || typeof s.end !== "number") {
        throw new Error(`Slide ${i} has invalid timing`);
      }
      if (s.end <= s.start) {
        throw new Error(`Slide ${i} end must be > start`);
      }
    });
  
    return true;
  }
  