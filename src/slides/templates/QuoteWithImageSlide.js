export const QuoteWithImageSlide = {
  type: "quoteWithImage",

  fromJSON(raw) {
    const quote  = raw.data?.find(d => d.name === "quote")?.content;
    const image  = raw.data?.find(d => d.name === "image")?.content;
    const author = raw.data?.find(d => d.name === "author")?.content;

    if (!quote || !image) {
      throw new Error("quoteWithImage: quote and image required");
    }

    return Object.freeze({
      type: "quoteWithImage",
      quote,
      image,
      author,

      render() {
        return `
          <section class="slide quoteWithImage">
            <img src="${image}" alt="" />
            <blockquote>
              <p>${quote}</p>
              ${author ? `<footer>${author}</footer>` : ""}
            </blockquote>
          </section>
        `;
      }
    });
  }
};
