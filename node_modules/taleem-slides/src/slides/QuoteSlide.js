
export const QuoteSlide = {
  type: "quoteSlide",

  fromJSON(raw) {
    const quote = raw.data?.find(d => d.name === "quote")?.content;
    const author = raw.data?.find(d => d.name === "author")?.content;

    if (!quote) {
      throw new Error("quoteSlide: quote required");
    }

    return Object.freeze({
      type: "quoteSlide",
      quote,
      author,

      render() {
        return `
          <blockquote class="slide quoteSlide">
            <p>${quote}</p>
            ${author ? `<footer>${author}</footer>` : ""}
          </blockquote>
        `;
      }
    });
  }
};
