export const StatisticSlide = {
  type: "statistic",

  fromJSON(raw) {
    const label = raw.data?.find(d => d.name === "label")?.content;
    const number = raw.data?.find(d => d.name === "number")?.content;

    if (!label || number === undefined) {
      throw new Error("statistic: requires number and label");
    }

    return Object.freeze({
      type: "statistic",
      label,
      number,

      render() {
        return `
          <section class="slide statistic">
            <div class="stat-value">${number}</div>
            <div class="stat-label">${label}</div>
          </section>
        `;
      }
    });
  }
};
