// QuoteSlide.js
export const QuoteSlide = {
  type: "quoteSlide",

  fromJSON(raw) {
    const text = raw.data?.find(d => d.name === "quote")?.content;
    const author = raw.data?.find(d => d.name === "author")?.content;
    if (!text) throw new Error("quoteSlide: quote required");

    return Object.freeze({
      type: "quoteSlide",
      text,
      author,

      render() {
        return `
          <blockquote class="slide quoteSlide">
            <p>${text}</p>
            ${author ? `<footer>${author}</footer>` : ""}
          </blockquote>
        `;
      }
    });
  }
};
