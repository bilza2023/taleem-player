// src/renderers/eqRenderer.js

export function renderEQ(container, slide, items) {
    container.innerHTML = "";
  
    const eqEl = document.createElement("div");
    eqEl.className = "eq-slide";
  
    let activeLineEl = null;
  
    slide.data.forEach(line => {
      const lineEl = document.createElement("div");
      lineEl.className = "eq-line";
      lineEl.textContent = line.content;
  
      if (items.includes(line)) {
        lineEl.classList.add("active");
        activeLineEl = lineEl;
      }
  
      // sidebar items
      if (Array.isArray(line.spItems)) {
        const sp = document.createElement("div");
        sp.className = "eq-sidebar";
  
        line.spItems.forEach(spi => {
          const s = document.createElement("div");
          s.className = `sp-${spi.type}`;
          s.textContent = spi.content;
          sp.appendChild(s);
        });
  
        lineEl.appendChild(sp);
      }
  
      eqEl.appendChild(lineEl);
    });
  
    container.appendChild(eqEl);
  
    if (activeLineEl) {
      activeLineEl.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }
  