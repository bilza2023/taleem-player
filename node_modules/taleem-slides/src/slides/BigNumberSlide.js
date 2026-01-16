export const BigNumberSlide = {
  type: "bigNumber",

  fromJSON(raw) {
    const number = raw.data?.find(d => d.name === "number")?.content;
    const label  = raw.data?.find(d => d.name === "label")?.content;

    if (!number) {
      throw new Error("bigNumber: number required");
    }

    return Object.freeze({
      type: "bigNumber",
      number,
      label,

      render() {
        return `
          <section class="slide bigNumber">
            <div class="number">${number}</div>
            ${label ? `<div class="label">${label}</div>` : ""}
          </section>
        `;
      }
    });
  }
};
