// src/slides/TwoColumnTextSlide.js
export const TwoColumnTextSlide = {
  type: "twoColumnText",

  fromJSON(raw) {
    const left = raw.data?.filter(d => d.name === "left").map(d => d.content);
    const right = raw.data?.filter(d => d.name === "right").map(d => d.content);

    if (!left?.length || !right?.length) {
      throw new Error("twoColumnText: requires left and right");
    }

    return Object.freeze({
      type: "twoColumnText",
      render() {
        return `
          <section class="slide twoColumnText">
            <div class="col left">
              ${left.map(v => `<div>${v}</div>`).join("")}
            </div>
            <div class="col right">
              ${right.map(v => `<div>${v}</div>`).join("")}
            </div>
          </section>
        `;
      }
    });
  }
};
