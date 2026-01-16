
export const ImageRightBulletsLeftSlide = {
  type: "imageRightBulletsLeft",

  fromJSON(raw) {
    const image = raw.data?.find(d => d.name === "image")?.content;
    const bullets = raw.data
      ?.filter(d => d.name === "bullet")
      .map(d => d.content);

    if (!image || !bullets || bullets.length === 0) {
      throw new Error("imageRightBulletsLeft: image and bullets required");
    }

    return Object.freeze({
      type: "imageRightBulletsLeft",
      image,
      bullets,

      render({ visibleCount = bullets.length } = {}) {
        return `
          <section class="slide imageRightBulletsLeft">
            <ul>
              ${bullets.map((text, i) =>
                i < visibleCount ? `<li>${text}</li>` : ""
              ).join("")}
            </ul>
            <img src="${image}" alt="" />
          </section>
        `;
      }
    });
  }
};
