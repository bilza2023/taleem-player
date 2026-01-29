export const KeyIdeasSlide = {
  type: "keyIdeasSlide",

  fromJSON(raw) {
    const cards = raw.data
      ?.filter(d => d.name === "card")
      .map(d => ({ icon: d.icon, label: d.label }));

    if (!cards || cards.length === 0) {
      throw new Error("keyIdeasSlide requires at least one card");
    }

    return Object.freeze({
      type: "keyIdeasSlide",
      cards,

      render({ visibleCount = cards.length } = {}) {
        return `
          <section class="slide keyIdeasSlide">
            ${cards.map((c, i) => {
              if (i >= visibleCount) return "";
              return `
                <div class="key-idea">
                  <div class="icon">${c.icon}</div>
                  <div class="label">${c.label}</div>
                </div>
              `;
            }).join("")}
          </section>
        `;
      }
    });
  }
};
