export const DonutChartSlide = {
  type: "donutChart",

  fromJSON(raw) {
    const percentItem = raw.data.find(d => d.name === "percent");
    if (!percentItem) {
      throw new Error("donutChart requires percent");
    }

    const percent = Math.max(0, Math.min(100, Number(percentItem.content)));
    const label = raw.data.find(d => d.name === "label")?.content || "";
    const color = raw.data.find(d => d.name === "color")?.content || "currentColor";

    return Object.freeze({
      type: "donutChart",

      render({ visibleCount = 1 } = {}) {
        const radius = 60;
        const circumference = 2 * Math.PI * radius;
        const dash = visibleCount > 0 ? (percent / 100) * circumference : 0;

        return `
          <section class="slide donutChart">
            <svg viewBox="0 0 160 160" width="160" height="160">
              <circle
                cx="80" cy="80" r="${radius}"
                stroke="#333" stroke-width="20" fill="none"
              />
              <circle
                cx="80" cy="80" r="${radius}"
                stroke="${color}" stroke-width="20" fill="none"
                stroke-dasharray="${dash} ${circumference}"
                transform="rotate(-90 80 80)"
              />
              <text
                x="80" y="86"
                text-anchor="middle"
                font-size="28"
                font-weight="600"
                fill="#fff"
              >
                ${percent}%
              </text>
            </svg>
            <div class="donut-label">${label}</div>
          </section>
        `;
      }
    });
  }
};
