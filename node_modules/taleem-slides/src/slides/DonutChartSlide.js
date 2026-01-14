// DonutChartSlide.js
export const DonutChartSlide = {
  type: "donutChart",

  fromJSON(raw) {
    const segments = raw.data
      ?.filter(d => d.name === "segment")
      .map(d => ({
        label: d.content.label,
        value: d.content.value
      }));

    if (!segments?.length) {
      throw new Error("donutChart: requires at least one segment");
    }

    return Object.freeze({
      type: "donutChart",
      segments,

      render({ visibleCount = segments.length, activeIndex = null } = {}) {
        return `
          <section class="slide donutChart">
            <ul>
              ${segments.map((s, i) => {
                if (i >= visibleCount) return "";
                const cls =
                  i === activeIndex
                    ? "is-active"
                    : i < activeIndex
                    ? "is-dim"
                    : "";
                return `<li class="${cls}">${s.label}: ${s.value}</li>`;
              }).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
};
