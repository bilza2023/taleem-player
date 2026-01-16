
export const CornerWordsSlide = {
  type: "cornerWordsSlide",

  fromJSON(raw) {
    const cards = raw.data
      ?.filter(d => d.name === "card")
      .map(d => ({ icon: d.icon, label: d.label }));

    if (!cards || cards.length === 0) {
      throw new Error("cornerWordsSlide: requires at least one card");
    }

    return Object.freeze({
      type: "cornerWordsSlide",
      cards,

      render({ visibleCount = cards.length } = {}) {
        return `
          <section class="slide cornerWordsSlide">
            ${cards.map((c, i) => {
              if (i >= visibleCount) return "";
              return `
                <span class="corner-card corner-${i + 1}">
                  <span class="icon">${c.icon}</span>
                  <span class="label">${c.label}</span>
                </span>
              `;
            }).join("")}
          </section>
        `;
      }
    });
  }
};
