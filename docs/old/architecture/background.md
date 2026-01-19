
# Backgrounds in Taleem Slides

## Overview

In the Taleem slide system, **backgrounds are treated as a first-class but optional concept**.
They exist to protect *visual intent* — not to decorate slides.

This document explains **what a background is**, **why it exists**, and **how it interacts with themes**.

---

## Core Principle

> **A deck should work perfectly without a background.**

Backgrounds are **not required** for correctness, rendering, or timing.
They are introduced **only when a deck’s content demands visual control** that should not be affected by themes.

---

## What Is a Background?

A **background** is a **static visual layer behind all slides in a deck**.

It consists of:

```js
background: {
  backgroundColor?: string,
  backgroundImage?: string,
  backgroundImageOpacity?: number
}
```

That’s all.

A background:

* has **no timing**
* has **no animation**
* has **no state**
* applies to the **entire deck**
* never changes during playback

---

## Why Backgrounds Exist

Most decks are **text-first** and should adapt naturally to different themes
(light, dark, classroom, night mode, etc.).

However, some decks are:

* image-heavy
* diagram-based
* visually composed
* dependent on contrast or mood

For these decks, allowing themes to freely change the backdrop would **break visual intent**.

👉 Backgrounds exist to **lock the visual context** when required.

---

## Background vs Theme (Critical Distinction)

### Theme

A **theme** is:

* page-level
* user-controlled
* changeable at runtime
* based on a small set of semantic tokens

Themes define the **ambient UI look** of the page hosting the slides.

### Background

A **background** is:

* deck-level
* author-controlled
* static
* optional
* authoritative over the backdrop

Themes and backgrounds do **not compete** — they operate at different layers.

---

## Priority Rules

The system follows a strict priority order:

1. **Deck background (if present)**
   → Always wins for the backdrop

2. **Theme surface tokens**
   → Used only when no deck background exists

3. **Browser defaults**

This ensures:

* themes remain powerful
* decks can protect their visuals when needed

---

## Theme Tokens (Context)

Themes in Taleem are intentionally minimal and token-based.

The currently supported tokens are:

* `primaryColor`
* `secondaryColor`
* `surfaceColor`
* `surfaceAltColor`

Backgrounds **do not replace these tokens**.
They only override the **surface behind the slide content**.

Text, math, UI accents, and emphasis **continue to use theme tokens** even when a background is present.

---

## Scope Rules (Strict)

* Backgrounds apply to the **entire deck**
* There is **no per-slide background**
* There is **no background animation**
* There is **no background timing**

Any future extension (per-slide backgrounds, transitions, effects) belongs to **deck-v2**, not v1.

---

## Rendering Responsibility

* The **deck** declares the background
* The **player** renders it
* The **theme** fills the gap when no background exists

Each layer stays simple and predictable.

---

## Design Philosophy

Backgrounds in Taleem follow one guiding rule:

> **Restraint beats flexibility.**

By keeping backgrounds:

* static
* declarative
* minimal

…the system stays:

* easy to reason about
* visually consistent
* future-proof

---

## Summary

* Backgrounds are optional
* Backgrounds protect visual intent
* Backgrounds override theme surfaces only
* Themes remain page-level and user-controlled
* The system stays clean by design


