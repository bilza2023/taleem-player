// BigNumberSlide.js
export const BigNumberSlide = {
  type: "bigNumber",

  fromJSON(raw) {
    const value = raw.data?.find(d => d.name === "number")?.content;
    const label = raw.data?.find(d => d.name === "label")?.content;

    if (!value) throw new Error("bigNumber: number required");

    return Object.freeze({
      type: "bigNumber",
      value,
      label,

      render() {
        return `
          <section class="slide bigNumber">
            <div class="number">${value}</div>
            ${label ? `<div class="label">${label}</div>` : ""}
          </section>
        `;
      }
    });
  }
};
