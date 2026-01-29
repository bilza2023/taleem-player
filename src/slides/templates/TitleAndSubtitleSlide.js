
// src/slides/TitleAndSubtitleSlide.js
export const TitleAndSubtitleSlide = {
  type: "titleAndSubtitle",

  fromJSON(raw) {
    const title = raw.data?.find(d => d.name === "title")?.content;
    const subtitle = raw.data?.find(d => d.name === "subtitle")?.content;

    if (!title) {
      throw new Error("titleAndSubtitle: requires title");
    }

    return Object.freeze({
      type: "titleAndSubtitle",
      render() {
        return `
          <section class="slide titleAndSubtitle">
            <h1>${title}</h1>
            ${subtitle ? `<h2>${subtitle}</h2>` : ``}
          </section>
        `;
      }
    });
  }
};
