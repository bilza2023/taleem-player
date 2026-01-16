export const BulletListSlide = {
  type: "bulletList",

  fromJSON(raw) {
    const bullets = raw.data
      ?.filter(d => d.name === "bullet")
      .map(d => d.content);

    if (!bullets || bullets.length === 0) {
      throw new Error("bulletList: requires at least one bullet");
    }

    return Object.freeze({
      type: "bulletList",
      bullets,

      render({ visibleCount = bullets.length, activeIndex = null } = {}) {
        return `
          <section class="slide bulletList">
            <ul>
              ${bullets.map((text, i) => {
                if (i >= visibleCount) return "";
                const cls =
                  i === activeIndex
                    ? "is-active"
                    : activeIndex !== null && i < activeIndex
                    ? "is-dim"
                    : "";
                return `<li class="${cls}">${text}</li>`;
              }).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
};
