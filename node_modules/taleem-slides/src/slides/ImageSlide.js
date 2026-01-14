// ImageSlide.js
export const ImageSlide = {
  type: "imageSlide",

  fromJSON(raw) {
    const src = raw.data?.find(d => d.name === "image")?.content;
    if (!src) throw new Error("imageSlide: image required");

    return Object.freeze({
      type: "imageSlide",
      src,

      render() {
        return `
          <section class="slide imageSlide">
            <img src="${src}" alt="" />
          </section>
        `;
      }
    });
  }
};
