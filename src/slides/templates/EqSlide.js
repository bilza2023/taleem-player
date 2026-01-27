export const EqSlide = {
  type: "eq",

  fromJSON(raw) {
    const lines = raw.data ?? [];

    return Object.freeze({
      type: "eq",
      lines,

      render({ visibleCount = lines.length } = {}) {
        const lastIndex = Math.min(visibleCount - 1, lines.length - 1);
        const activeLine = lastIndex >= 0 ? lines[lastIndex] : null;
        const spItems = activeLine?.spItems ?? [];

        return `
          <section class="slide eq imageRightBulletsLeft">
            
            <!-- LEFT: lines (bullet behavior) -->
            <ul class="eq-lines">
              ${lines.map((line, i) =>
                i < visibleCount
                  ? `<li class="eq-line">${line.content}</li>`
                  : ""
              ).join("")}
            </ul>

            <!-- RIGHT: explanation panel -->
            <div class="eq-side-panel">
              ${spItems.map(
                item => `<div class="eq-explain-item">${item.content}</div>`
              ).join("")}
            </div>

          </section>
        `;
      }
    });
  }
};
