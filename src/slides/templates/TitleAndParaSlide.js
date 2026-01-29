// src/slides/TitleAndParaSlide.js
export const TitleAndParaSlide = {
  type: "titleAndPara",

  fromJSON(raw) {
    const title = raw.data?.find(d => d.name === "title")?.content;
    const para = raw.data?.find(d => d.name === "para")?.content;

    if (!title && !para) {
      throw new Error("titleAndPara: requires at least title or para");
    }

    return Object.freeze({
      type: "titleAndPara",
      render() {
        return `
          <section class="slide titleAndPara">
            ${title ? `<h1>${title}</h1>` : ``}
            ${para ? `<p>${para}</p>` : ``}
          </section>
        `;
      }
    });
  }
};
