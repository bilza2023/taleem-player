// src/utils/timing.js

export function getDeckDuration(deck) {
    if (!deck?.deck?.length) return 0;
    return Math.max(...deck.deck.map(s => s.end));
  }
  
  export function getSlideAtTime(deck, time) {
    return deck.deck.find(s => time >= s.start && time < s.end) || null;
  }
  