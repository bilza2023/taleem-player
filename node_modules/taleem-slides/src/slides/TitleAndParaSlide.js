// TitleAndParaSlide.js
export const TitleAndParaSlide = {
  type: "titleAndPara",

  fromJSON(raw) {
    const title = raw.data?.find(d => d.name === "title")?.content;
    const para = raw.data?.find(d => d.name === "para")?.content;

    if (!title || !para) {
      throw new Error("titleAndPara: requires title and para");
    }

    return Object.freeze({
      type: "titleAndPara",
      title,
      para,

      render() {
        return `
          <section class="slide titleAndPara">
            <h1>${title}</h1>
            <p>${para}</p>
          </section>
        `;
      }
    });
  }
};
