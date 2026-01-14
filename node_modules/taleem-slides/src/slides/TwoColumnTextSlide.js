// TwoColumnTextSlide.js
export const TwoColumnTextSlide = {
  type: "twoColumnText",

  fromJSON(raw) {
    const left = raw.data
      ?.filter(d => d.name === "left")
      .map(d => ({ content: d.content }));

    const right = raw.data
      ?.filter(d => d.name === "right")
      .map(d => ({ content: d.content }));

    if (!left?.length || !right?.length) {
      throw new Error("twoColumnText: requires left and right columns");
    }

    return Object.freeze({
      type: "twoColumnText",
      left,
      right,

      render({
        leftVisibleCount = left.length,
        rightVisibleCount = right.length,
        leftActiveIndex = null,
        rightActiveIndex = null
      } = {}) {
        return `
          <section class="slide twoColumnText">
            <div class="col left">
              ${left.map((l, i) => {
                if (i >= leftVisibleCount) return "";
                const cls =
                  i === leftActiveIndex
                    ? "is-active"
                    : i < leftActiveIndex
                    ? "is-dim"
                    : "";
                return `<div class="${cls}">${l.content}</div>`;
              }).join("")}
            </div>
            <div class="col right">
              ${right.map((r, i) => {
                if (i >= rightVisibleCount) return "";
                const cls =
                  i === rightActiveIndex
                    ? "is-active"
                    : i < rightActiveIndex
                    ? "is-dim"
                    : "";
                return `<div class="${cls}">${r.content}</div>`;
              }).join("")}
            </div>
          </section>
        `;
      }
    });
  }
};
