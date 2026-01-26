export const ContactSlide = {
  type: "contactSlide",

  fromJSON(raw) {
    const items = raw.data?.map(d => d.content);

    if (!items || items.length === 0) {
      throw new Error("contactSlide: content required");
    }

    return Object.freeze({
      type: "contactSlide",
      items,

      render() {
        return `
          <section class="slide contactSlide">
            ${items.map(text => `<div>${text}</div>`).join("")}
          </section>
        `;
      }
    });
  }
};
