export function resolveBackground({ deckBackground, theme }) {
    if (deckBackground) return deckBackground;
  
    return {
      backgroundColor: theme.surfaceColor,
      backgroundImage: null,
      backgroundImageOpacity: 1
    };
  }
  