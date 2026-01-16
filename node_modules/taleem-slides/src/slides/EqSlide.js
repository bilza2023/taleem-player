
export const EqSlide = {
  type: "eq",

  fromJSON(raw) {
    const lines = raw.data
      ?.filter(d => d.name === "line")
      .map(d => ({
        type: d.type,
        content: d.content
      }));

    if (!lines || lines.length === 0) {
      throw new Error("eq: requires at least one line");
    }

    return Object.freeze({
      type: "eq",
      lines,

      render({ visibleCount = lines.length, activeIndex = null } = {}) {
        return `
          <section class="slide eq">
            ${lines.map((l, i) => {
              if (i >= visibleCount) return "";
              const cls =
                i === activeIndex
                  ? "is-active"
                  : activeIndex !== null && i < activeIndex
                  ? "is-dim"
                  : "";
              return `<div class="eq-line ${cls}">${l.content}</div>`;
            }).join("")}
          </section>
        `;
      }
    });
  }
};
