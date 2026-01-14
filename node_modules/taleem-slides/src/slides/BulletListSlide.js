// BulletListSlide.js
export const BulletListSlide = {
  type: "bulletList",

  fromJSON(raw) {
    const bullets = raw.data
      ?.filter(d => d.name === "bullet")
      .map(d => ({ content: d.content }));

    if (!bullets?.length) {
      throw new Error("bulletList: requires at least one bullet");
    }

    return Object.freeze({
      type: "bulletList",
      bullets,

      render({ visibleCount = bullets.length, activeIndex = null } = {}) {
        return `
          <section class="slide bulletList">
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
          </section>
        `;
      }
    });
  }
};
