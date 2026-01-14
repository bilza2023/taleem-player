

// TitleAndSubtitleSlide.js
export const TitleAndSubtitleSlide = {
  type: "titleAndSubtitle",

  fromJSON(raw) {
    const title = raw.data?.find(d => d.name === "title")?.content;
    const subtitle = raw.data?.find(d => d.name === "subtitle")?.content;

    if (!title || !subtitle) {
      throw new Error("titleAndSubtitle: requires title and subtitle");
    }

    return Object.freeze({
      type: "titleAndSubtitle",
      title,
      subtitle,

      render() {
        return `
          <section class="slide titleAndSubtitle">
            <h1>${title}</h1>
            <h2>${subtitle}</h2>
          </section>
        `;
      }
    });
  }
};
