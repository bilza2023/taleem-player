
export const EqSlide = {
  type: "eq",

  fromJSON(raw) {
    const lines = raw.data ?? [];

    return Object.freeze({
      type: "eq",
      lines,

      render({ visibleCount = lines.length } = {}) {
        const end = Math.min(visibleCount, lines.length);
        const visibleLines = lines.slice(0, end);

        const activeLine = end > 0 ? lines[end - 1] : null;
        const spItems = activeLine?.spItems ?? [];

        return `
          <section class="slide eq">
            
            <!-- LEFT: lines (pure bullet behavior) -->
            <ul class="eq-lines">
              ${visibleLines.map(
                line => `<li class="eq-line">${line.content}</li>`
              ).join("")}
            </ul>

            <!-- RIGHT: explanation panel -->
            <div class="eq-side-panel">
              ${spItems.map(item => {
                if (item.type === "spImage") {
                  return `
                    <div class="eq-explain-item eq-explain-image">
                      <img src="${item.content}" alt="" />
                    </div>
                  `;
                }

                // default: spText / spMath / spHeading (render as text for now)
                return `
                  <div class="eq-explain-item">
                    ${item.content}
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
