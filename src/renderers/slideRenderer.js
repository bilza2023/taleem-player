// src/renderers/slideRenderer.js

export function renderSlide(container, slide, items) {
    container.innerHTML = "";
  
    const slideEl = document.createElement("div");
    slideEl.className = `slide slide-${slide.type}`;
  
    items.forEach(item => {
      const el = document.createElement("div");
      el.className = `item item-${item.name || item.type}`;
      el.textContent = item.content ?? "";
      slideEl.appendChild(el);
    });
  
    container.appendChild(slideEl);
  }
  