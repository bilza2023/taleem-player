// StatisticSlide.js
export const StatisticSlide = {
  type: "statistic",

  fromJSON(raw) {
    const label = raw.data?.find(d => d.name === "label")?.content;
    const value = raw.data?.find(d => d.name === "value")?.content;

    if (!label || value === undefined) {
      throw new Error("statistic: requires label and value");
    }

    return Object.freeze({
      type: "statistic",
      label,
      value,

      render() {
        return `
          <section class="slide statistic">
            <div class="stat-value">${value}</div>
            <div class="stat-label">${label}</div>
          </section>
        `;
      }
    });
  }
};
