
# 📦 taleem-slides

> **Simple HTML slide templates for JSON-based presentations**

`taleem-slides` is a **small, focused library** that turns
**plain slide JSON** into **HTML**.

You give it slide data.  
It gives you HTML.

That’s it.

---

## 🌐 Live Docs, Demo & Reference (START HERE)

👉 **https://bilza2023.github.io/taleem**

This site is the **official reference** for:

- all supported slide types
- visual behavior
- real rendered output
- examples and demos

If something is unclear in this README,  
**the website is the final authority**.

---

## ✅ What this library does

- Converts slide JSON into HTML
- Uses fixed, opinionated layouts
- Applies simple state-based CSS classes
- Works in any JS environment (browser, player, SSR)

---

## ❌ What this library does NOT do

`taleem-slides` does **not**:

- play slides
- manage time or animations
- navigate slides
- validate full decks
- touch the DOM
- apply CSS styles

It only returns HTML strings.

---

## 🧠 Mental Model

```

slide data + render state
↓
taleem-slides
↓
HTML

````

How slides are shown, timed, or styled is **your responsibility**.

---

## 📦 Installation

```bash
npm install taleem-slides
````

---

## 🚀 Basic Usage

### 1️⃣ Get a slide template

```js
import { getSlideTemplate } from "taleem-slides";

const Slide = getSlideTemplate("bulletList");
```

---

### 2️⃣ Load slide data

```js
const slide = Slide.fromJSON({
  type: "bulletList",
  data: [
    { name: "bullet", content: "First point" },
    { name: "bullet", content: "Second point" }
  ]
});
```

`fromJSON()` reads and stores structure only.

---

### 3️⃣ Render HTML

```js
const html = slide.render({
  visibleCount: 1,
  activeIndex: 0
});
```

---

## 🎨 Render State (Simple)

Render state is just a plain object.

Common fields:

```ts
{
  visibleCount?: number
  activeIndex?: number
}
```

Each slide uses only what it needs.

---

## 🎯 CSS Class Contract

Slides emit only these state classes:

```text
.is-active
.is-dim
.is-hidden
```

You control **all styling**.

---

## 🧩 Supported Slide Types

See the **live site** for visuals and examples:

👉 [https://bilza2023.github.io/taleem](https://bilza2023.github.io/taleem)

Supported categories include:

* titles and text slides
* bullet lists and columns
* images and image+text layouts
* tables and charts
* quotes and stats
* equation slides

Layouts are **fixed by design**.

If you need a new layout, you add a new template.

---

## 🧪 Stability & Guarantees

* Deterministic output
* No hidden state
* No configuration knobs
* Same input → same HTML

---

## 🔒 Design Principle

> **This library renders HTML only.
> It does not decide when or how slides appear.**

---

## 📍 Where this fits

`taleem-slides` is meant to be used by:

* slide viewers
* presentation players
* educational tools
* static or dynamic renderers

It is intentionally small so it can be reused everywhere.

---

## ✅ Status

* Actively used
* Fully tested
* Backed by live reference site
* Ready for production

