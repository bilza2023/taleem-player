
# 📦 taleem-player

**taleem-player** is a **headless, time-driven playback engine** for Taleem slide decks.

It is designed for:

* timed presentations
* narrated lessons
* audio / video–synced slides
* external playback control

At its core, `taleem-player` does one thing well:

> **Given a valid deck and a clock, decide which slide should be active and when.**

It does **not** render slides.
It does **not** define layouts.
It does **not** ship CSS.

Those responsibilities belong elsewhere.

---

## Core idea

A slide deck can be interpreted in **time**, not just order.

`taleem-player` treats a deck as a **timeline**, where each slide occupies a
known interval:

```text
[start ─────────── end)
```

At any given moment:

* exactly one slide may be active
* or no slide (before / after the timeline)

The player’s job is to **resolve time → slide** and notify a renderer.

---

## What this library does

`taleem-player`:

* Accepts a **deck-v1 JSON object**
* Enforces **strict timing validity**
* Owns a single DOM stage
* Resolves the active slide for a given time
* Calls an injected **renderer**
* Supports **scrubbing, autoplay, pause, stop**
* Is completely **renderer-agnostic**

The public API is intentionally small:

```js
player.renderAt(time)
player.destroy()
```

Higher-level controls (play, pause, keyboard, UI) are built **on top**, not inside.

---

## What this library intentionally does NOT do

This is not accidental — it is a design boundary.

`taleem-player` does **not**:

* define slide layouts
* ship or inject CSS
* depend on `taleem-slides`
* interpret slide content
* infer or auto-fix timings
* manage audio or narration
* expose internal state
* depend on any framework

If a deck is invalid, the player **throws**.
If rendering looks wrong, the renderer is responsible.

---

## Strict timing model (important)

`taleem-player` only accepts **player-ready decks**.

Every slide **must** define:

```json
{
  "start": number,
  "end": number
}
```

Rules:

* `start` and `end` are **absolute seconds**
* `end` must be greater than `start`
* No implicit inheritance
* No auto-injection
* No browser-style forgiveness

This strictness is intentional and non-negotiable.

---

## Renderer contract

`taleem-player` does not know how slides look.

Instead, it calls a renderer with this contract:

```js
renderer.render({
  mount,   // HTMLElement
  slide,   // full slide JSON
  time     // absolute time (seconds)
})
```

That’s it.

How the slide is rendered — HTML, SVG, Canvas, WebGL — is **not the player’s concern**.

---

## Relationship to other Taleem libraries

`taleem-player` is part of a **layered system**.

### Lower-level

**taleem-slides**
Pure slide renderer.
Converts slide JSON into HTML + CSS.

### Higher-level

**Taleem demo app**
Wires together:

* `taleem-player`
* `taleem-slides`
* playback controls
* UI

### Sibling

**taleem-browser**
Index-based slide viewer (no time).

Each library has **one responsibility**.
They are composed — never merged.

---

## Why this library exists

`taleem-browser` treats slides as a **document**.
`taleem-player` treats slides as a **timeline**.

Both are valid interpretations.

By separating them:

* timed playback does not pollute browsing logic
* rendering does not pollute playback logic
* decks remain portable JSON documents

This separation allows:

* narration sync
* recorded lessons
* adaptive playback
* multiple renderers

without rewriting the core.

---

## Typical usage (composition layer)

```js
import { createTaleemPlayer } from "taleem-player";
import { createSlidesRenderer } from "taleem-slides";
import "taleem-slides/dist/taleem.css";

const renderer = createSlidesRenderer();

const player = createTaleemPlayer({
  mount: "#app",
  deck,
  renderer
});

// external clock
player.renderAt(12.5);
```

The **player** never imports slides.
The **slides** never import the player.
The **app** composes them.

---

## Design philosophy (locked)

* Time is external
* Rendering is replaceable
* Strictness beats convenience
* Libraries stay small
* Composition happens at the edge

> **A player decides *when*.
> A renderer decides *how*.
> An app decides *why*.**

---

## Project status

**Core complete and stable.**

Future work belongs in:

* demo applications
* playback UI layers
* renderers
* authoring tools

The player itself should change rarely.

---

## License

MIT
