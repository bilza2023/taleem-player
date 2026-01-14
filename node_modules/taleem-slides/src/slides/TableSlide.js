// TableSlide.js
export const TableSlide = {
  type: "table",

  fromJSON(raw) {
    const rows = raw.data
      ?.filter(d => d.name === "row")
      .map(d => ({ cells: d.content }));

    if (!rows?.length) {
      throw new Error("table: requires at least one row");
    }

    return Object.freeze({
      type: "table",
      rows,

      render({ visibleCount = rows.length, activeIndex = null } = {}) {
        return `
          <table class="slide table">
            ${rows.map((row, i) => {
              if (i >= visibleCount) return "";
              const cls =
                i === activeIndex
                  ? "is-active"
                  : i < activeIndex
                  ? "is-dim"
                  : "";
              return `
                <tr class="${cls}">
                  ${row.cells.map(c => `<td>${c}</td>`).join("")}
                </tr>
              `;
            }).join("")}
          </table>
        `;
      }
    });
  }
};
