export const EqSlide = {
  type: "eq",

  fromJSON(raw) {
    const lines = raw.data ?? [];
    const maxVisible = 3;

    return Object.freeze({
      type: "eq",
      lines,

      render({ activeIndex = -1 } = {}) {

        let start = 0;

        if (activeIndex >= maxVisible) {
          start = activeIndex - (maxVisible - 1);
        }

        // 🔥 DO NOT CUT FROM BOTTOM
        const visibleLines = lines.slice(start);

        const activeLine =
          activeIndex >= 0 && activeIndex < lines.length
            ? lines[activeIndex]
            : null;

        const spItems = activeLine?.spItems ?? [];

        return `
          <section class="slide eq">
            
            <ul class="eq-lines">
              ${visibleLines.map((line, index) => {
                const realIndex = start + index;
                return `
                  <li class="eq-line ${realIndex === activeIndex ? "highlighted" : ""}">
                    ${line.content}
                  </li>
                `;
              }).join("")}
            </ul>

            <div class="eq-side-panel">
              ${spItems.map(item => {
                if (item.type === "spImage") {
                  return `
                    <div class="eq-explain-item eq-explain-image">
                      <img src="${item.content}" alt="" />
                    </div>
                  `;
                }

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
