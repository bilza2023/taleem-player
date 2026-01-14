// CornerWordsSlide.js
export const CornerWordsSlide = {
  type: "cornerWordsSlide",

  fromJSON(raw) {
    const words = raw.data
      ?.filter(d => d.name === "word")
      .map(d => ({ content: d.content }));

    if (!words?.length) {
      throw new Error("cornerWordsSlide: requires at least one word");
    }

    return Object.freeze({
      type: "cornerWordsSlide",
      words,

      render({ visibleCount = words.length } = {}) {
        return `
          <section class="slide cornerWordsSlide">
            ${words.map((w, i) => {
              if (i >= visibleCount) return "";
              return `<span class="corner-word corner-${i + 1}">${w.content}</span>`;
            }).join("")}
          </section>
        `;
      }
    });
  }
};
