
# 📦 taleem-player

**taleem-player** is a **time-driven player** for **Taleem slides**.

It plays slide decks rendered by `taleem-slides`, using **time** instead of index.

It is designed for:

* narrated lessons
* timed presentations
* audio / video–synced slides
* external playback control

At its core, `taleem-player` does one thing:

> **Given a player-ready deck and a time value, render the correct Taleem slide.**

It does **not** author decks.
It does **not** fix data.
It does **not** manage time.

---

## 🌐 Live Docs, Demo & Reference (START HERE)

👉 **[https://bilza2023.github.io/taleem](https://bilza2023.github.io/taleem)**

This website is the **official reference** for the Taleem system.

It shows:

* all supported slide types
* real visual behavior
* actual rendered output
* examples and demos

If anything in this README feels unclear:

> **The website is the final authority.**

The README explains *rules*.
The website shows *results*.

---

## Core idea

Slides are not just ordered — they are placed on a **timeline**.

`taleem-player` treats a deck as time intervals:

```text
[start ─────────── end)
```

At any given moment:

* one slide may be active
* or no slide (before or after the timeline)

The player’s job is simple:

> **time → slide → render**

---

## What this library does

`taleem-player`:

* Accepts a **player-ready deck-v1**
* Assumes **valid timing**
* Owns a single DOM stage
* Resolves which slide is active at a given time
* Renders slides using **taleem-slides**
* Exposes a **minimal API**

Public API:

```js
player.renderAt(time)
player.destroy()
```

Time always comes from **outside**.

---

## What this library intentionally does NOT do

`taleem-player` does **not**:

* validate deck schemas
* auto-generate timings
* fix broken decks
* define slide layouts
* ship CSS
* manage audio or narration
* play / pause / autoplay
* own clocks or intervals

If a deck is wrong, the player may break.
This is intentional.

---

## Strict timing model (important)

> **NOTE: taleem-player assumes a *player-ready deck*.**

Every slide **must** define:

```json
{
  "start": number,
  "end": number
}
```

Rules:

* time unit is **seconds**
* fractional seconds are allowed (e.g. `3.1`, `3.75`)
* `end` must be greater than `start`
* timings must be monotonic
* no auto-injection
* no browser forgiveness

Deck preparation happens **before** the player
(e.g. via tooling like `assignMockTimings`).

---

## Rendering model

`taleem-player` renders **Taleem slides**.

Internally it:

1. Finds the active slide for the given time
2. Computes minimal render state
3. Uses `taleem-slides` to generate HTML
4. Injects HTML into a single stage

Rendering is **deterministic** and **stateless**.

---

## Relationship to other Taleem libraries

`taleem-player` is part of a small, focused system.

### **taleem-core**

Defines schemas and canonical (golden) decks.

### **taleem-slides**

Renders slide JSON into HTML + CSS.

### **taleem-browser**

Index-based slide viewer (no time).

### **Apps / demos**

Own time, UI, controls, audio, narration.

Each library does **one job**.
They are composed, not mixed.

---

## Typical usage

```js
import { createTaleemPlayer } from "taleem-player";

const player = createTaleemPlayer({
  mount: "#app",
  deck // must be player-ready
});

// external clock
player.renderAt(12.5);
```

`taleem-player` never controls time.
Time always belongs to the app.

---

## Design philosophy (locked)

* Time is external
* Slides are deterministic
* Seconds are enough
* Libraries stay small
* Control lives at the top

> **The player decides *what* to show.**
> **The app decides *when* and *why*.**

---

## Project status

**Release Candidate (API locked).**

Only bug fixes should follow.
No new concepts belong here.

---

## License

MIT
