export const Progressbar = {
  type: "progressbar",

  fromJSON(raw) {
    const bars = raw.data
      ?.filter(d => d.name === "bar")
      .map(d => ({
        label: d.label,
        value: Math.max(0, Math.min(100, Number(d.value)))
      }));

    if (!bars || bars.length === 0) {
      throw new Error("progressbar requires at least one bar");
    }

    return Object.freeze({
      type: "progressbar",
      bars,

      render({ visibleCount = bars.length } = {}) {
        return `
          <section class="slide progressbar">
            ${bars.map((b, i) => {
              if (i >= visibleCount) return "";
              return `
                <div class="progressbar-item">
                  <div class="progressbar-label">${b.label}</div>
                  <div class="progressbar-track">
                    <div 
                        class="progressbar-fill"
                        style="width:${b.value}%"
                        data-value="${b.value}"
                      ></div>

                  </div>
                </div>
              `;
            }).join("")}
          </section>
        `;
      }
    });
  }
};
