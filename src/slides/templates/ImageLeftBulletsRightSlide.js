export const ImageLeftBulletsRightSlide = {
  type: "imageLeftBulletsRight",

  fromJSON(raw) {
    const image = raw.data?.find(d => d.name === "image")?.content;
    const bullets = raw.data
      ?.filter(d => d.name === "bullet")
      .map(d => d.content);

    if (!image || !bullets || bullets.length === 0) {
      throw new Error("imageLeftBulletsRight: image and bullets required");
    }

    return Object.freeze({
      type: "imageLeftBulletsRight",
      image,
      bullets,

      render({ visibleCount = bullets.length } = {}) {
        return `
          <section class="slide imageLeftBulletsRight">
            <img src="${image}" alt="" />
            <ul>
              ${bullets.map((text, i) =>
                i < visibleCount ? `<li>${text}</li>` : ""
              ).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
};
