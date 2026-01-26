const WINDOW_SIZE = 3;

export const EqSlide = {
  type: "eq",

  fromJSON(raw) {
    const lines = raw.data ?? [];

    return Object.freeze({
      type: "eq",
      lines,

      render(time = null) {
        let activeIndex = -1;

        if (typeof time === "number") {
          for (let i = 0; i < lines.length; i++) {
            if (lines[i].showAt <= time) {
              activeIndex = i;
            }
          }
        }

        const isTimed = activeIndex !== -1;

        let start = 0;
        let end = lines.length;

        if (isTimed && activeIndex >= WINDOW_SIZE) {
          start = activeIndex - (WINDOW_SIZE - 1);
          end = activeIndex + 1;
        }

        const visible = lines.slice(start, end);

        return `
          <section class="slide eq">
            <div class="eq-slide">
              ${visible
                .map((line, localIndex) => {
                  const index = start + localIndex;
                  const isActive = isTimed && index === activeIndex;
                  const hasSp =
                    Array.isArray(line.spItems) && line.spItems.length > 0;

                  return `
                    <div class="eq-line ${isActive ? "active" : ""}">
                      <div class="eq-line-content">${line.content}</div>
                      ${
                        hasSp && (!isTimed || isActive)
                          ? `<div class="eq-sp-items">
                              ${line.spItems
                                .map(
                                  sp =>
                                    `<div class="eq-sp-item">${sp.content}</div>`
                                )
                                .join("")}
                            </div>`
                          : ""
                      }
                    </div>
                  `;
                })
                .join("")}
            </div>
          </section>
        `;
      }
    });
  }
};
