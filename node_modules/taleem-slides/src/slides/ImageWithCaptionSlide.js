// ImageWithCaptionSlide.js
export const ImageWithCaptionSlide = {
  type: "imageWithCaption",

  fromJSON(raw) {
    const src = raw.data?.find(d => d.name === "image")?.content;
    const caption = raw.data?.find(d => d.name === "caption")?.content;
    if (!src || !caption) {
      throw new Error("imageWithCaption: image and caption required");
    }

    return Object.freeze({
      type: "imageWithCaption",
      src,
      caption,

      render() {
        return `
          <figure class="slide imageWithCaption">
            <img src="${src}" alt="" />
            <figcaption>${caption}</figcaption>
          </figure>
        `;
      }
    });
  }
};
