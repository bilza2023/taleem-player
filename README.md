
# Taleem Player


<img src="https://raw.githubusercontent.com/bilza2023/taleem-player/main/docs/images/taleem.webp" alt="Taleem Player — JSON to Web Presentations" />

**Taleem Player** is a JavaScript library that converts **JSON slide data** into **web-based presentations**.

It provides multiple **modes** to display the same JSON presentation in different ways on the web.

---
###### Work in progress. Expect minor bugs, but no API breakages.

Demo and Documentation

See Taleem Player in action:

👉 https://bilza2023.github.io/taleem/

This live demo lets you explore:

Browser Mode — instant, index-based slide rendering

Player Mode — time-driven, progressive presentations

Real Taleem slide JSON used in production

Shared CSS system powering all display modes

No screenshots. No mock data.
What you see is the real engine running in the browser.
---

## What it does

* Takes **Taleem slide JSON**
* Renders it as a **web presentation**
* Supports **multiple display modes**
* Ships **ready-to-use CSS**
* Includes **utilities** for real-world usage

---

## Installation

```bash
npm install taleem-player
```

---

## Display Modes

### 1. Browser Mode

**Index-based slide viewer**.

Use this when you want:

* manual navigation
* previews
* galleries
* syllabus / editor views

#### API

```js
import { createTaleemBrowser } from "taleem-player";

const browser = createTaleemBrowser({
  mount: "#app",
  deck
});

browser.render(0);      // render slide by index
browser.getTotal();    // total number of slides
```

Characteristics:

* slide index driven
* no timing
* deterministic rendering
* same slide JSON as other modes

---

### 2. Player Mode

**Time-based slide player**.

Use this when you want:

* narrated lessons
* video / audio sync
* timed presentations

#### API

```js
import { createTaleemPlayer } from "taleem-player";

const player = createTaleemPlayer({
  mount: "#app",
  deckDemo and Documentation

Live demo and documentation are available here:

👉 https://bilza2023.github.io/taleem/

The demo showcases:

browser mode rendering

player mode rendering

real Taleem slide JSON

shared CSS across modes
});

player.renderAt(12.5); // render slide at time (seconds)
player.destroy();
```

Characteristics:

* time driven
* external clock control
* no play / pause logic
* one active slide at a time

---
## Browser Mode vs Player Mode

Both modes render the same JSON presentation, but they serve very different purposes.

| Feature | Browser Mode | Player Mode |
|-------|-------------|-------------|
| Rendering model | Index-based | Time-based |
| Navigation | Manual (by slide index) | Progressive (by time) |
| Timing required | No | Yes (required) |
| Rendering behavior | One slide at a time | Slides change over time |
| Control source | Application-driven | External clock / media |
| Best suited for | Previews, galleries, editors | Narration, video, audio sync |

---

### Browser Mode

Use Browser Mode when you want direct access to slides.

**Characteristics**
- Index-based rendering  
- No timing data required  
- Deterministic output  

**Ideal for**
- previews  
- galleries  
- editors  
- syllabus pages  


⚠️ Important:
In Player Mode, the user must provide valid and ordered timings (start, end).
The library does not auto-fix or guess timings.

---

## Utilities

Taleem Player includes small helper utilities for preparing decks.

### assignMockTimings

Convert a non-timed deck into a player-ready deck.

```js
import { assignMockTimings } from "taleem-player";

const timedDeck = assignMockTimings(deck, 5);
```

---

### resolveAssetPaths

Resolve image paths for deployment.

```js
import { resolveAssetPaths } from "taleem-player";

resolveAssetPaths(deck, "/images/");
```

---

### resolveBackground

Normalize and resolve background configuration.

```js
import { resolveBackground } from "taleem-player";

resolveBackground(deck, "/images/");
```

---

## CSS

Taleem Player ships with built-in styles.

### Base styles

```js
import "taleem-player/css";
```

### Themes

```js
import "taleem-player/css/dark";
import "taleem-player/css/light";
import "taleem-player/css/paper";
```

CSS controls layout, visibility, and visual behavior.
Modes share the same CSS.

---

## Input format

Taleem Player does **not** define slide structure.

It renders JSON produced for **taleem-slides**.

* Player Mode requires slides with `start` / `end`
* Browser Mode only needs ordered slides

---

## What Taleem Player does NOT do

* create slides
* edit JSON
* validate schemas
* manage time or playback
* handle audio or narration
* provide UI controls

Those belong to the **application**, not the library.

---

## Status

**Release Candidate (API stable)**

---

## License

MIT
