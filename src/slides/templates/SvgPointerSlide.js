// SvgPointerSlide.js
export const SvgPointerSlide = {
  type: "svgPointer",

  fromJSON(raw) {
    const svg = raw.data?.find(d => d.name === "svg")?.content;
    if (!svg) throw new Error("svgPointer: svg required");

    return Object.freeze({
      type: "svgPointer",
      svg,

      render() {
        return `
          <section class="slide svgPointer">
            ${svg}
          </section>
        `;
      }
    });
  }
};
