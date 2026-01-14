
// ImageRightBulletsLeftSlide.js
export const ImageRightBulletsLeftSlide = {
  type: "imageRightBulletsLeft",

  fromJSON(raw) {
    const image = raw.data?.find(d => d.name === "image")?.content;
    const bullets = raw.data
      ?.filter(d => d.name === "bullet")
      .map(d => ({ content: d.content }));

    if (!image || !bullets?.length) {
      throw new Error("imageRightBulletsLeft: image and bullets required");
    }

    return Object.freeze({
      type: "imageRightBulletsLeft",
      image,
      bullets,

      render({ visibleCount = bullets.length, activeIndex = null } = {}) {
        return `
          <section class="slide imageRightBulletsLeft">
            <ul>
              ${bullets.map((b, i) => {
                if (i >= visibleCount) return "";
                const cls =
                  i === activeIndex
                    ? "is-active"
                    : i < activeIndex
                    ? "is-dim"
                    : "";
                return `<li class="${cls}">${b.content}</li>`;
              }).join("")}
            </ul>
            <img src="${image}" alt="" />
          </section>
        `;
      }
    });
  }
};
