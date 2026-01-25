export const EqSlide = {
  type: "eq",

  fromJSON(raw) {
    const lines = raw.data
      ?.filter(d => d.name === "line")
      .map(d => ({
        content: d.content,
        spItems: Array.isArray(d.spItems) ? d.spItems : []
      }));

    if (!lines || lines.length === 0) {
      throw new Error("eq: requires at least one line");
    }

    const WINDOW_SIZE = 4;

    return Object.freeze({
      type: "eq",
      lines,

      render({ visibleCount = lines.length, activeIndex = -1 } = {}) {
        const end = Math.min(visibleCount, lines.length);
        const start = Math.max(0, end - WINDOW_SIZE);
        const windowed = lines.slice(start, end);

        const localActive =
          activeIndex >= start && activeIndex < end
            ? activeIndex - start
            : -1;

        const activeSpItems =
          activeIndex >= 0 && activeIndex < lines.length
            ? lines[activeIndex].spItems
            : [];

        return `
          <section class="slide eq">
            <div class="eq-layout">

              <div class="eq-left">
                ${windowed
                  .map(
                    (l, i) => `
                      <div class="eq-line ${
                        i === localActive ? "is-active" : ""
                      }">
                        ${l.content}
                      </div>
                    `
                  )
                  .join("")}
              </div>

              <div class="eq-right">
                ${activeSpItems
                  .map(
                    sp => `
                      <div class="eq-sp-item eq-${sp.type || "item"}">
                        ${sp.content}
                      </div>
                    `
                  )
                  .join("")}
              </div>

            </div>
          </section>
        `;
      }
    });
  }
};
