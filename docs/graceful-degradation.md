# Graceful Degradation — deck‑v1

This document defines **which fields may be omitted safely** without breaking validation or rendering.

Graceful degradation means:

* the slide remains valid Taleem data
* the renderer shows what exists
* nothing is auto‑filled or inferred

No other omissions are allowed.

---

## 1. `titleAndSubtitle`

Normally contains:

* `title`
* `subtitle`

Allowed omissions:

* `subtitle` MAY be omitted

Rules:

* At least one `title` item MUST exist
* If `subtitle` is missing, the slide renders as a title‑only slide
* No placeholder subtitle is generated

Invalid cases:

* Missing `title`

---

## 2. `titleAndPara`

Normally contains:

* `title`
* `para`

Allowed omissions:

* `title` MAY be omitted

Rules:

* At least one `para` item MUST exist
* If `title` is missing, the paragraph renders as the primary content
* No implicit title is generated

Invalid cases:

* Missing `para`

---

## 3. Explicit Non‑Goals

Graceful degradation does NOT include:

* auto‑generated titles
* default subtitles
* inferred labels
* visual substitutions

The system shows **only what is authored**.

---

## 4. Stability Notice

These rules apply strictly to **deck‑v1 (Frozen)**.

Any additional degradation rules belong to a future deck version, not this one.
