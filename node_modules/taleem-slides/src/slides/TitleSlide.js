
// TitleSlide.js
export const TitleSlide = {
  type: "titleSlide",

  fromJSON(raw) {
    const title = raw.data?.find(d => d.name === "title")?.content;
    if (!title) throw new Error("titleSlide: title required");

    return Object.freeze({
      type: "titleSlide",
      title,

      render() {
        return `
          <section class="slide titleSlide">
            <h1>${title}</h1>
          </section>
        `;
      }
    });
  }
};
