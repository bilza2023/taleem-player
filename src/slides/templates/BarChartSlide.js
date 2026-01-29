export const BarChartSlide = {
  type: "barChart",

  fromJSON(raw) {
    const bars = (raw.data || []).filter(d => d.name === "bar");

    if (!bars.length) {
      throw new Error("barChart requires bar items");
    }

    const maxValue = Math.max(...bars.map(b => b.value));

    return Object.freeze({
      type: "barChart",

      render({ visibleCount = bars.length, activeIndex = -1 } = {}) {
        return `
          <section class="slide barChart">
            <div class="bar-chart">
              ${bars.map((bar, i) => {
                if (i >= visibleCount) return "";

                const width = (bar.value / maxValue) * 100;

                return `
                  <div class="bar-row">
                    <div class="bar-label">${bar.label}</div>

                    <div class="bar-track">
                      <div
                        class="bar-fill"
                        style="width: ${width}%"
                      ></div>
                    </div>

                    <div class="bar-value">${bar.value}</div>
                  </div>
                `;
              }).join("")}
            </div>
          </section>
        `;
      }
    });
  }
};
