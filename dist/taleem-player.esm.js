// node_modules/taleem-slides/src/slides/TitleSlide.js
var TitleSlide = {
  type: "titleSlide",
  fromJSON(raw) {
    const title = raw.data?.find((d) => d.name === "title")?.content;
    if (!title) {
      throw new Error("titleSlide: requires title");
    }
    return Object.freeze({
      type: "titleSlide",
      render() {
        return `
          <section class="slide titleSlide">
            <h1>${title}</h1>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/TitleAndSubtitleSlide.js
var TitleAndSubtitleSlide = {
  type: "titleAndSubtitle",
  fromJSON(raw) {
    const title = raw.data?.find((d) => d.name === "title")?.content;
    const subtitle = raw.data?.find((d) => d.name === "subtitle")?.content;
    if (!title || !subtitle) {
      throw new Error("titleAndSubtitle: requires title and subtitle");
    }
    return Object.freeze({
      type: "titleAndSubtitle",
      render() {
        return `
          <section class="slide titleAndSubtitle">
            <h1>${title}</h1>
            <h2>${subtitle}</h2>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/TitleAndParaSlide.js
var TitleAndParaSlide = {
  type: "titleAndPara",
  fromJSON(raw) {
    const title = raw.data?.find((d) => d.name === "title")?.content;
    const para = raw.data?.find((d) => d.name === "para")?.content;
    if (!title || !para) {
      throw new Error("titleAndPara: requires title and para");
    }
    return Object.freeze({
      type: "titleAndPara",
      render() {
        return `
          <section class="slide titleAndPara">
            <h1>${title}</h1>
            <p>${para}</p>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/BulletListSlide.js
var BulletListSlide = {
  type: "bulletList",
  fromJSON(raw) {
    const bullets = raw.data?.filter((d) => d.name === "bullet").map((d) => d.content);
    if (!bullets || bullets.length === 0) {
      throw new Error("bulletList: requires at least one bullet");
    }
    return Object.freeze({
      type: "bulletList",
      bullets,
      render({ visibleCount = bullets.length, activeIndex = null } = {}) {
        return `
          <section class="slide bulletList">
            <ul>
              ${bullets.map((text, i) => {
          if (i >= visibleCount) return "";
          const cls = i === activeIndex ? "is-active" : activeIndex !== null && i < activeIndex ? "is-dim" : "";
          return `<li class="${cls}">${text}</li>`;
        }).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/TwoColumnTextSlide.js
var TwoColumnTextSlide = {
  type: "twoColumnText",
  fromJSON(raw) {
    const left = raw.data?.filter((d) => d.name === "left").map((d) => d.content);
    const right = raw.data?.filter((d) => d.name === "right").map((d) => d.content);
    if (!left?.length || !right?.length) {
      throw new Error("twoColumnText: requires left and right");
    }
    return Object.freeze({
      type: "twoColumnText",
      render() {
        return `
          <section class="slide twoColumnText">
            <div class="col left">
              ${left.map((v) => `<div>${v}</div>`).join("")}
            </div>
            <div class="col right">
              ${right.map((v) => `<div>${v}</div>`).join("")}
            </div>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageSlide.js
var ImageSlide = {
  type: "imageSlide",
  fromJSON(raw) {
    const src = raw.data?.find((d) => d.name === "image")?.content;
    if (!src) throw new Error("imageSlide: image required");
    return Object.freeze({
      type: "imageSlide",
      src,
      render() {
        return `
          <section class="slide imageSlide">
            <img src="${src}" alt="" />
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/FillImageSlide.js
var FillImageSlide = {
  type: "fillImage",
  fromJSON(raw) {
    const image = raw.data?.find((d) => d.name === "image")?.content;
    if (!image) {
      throw new Error("fillImage: image required");
    }
    return Object.freeze({
      type: "fillImage",
      image,
      render() {
        return `
          <section class="slide fillImage">
            <img src="${image}" alt="" />
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageWithTitleSlide.js
var ImageWithTitleSlide = {
  type: "imageWithTitle",
  fromJSON(raw) {
    const src = raw.data?.find((d) => d.name === "image")?.content;
    const title = raw.data?.find((d) => d.name === "title")?.content;
    if (!src || !title) {
      throw new Error("imageWithTitle: image and title required");
    }
    return Object.freeze({
      type: "imageWithTitle",
      src,
      title,
      render() {
        return `
          <section class="slide imageWithTitle">
            <img src="${src}" alt="" />
            <h1>${title}</h1>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageWithCaptionSlide.js
var ImageWithCaptionSlide = {
  type: "imageWithCaption",
  fromJSON(raw) {
    const src = raw.data?.find((d) => d.name === "image")?.content;
    const caption = raw.data?.find((d) => d.name === "caption")?.content;
    if (!src || !caption) {
      throw new Error("imageWithCaption: image and caption required");
    }
    return Object.freeze({
      type: "imageWithCaption",
      src,
      caption,
      render() {
        return `
          <figure class="slide imageWithCaption">
            <img src="${src}" alt="" />
            <figcaption>${caption}</figcaption>
          </figure>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageLeftBulletsRightSlide.js
var ImageLeftBulletsRightSlide = {
  type: "imageLeftBulletsRight",
  fromJSON(raw) {
    const image = raw.data?.find((d) => d.name === "image")?.content;
    const bullets = raw.data?.filter((d) => d.name === "bullet").map((d) => d.content);
    if (!image || !bullets || bullets.length === 0) {
      throw new Error("imageLeftBulletsRight: image and bullets required");
    }
    return Object.freeze({
      type: "imageLeftBulletsRight",
      image,
      bullets,
      render({ visibleCount = bullets.length } = {}) {
        return `
          <section class="slide imageLeftBulletsRight">
            <img src="${image}" alt="" />
            <ul>
              ${bullets.map(
          (text, i) => i < visibleCount ? `<li>${text}</li>` : ""
        ).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ImageRightBulletsLeftSlide.js
var ImageRightBulletsLeftSlide = {
  type: "imageRightBulletsLeft",
  fromJSON(raw) {
    const image = raw.data?.find((d) => d.name === "image")?.content;
    const bullets = raw.data?.filter((d) => d.name === "bullet").map((d) => d.content);
    if (!image || !bullets || bullets.length === 0) {
      throw new Error("imageRightBulletsLeft: image and bullets required");
    }
    return Object.freeze({
      type: "imageRightBulletsLeft",
      image,
      bullets,
      render({ visibleCount = bullets.length } = {}) {
        return `
          <section class="slide imageRightBulletsLeft">
            <ul>
              ${bullets.map(
          (text, i) => i < visibleCount ? `<li>${text}</li>` : ""
        ).join("")}
            </ul>
            <img src="${image}" alt="" />
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/TableSlide.js
var TableSlide = {
  type: "table",
  fromJSON(raw) {
    const headers = raw.data?.find((d) => d.name === "header")?.content;
    const rows = raw.data?.find((d) => d.name === "row")?.content;
    if (!headers || !rows?.length) {
      throw new Error("table: requires headers and at least one row");
    }
    return Object.freeze({
      type: "table",
      render() {
        return `
          <table class="slide table">
            <thead>
              <tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${rows.map(
          (r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`
        ).join("")}
            </tbody>
          </table>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/StatisticSlide.js
var StatisticSlide = {
  type: "statistic",
  fromJSON(raw) {
    const label = raw.data?.find((d) => d.name === "label")?.content;
    const number = raw.data?.find((d) => d.name === "number")?.content;
    if (!label || number === void 0) {
      throw new Error("statistic: requires number and label");
    }
    return Object.freeze({
      type: "statistic",
      label,
      number,
      render() {
        return `
          <section class="slide statistic">
            <div class="stat-value">${number}</div>
            <div class="stat-label">${label}</div>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/BigNumberSlide.js
var BigNumberSlide = {
  type: "bigNumber",
  fromJSON(raw) {
    const number = raw.data?.find((d) => d.name === "number")?.content;
    const label = raw.data?.find((d) => d.name === "label")?.content;
    if (!number) {
      throw new Error("bigNumber: number required");
    }
    return Object.freeze({
      type: "bigNumber",
      number,
      label,
      render() {
        return `
          <section class="slide bigNumber">
            <div class="number">${number}</div>
            ${label ? `<div class="label">${label}</div>` : ""}
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/BarChartSlide.js
var BarChartSlide = {
  type: "barChart",
  fromJSON(raw) {
    const bars = raw.data?.filter((d) => d.name === "bar").map((d) => ({
      label: d.label,
      value: d.value
    }));
    if (!bars || bars.length === 0) {
      throw new Error("barChart: requires at least one bar");
    }
    return Object.freeze({
      type: "barChart",
      bars,
      render({ visibleCount = bars.length, activeIndex = null } = {}) {
        return `
          <section class="slide barChart">
            <ul class="bars">
              ${bars.map((b, i) => {
          if (i >= visibleCount) return "";
          const cls = i === activeIndex ? "is-active" : activeIndex !== null && i < activeIndex ? "is-dim" : "";
          return `
                  <li class="bar ${cls}">
                    <span class="bar-label">${b.label}</span>
                    <span class="bar-value">${b.value}</span>
                  </li>
                `;
        }).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/DonutChartSlide.js
var DonutChartSlide = {
  type: "donutChart",
  fromJSON(raw) {
    const segments = [];
    let current = null;
    for (const d of raw.data || []) {
      if (d.name === "percent") {
        current = { percent: d.content };
        segments.push(current);
      } else if (current && d.name === "label") {
        current.label = d.content;
      } else if (current && d.name === "color") {
        current.color = d.content;
      }
    }
    if (!segments.length) {
      throw new Error("donutChart: requires at least one segment");
    }
    return Object.freeze({
      type: "donutChart",
      segments,
      render({ visibleCount = segments.length } = {}) {
        return `
          <section class="slide donutChart">
            <ul>
              ${segments.map((s, i) => {
          if (i >= visibleCount) return "";
          return `<li>${s.label}: ${s.percent}%</li>`;
        }).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/QuoteSlide.js
var QuoteSlide = {
  type: "quoteSlide",
  fromJSON(raw) {
    const quote = raw.data?.find((d) => d.name === "quote")?.content;
    const author = raw.data?.find((d) => d.name === "author")?.content;
    if (!quote) {
      throw new Error("quoteSlide: quote required");
    }
    return Object.freeze({
      type: "quoteSlide",
      quote,
      author,
      render() {
        return `
          <blockquote class="slide quoteSlide">
            <p>${quote}</p>
            ${author ? `<footer>${author}</footer>` : ""}
          </blockquote>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/QuoteWithImageSlide.js
var QuoteWithImageSlide = {
  type: "quoteWithImage",
  fromJSON(raw) {
    const quote = raw.data?.find((d) => d.name === "quote")?.content;
    const image = raw.data?.find((d) => d.name === "image")?.content;
    const author = raw.data?.find((d) => d.name === "author")?.content;
    if (!quote || !image) {
      throw new Error("quoteWithImage: quote and image required");
    }
    return Object.freeze({
      type: "quoteWithImage",
      quote,
      image,
      author,
      render() {
        return `
          <section class="slide quoteWithImage">
            <img src="${image}" alt="" />
            <blockquote>
              <p>${quote}</p>
              ${author ? `<footer>${author}</footer>` : ""}
            </blockquote>
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/CornerWordsSlide.js
var CornerWordsSlide = {
  type: "cornerWordsSlide",
  fromJSON(raw) {
    const cards = raw.data?.filter((d) => d.name === "card").map((d) => ({ icon: d.icon, label: d.label }));
    if (!cards || cards.length === 0) {
      throw new Error("cornerWordsSlide: requires at least one card");
    }
    return Object.freeze({
      type: "cornerWordsSlide",
      cards,
      render({ visibleCount = cards.length } = {}) {
        return `
          <section class="slide cornerWordsSlide">
            ${cards.map((c, i) => {
          if (i >= visibleCount) return "";
          return `
                <span class="corner-card corner-${i + 1}">
                  <span class="icon">${c.icon}</span>
                  <span class="label">${c.label}</span>
                </span>
              `;
        }).join("")}
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/ContactSlide.js
var ContactSlide = {
  type: "contactSlide",
  fromJSON(raw) {
    const items = raw.data?.map((d) => d.content);
    if (!items || items.length === 0) {
      throw new Error("contactSlide: content required");
    }
    return Object.freeze({
      type: "contactSlide",
      items,
      render() {
        return `
          <section class="slide contactSlide">
            ${items.map((text) => `<div>${text}</div>`).join("")}
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/slides/EqSlide.js
var EqSlide = {
  type: "eq",
  fromJSON(raw) {
    const lines = raw.data?.filter((d) => d.name === "line").map((d) => ({
      type: d.type,
      content: d.content
    }));
    if (!lines || lines.length === 0) {
      throw new Error("eq: requires at least one line");
    }
    return Object.freeze({
      type: "eq",
      lines,
      render({ visibleCount = lines.length, activeIndex = null } = {}) {
        return `
          <section class="slide eq">
            ${lines.map((l, i) => {
          if (i >= visibleCount) return "";
          const cls = i === activeIndex ? "is-active" : activeIndex !== null && i < activeIndex ? "is-dim" : "";
          return `<div class="eq-line ${cls}">${l.content}</div>`;
        }).join("")}
          </section>
        `;
      }
    });
  }
};

// node_modules/taleem-slides/src/SlideTemplates.js
var SlideTemplates = {
  titleSlide: TitleSlide,
  titleAndSubtitle: TitleAndSubtitleSlide,
  titleAndPara: TitleAndParaSlide,
  bulletList: BulletListSlide,
  twoColumnText: TwoColumnTextSlide,
  imageSlide: ImageSlide,
  fillImage: FillImageSlide,
  imageWithTitle: ImageWithTitleSlide,
  imageWithCaption: ImageWithCaptionSlide,
  imageLeftBulletsRight: ImageLeftBulletsRightSlide,
  imageRightBulletsLeft: ImageRightBulletsLeftSlide,
  table: TableSlide,
  statistic: StatisticSlide,
  bigNumber: BigNumberSlide,
  barChart: BarChartSlide,
  donutChart: DonutChartSlide,
  quoteSlide: QuoteSlide,
  quoteWithImage: QuoteWithImageSlide,
  cornerWordsSlide: CornerWordsSlide,
  contactSlide: ContactSlide,
  eq: EqSlide
};

// node_modules/taleem-slides/src/getSlideTemplate.js
function getSlideTemplate(type) {
  const template = SlideTemplates[type];
  if (!template) {
    throw new Error(`Unknown slide template type "${type}"`);
  }
  return template;
}

// src/core/stage.js
function createStage(mount) {
  if (!mount) throw new Error("taleem-player: mount is required");
  const root = typeof mount === "string" ? document.querySelector(mount) : mount;
  if (!root) throw new Error("taleem-player: mount element not found");
  root.innerHTML = "";
  const stage = document.createElement("div");
  stage.className = "taleem-player-stage";
  stage.style.position = "relative";
  stage.style.width = "100%";
  stage.style.height = "100%";
  root.appendChild(stage);
  function clear() {
    stage.innerHTML = "";
  }
  function destroy() {
    root.innerHTML = "";
  }
  return {
    el: stage,
    clear,
    destroy
  };
}

// src/core/player.js
function createTaleemPlayer({ mount, deck }) {
  const stage = createStage(mount);
  let lastSlide = null;
  let lastRenderedKey = null;
  function getSlideAtTime(deck2, time) {
    const slides = deck2.deck;
    for (let i = slides.length - 1; i >= 0; i--) {
      const s = slides[i];
      if (time >= s.start && time < s.end) return s;
    }
    return null;
  }
  function computeRenderState(slide, time) {
    if (!Array.isArray(slide.data)) {
      return {};
    }
    let visibleCount = 0;
    let activeIndex = -1;
    slide.data.forEach((item, index) => {
      if (typeof item.showAt === "number" && time >= item.showAt) {
        visibleCount++;
        activeIndex = index;
      }
    });
    return {
      visibleCount,
      activeIndex
    };
  }
  function renderAt(time) {
    const slide = getSlideAtTime(deck, time);
    if (!slide) {
      stage.clear();
      lastSlide = null;
      lastRenderedKey = null;
      return;
    }
    const renderState = computeRenderState(slide, time);
    const renderKey = `${slide.start}-${renderState.visibleCount}-${renderState.activeIndex}`;
    if (slide !== lastSlide) {
      stage.clear();
      lastSlide = slide;
      lastRenderedKey = null;
    }
    if (renderKey === lastRenderedKey) {
      return;
    }
    const Template = getSlideTemplate(slide.type);
    const slideInstance = Template.fromJSON(slide);
    const html = slideInstance.render(renderState);
    stage.el.innerHTML = html;
    lastRenderedKey = renderKey;
  }
  function destroy() {
    stage.destroy();
  }
  return {
    renderAt,
    destroy
  };
}
export {
  createTaleemPlayer
};
