# Taleem Player

**Taleem Player** converts **Taleem JSON slide data** into **web-based presentations**.

It renders the **same Taleem JSON** in multiple display modes using a single, stable rendering engine.

> **Stable · deck-v1 frozen**  
> The slide language, schema, and registry are complete.  
> Internal improvements may continue without breaking public contracts.

---
Demo & Documentation
👉 https://bilza2023.github.io/taleem/

The live demo shows:

 - Browser Mode (index-based rendering)
 - Player Mode (time-based rendering)
 - Real production Taleem JSON
 - Shared CSS across all modes
 - No screenshots. No mock data.
 - What you see is the real engine running in the browser.
---

## What this project is

Taleem Player is a **presentation engine**, not a slide editor.

It takes **validated Taleem decks** and turns them into:
- index-based presentations
- time-based presentations

The system is **declarative**, **predictable**, and **CSS-driven**.

---

## Installation

```bash
npm install taleem-player
````

---

## Display Modes

### Browser Mode (index-based)

Use when you want **direct control over which slide is shown**.

```js
import { createTaleemBrowser } from "taleem-player";

const browser = createTaleemBrowser({
  mount: "#app",
  deck,
});

browser.render(0);
browser.getTotal();
```

**Best for**

* previews
* editors
* galleries
* syllabus pages

---

### Player Mode (time-based)

Use when slides should progress according to **external timing**.

```js
import { createTaleemPlayer } from "taleem-player";

const player = createTaleemPlayer({ mount: "#app" });
player.renderAt(12.5);
```

**Best for**

* narrated lessons
* recorded explanations
* audio / video synchronization

---

## Browser vs Player

| Feature    | Browser Mode | Player Mode |
| ---------- | ------------ | ----------- |
| Rendering  | Index-based  | Time-based  |
| Timing     | Optional     | Required    |
| Navigation | Manual       | Progressive |
| Control    | App-driven   | External    |
| Use case   | Preview      | Playback    |

> ⚠️ Player Mode assumes **valid timings**.
> The library does not guess, correct, or mutate deck data.

---

## Slide System

* The core system defines **16 canonical slide types**
* The slide registry is **stable and frozen**
* Slides express **visual state**, not interaction
* All motion and emphasis are **CSS-based**

If a deck validates against `deck-v1`, it is correct Taleem data.

---

## Utilities (runtime-safe)

The following helpers are exported for **application use**:

```js
import {
  assignMockTimings,
  resolveAssetPaths,
  resolveBackground,
  getDeckEndTime,
} from "taleem-player";
```

* `assignMockTimings(deck, seconds)`
* `resolveAssetPaths(deck, basePath)`
* `resolveBackground(deck, basePath)`
* `getDeckEndTime(deck)`

These functions **prepare** decks for runtime usage.
They never change slide meaning.

---

## CSS

```js
import "taleem-player/css";
import "taleem-player/css/dark";
import "taleem-player/css/light";
import "taleem-player/css/paper";
```

CSS is **explicitly imported** by the host application.

* No JS-driven interaction
* No runtime behavior logic
* Visual changes are handled via **CSS state**

---

## What Taleem Player does NOT do

Taleem Player does **not**:

* create slides
* edit JSON
* manage playback clocks
* handle audio or narration
* auto-fix invalid data
* provide interactive UI controls

Those responsibilities belong to **application-level projects** or **slide bundles**.

---

## Slide Extensions

The core slide language is **closed**.

Additional slides should be developed as:

* external slide bundles
* application-specific extensions

The core registry supports **additive registration only**.

---

## EQ slide

The `eq` slide type is implemented and tested.

It represents **structured symbolic content** and intentionally marks the **upper boundary** of the system.

Anything more complex than this belongs in a **separate product**, not in the core player.

---

## Status

**Stable · deck-v1 frozen**

The system is complete and production-safe.

Future work should focus on:

* content
* slide bundles
* authoring tools

---

## License

MIT
