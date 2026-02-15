
export const ImageWithTitleSlide = {
  type: "imageWithTitle",

  fromJSON(raw) {
    const src = raw.data?.find(d => d.name === "image")?.content;
    const title = raw.data?.find(d => d.name === "title")?.content;

    if (!src || !title) {
      throw new Error("imageWithTitle: image and title required");
    }

    return Object.freeze({
      type: "imageWithTitle",
      src,
      title,

      render() {
        return `
          <section class="slide imageWithTitle">
            <img src="${src}" alt="" />
            <h1>${title}</h1>
          </section>
        `;
      }
    });
  }
};
