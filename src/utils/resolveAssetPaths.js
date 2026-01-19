/**
 * Resolve image paths in a deck.
 * App-level utility. Mutates deck in place.
 */
export function resolveAssetPaths(deck, IMG_BASE) {
  // -----------------------------
  // background image
  // -----------------------------
  if (
    deck.background?.backgroundImage &&
    typeof deck.background.backgroundImage === "string"
  ) {
    deck.background.backgroundImage =
      IMG_BASE + deck.background.backgroundImage.split("/").pop();
  }

  // -----------------------------
  // slide-level images
  // -----------------------------
  deck.deck.forEach(slide => {
    slide.data?.forEach(item => {
      if (item.name === "image" && typeof item.content === "string") {
        item.content = IMG_BASE + item.content.split("/").pop();
      }
    });
  });

  return deck;
}
