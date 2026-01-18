// src/slides/TableSlide.js
export const TableSlide = {
  type: "table",

  fromJSON(raw) {
    const rows = raw.data;

    if (!Array.isArray(rows) || rows.length === 0) {
      console.warn("Empty table skipped", raw);
      return null;
    }

    return Object.freeze({
      type: "table",

      render() {
        return `
          <table class="slide table">
            <tbody>
              ${rows
                .map(
                  row =>
                    `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`
                )
                .join("")}
            </tbody>
          </table>
        `;
      }
    });
  }
};
