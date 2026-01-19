# System Overview
Purpose

Taleem is an educational presentation system built around one simple idea:
content is data, not a canvas.

Lessons in Taleem are written as structured data and rendered by a small set of deterministic engines. This allows the same lesson to be displayed, navigated, and played back in different ways without changing the content itself.

This document explains how the system is structured, what each part is responsible for, and which boundaries must never be crossed for the system to remain stable.
---

## The Four Layers

Taleem is composed of four independent layers. Each layer has a single responsibility.

```
FORMAT  →  RENDERER  →  ENGINE  →  UI
```

### 1. Format (Schema v1)

* The format defines *what a presentation is*.
* Slides are described as structured JSON.
* The schema is **pure data**.

The format:

* contains no rendering logic
* contains no timing logic
* contains no UI concepts

The schema exists so content can be **validated, generated, reviewed, and versioned**.

---

### 2. Renderer (`taleem-slides`)

* The renderer converts **schema → HTML**.
* It owns all slide templates and visual states.
* It is **stateless**.

The renderer:

* does not know about time
* does not know about slide order
* does not place anything into the DOM

Its only job is to translate *data* into *HTML*.

---

### 3. Engine

Engines decide **when** and **where** rendered HTML appears.

There are two engines:

* **Index-based engine**: `taleem-browser`
* **Time-based engine**: `taleem-player`

Engines:

* never inspect slide internals
* never parse JSON
* never modify templates

They treat rendered slides as opaque units.

---

### 4. UI / Controls

The UI layer:

* provides input (keys, buttons, sliders)
* controls the engine
* never touches slides or schema

UI is replaceable without affecting the system.

---

## Where Time Lives

Time exists **only** in the time-based engine (`taleem-player`).

Time is:

* not part of the schema
* not part of the renderer
* not part of the browser engine

Time is a **control signal**, not content.

---

## Direction of Flow

Data always flows **downward**:

```
Schema → Renderer → Engine → DOM
```

Nothing flows upward.

If information starts leaking upward (e.g. engines inspecting slide data), the system becomes fragile.

---

## Why This Works

This architecture works because:

* each layer is simple
* responsibilities do not overlap
* changes are absorbed at the correct layer

Most presentation systems collapse because everything knows everything. Taleem survives because **nothing does**.

---

## Stability Rule

If a change cannot be placed cleanly into one of these four layers, it does not belong in the system.

Stop and rethink.

---

**This document is foundational.**

All future features, engines, and tools must preserve this structure.
