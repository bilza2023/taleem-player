// src/slides/TableSlide.js
export const TableSlide = {
  type: "table",

  fromJSON(raw) {
    const headers = raw.data?.find(d => d.name === "header")?.content;
    const rows = raw.data?.find(d => d.name === "row")?.content;

    if (!headers || !rows?.length) {
      throw new Error("table: requires headers and at least one row");
    }

    return Object.freeze({
      type: "table",

      render() {
        return `
          <table class="slide table">
            <thead>
              <tr>${headers.map(h => `<th>${h}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${rows
                .map(
                  r =>
                    `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`
                )
                .join("")}
            </tbody>
          </table>
        `;
      }
    });
  }
};
