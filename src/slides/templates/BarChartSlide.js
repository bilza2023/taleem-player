export const BarChartSlide = {
  type: "barChart",

  fromJSON(raw) {
    // Consume canonical deck-v1 shape directly
    const bars = raw.data
      ?.filter(d => d.name === "bar")
      .map(d => ({
        label: d.label,
        value: d.value
      }));

    if (!bars || bars.length === 0) {
      throw new Error("barChart: requires at least one bar");
    }

    return Object.freeze({
      type: "barChart",
      bars,

      render({ visibleCount = bars.length, activeIndex = null } = {}) {
        return `
          <section class="slide barChart">
            <ul class="bars">
              ${bars.map((b, i) => {
                if (i >= visibleCount) return "";
                const cls =
                  i === activeIndex
                    ? "is-active"
                    : activeIndex !== null && i < activeIndex
                    ? "is-dim"
                    : "";
                return `
                  <li class="bar ${cls}">
                    <span class="bar-label">${b.label}</span>
                    <span class="bar-value">${b.value}</span>
                  </li>
                `;
              }).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
};
