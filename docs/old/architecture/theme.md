Here you go — **clean, minimal, contract-style `theme.md`**.
You can drop this directly next to `background.md`.

---

# Themes in Taleem Slides

## Overview

In the Taleem slide system, a **theme** is a **page-level visual configuration** provided by the host application (web page, app, or embedding environment).

Themes define the **ambient look and feel** of slides and UI elements and are **independent of slide content and deck structure**.

---

## What Is a Theme?

A **theme** is:

* page-level
* user-controlled
* changeable at runtime
* token-based
* unaware of decks and slides

A theme answers:

> “How should this page look by default?”

It does **not** describe content intent.

---

## Theme Ownership

Themes are **not owned** by:

* the deck
* `deck-v1`
* taleem-core
* taleem-slides

Themes are owned by the **host environment**, such as:

* a website
* a learning app
* an editor
* an embedded iframe

The host injects theme values, typically via **CSS variables**.

---

## Theme Tokens (Contract)

Themes in Taleem are intentionally minimal.

The currently supported tokens are:

* **`primaryColor`**
  Main text, headings, math, emphasis

* **`secondaryColor`**
  Muted text, captions, subtitles, hints

* **`surfaceColor`**
  Page and slide background when no deck background exists

* **`surfaceAltColor`**
  Labels, chips, tables, cards, subtle containers

These tokens are **semantic**, not stylistic.
Components map meaning → token, never the other way around.

---

## How Themes Are Used

* `taleem.css` consumes theme tokens
* Slide components map semantic roles to tokens
* Themes affect slides **only when no deck background is present**

Themes never modify:

* slide structure
* layout
* timing
* animation
* content meaning

---

## Theme vs Background

Themes and backgrounds operate at different layers:

* **Theme**

  * page-level
  * user-controlled
  * ambient
  * optional

* **Background**

  * deck-level
  * author-controlled
  * static
  * authoritative over the backdrop

If a deck defines a background, it **overrides the theme’s surface color only**.
All other theme tokens remain active.

(See `background.md` for full details.)

---

## What Themes Must NOT Do

Themes must not:

* assume slide types
* inspect deck data
* override deck backgrounds
* inject animations
* affect timing
* alter layout or spacing
* encode content semantics

A theme that does any of the above is **invalid by design**.

---

## Design Philosophy

Themes in Taleem follow one rule:

> **Fewer tokens, clearer responsibility.**

By keeping themes:

* small
* semantic
* external

…the slide system remains:

* portable
* predictable
* future-proof

---

## Summary

* Themes are page-level and host-owned
* Themes are token-based
* Themes are optional and user-controlled
* Decks never know about themes
* Backgrounds override theme surfaces only

This separation keeps Taleem slides adaptable without losing authorial control.
