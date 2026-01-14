// ContactSlide.js
export const ContactSlide = {
  type: "contactSlide",

  fromJSON(raw) {
    const items = raw.data?.map(d => ({ content: d.content }));

    if (!items?.length) {
      throw new Error("contactSlide: content required");
    }

    return Object.freeze({
      type: "contactSlide",
      items,

      render() {
        return `
          <section class="slide contactSlide">
            ${items.map(i => `<div>${i.content}</div>`).join("")}
          </section>
        `;
      }
    });
  }
};
