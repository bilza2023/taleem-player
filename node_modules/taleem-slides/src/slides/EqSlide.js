// EqSlide.js
export const EqSlide = {
  type: "eq",

  fromJSON(raw) {
    if (!Array.isArray(raw.data)) {
      throw new Error("eq: data must be array");
    }

    const lines = raw.data.map(d => ({
      content: d.content
    }));

    return Object.freeze({
      type: "eq",
      lines,

      render({ activeIndex = null } = {}) {
        return `
          <section class="slide eq">
            ${lines.map((l, i) => {
              const cls =
                i === activeIndex
                  ? "is-active"
                  : i < activeIndex
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
