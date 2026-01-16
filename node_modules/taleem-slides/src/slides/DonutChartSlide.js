export const DonutChartSlide = {
  type: "donutChart",

  fromJSON(raw) {
    const segments = [];
    let current = null;

    for (const d of raw.data || []) {
      if (d.name === "percent") {
        current = { percent: d.content };
        segments.push(current);
      } else if (current && d.name === "label") {
        current.label = d.content;
      } else if (current && d.name === "color") {
        current.color = d.content;
      }
    }

    if (!segments.length) {
      throw new Error("donutChart: requires at least one segment");
    }

    return Object.freeze({
      type: "donutChart",
      segments,

      render({ visibleCount = segments.length } = {}) {
        return `
          <section class="slide donutChart">
            <ul>
              ${segments.map((s, i) => {
                if (i >= visibleCount) return "";
                return `<li>${s.label}: ${s.percent}%</li>`;
              }).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
};
