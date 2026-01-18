
# 📦 taleem-slides

> **Render slide JSON → HTML (nothing more, nothing less)**

`taleem-slides` is a **small, focused rendering library**.
It takes **validated slide JSON** and returns **HTML strings** using fixed, opinionated layouts.

No player.
No timing.
No DOM.
Just HTML.

---

## 🌐 Live Reference (Authoritative)

👉 **[https://bilza2023.github.io/taleem](https://bilza2023.github.io/taleem)**

This site is the **source of truth** for:

* supported slide types
* exact visual layouts
* real rendered output
* examples and behavior

If something here and the site disagree, **the site wins**.

---

## ✅ What taleem-slides DOES

* Converts slide JSON into HTML
* Implements fixed slide layouts
* Applies minimal state-based CSS classes
* Works in browser, player, SSR, or Node

---

## ❌ What taleem-slides DOES NOT do

`taleem-slides` does **not**:

* manage time or animations
* navigate slides
* validate decks or schemas
* apply CSS
* touch the DOM
* control presentation flow

Those responsibilities live **outside** this library.

---

## 🧠 Mental Model

```
slide JSON
↓
taleem-slides
↓
HTML string
```

That’s it.

How the HTML is:

* shown
* styled
* animated
* timed

…is **your responsibility**.

---

## 📦 Installation

```bash
npm install taleem-slides
```

---

## 🚀 Basic Usage

### 1️⃣ Get a slide renderer

```js
import { getSlideTemplate } from "taleem-slides";

const Slide = getSlideTemplate("bulletList");
```

---

### 2️⃣ Load slide JSON

```js
const slide = Slide.fromJSON({
  type: "bulletList",
  data: [
    { name: "bullet", content: "First point" },
    { name: "bullet", content: "Second point" }
  ]
});
```

`fromJSON()`:

* reads structure
* prepares render logic
* does **not** touch the DOM

---

### 3️⃣ Render HTML

```js
const html = slide.render({
  visibleCount: 1,
  activeIndex: 0
});
```

You decide what to do with the HTML.

---

## 🎛 Render State (Minimal)

Render state is a plain object.
Only pass what you need.

```ts
{
  visibleCount?: number
  activeIndex?: number
}
```

Each slide reads only the fields it cares about.

---

## 🎨 CSS Contract (Very Small)

Slides may emit these state classes only:

```text
.is-active
.is-dim
.is-hidden
```

All layout, color, animation, and transitions are **external**.

---

## 🧩 Supported Slides

See the live reference for visuals and examples:

👉 [https://bilza2023.github.io/taleem](https://bilza2023.github.io/taleem)

Categories include:

* titles and text
* bullet lists and columns
* images and image+text layouts
* tables and charts
* quotes, stats, and numbers
* equation slides

Layouts are **fixed by design**.
New layouts = new slide templates.

---

## 🧪 Guarantees

* Deterministic output
* No hidden state
* No configuration knobs
* Same input → same HTML

Safe to cache. Safe to reuse.

---

## 📍 Where it fits

`taleem-slides` can be used:

* directly in browsers
* inside presentation players
* in SSR pipelines
* in static generators
* in educational tools

It is intentionally small so it can sit **anywhere**.

---

## 🔒 Design Principle

> **Render HTML only.
> Never control presentation logic.**

---
