
# Slide Behaviours

**How the player connects time to rendering**

---

## Overview

In the Taleem Player architecture, **slides do not own behaviour**.

Instead, the player computes a **render state** from time, and the renderer’s only responsibility is:

> **Render HTML based on the given render state.**

This separation is intentional and fundamental.

* The **player** understands time.
* The **renderer** does not know time.
* The **render state** is the bridge between them.

Slide behaviour defines **how time is translated into render state**.

---

## The Core Principle

> **Time controls visibility.
> Slides do not own behaviour.**

Renderers are **time-blind**.
They receive a render state (for example, counts or indices) and produce markup.

All behavioural meaning lives **inside the player**, not inside slides.

---

## What Is a Slide Behaviour?

A **slide behaviour** is a player-owned rule that answers the question:

> *“Given the current time, what should be visible and/or active?”*

Each slide type **selects exactly one behaviour at build time**.

Slides never provide executable logic.
Slides never react to time directly.

This avoids per-slide lifecycle hooks and prevents “wild west” behaviour.

---

## Behaviour as the Bridge

The player computes a **render state** from time using a behaviour.

The renderer:

* does not know time
* does not know animations
* does not know sequencing
* only knows how to render a given state

This keeps renderers:

* stateless
* predictable
* testable
* reusable

---

## Behaviour Set (v1 – Locked)

Only **three behaviours** are defined and documented for v1.

No others are assumed.

---

## 1. `reveal` (Default)

### Mental Model

> *New things come into existence over time.*

### Description

Items are revealed progressively based on time.
Once an item becomes visible, it stays visible.

Time controls **existence**, not selection.

### Characteristics

* Visibility grows over time
* Content accumulates
* The most recently revealed item is implicitly active

### Best Use Cases

* Bullet lists
* Step-by-step explanations
* Current EQ slide
* Narrative teaching

This is the **default behaviour** of the player and represents its natural bias.

---

## 2. `focus`

### Mental Model

> *Everything exists; attention moves.*

### Description

All items are visible from the start.
Time does not control existence — it controls **which item is focused**.

Visibility is static.
Focus changes over time.

### Characteristics

* No progressive reveal
* No items hidden
* Time changes emphasis only

### Best Use Cases

* Classic EQ / MathBoard
* Tables or comparisons
* Slides where full context must remain visible

This behaviour explains why Classic EQ cannot be expressed using `reveal`.

---

## 3. `replace`

### Mental Model

> *Only one idea exists at a time.*

### Description

At any moment, exactly one item is visible.
When time advances, the current item is replaced by the next.

There is no accumulation.

### Characteristics

* Single visible item
* Strong pacing
* Clear transitions

### Best Use Cases

* Definitions
* Flash-style teaching
* Emphasis slides
* Minimal, distraction-free explanations

---

## Explicitly Out of Scope (v1)

### `overlay`

Overlay-style behaviour is intentionally **not included**.

Reasons:

* Weak and overlapping use cases
* Risk of semantic duplication with existing slides
* Can be added later without breaking the model

Deferring this keeps the system minimal and clear.

---

## Implementation Status

⚠️ **Slide behaviours are a documented design concept only.**
They are **not implemented as of today**.

This document exists to:

* define intent
* align future work
* prevent accidental architectural drift

Implementation will follow this specification when required.

---

## Final Notes

This behaviour model replaces ad-hoc, per-slide logic with a **small, closed, player-owned set of rules**.

It preserves:

* predictability
* testability
* conceptual clarity

And most importantly:

> **Renderers render.
> The player decides behaviour.
> Time remains the single source of truth.**

---
