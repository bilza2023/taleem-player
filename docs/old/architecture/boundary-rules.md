# Boundary Rules (Non-Negotiable)

This document defines the **hard boundaries** of the Taleem system.

These rules exist because violating them previously caused:
- architectural collapse
- endless refactors
- fragile APIs
- time leakage everywhere

These rules are not guidelines.  
They are **constraints**.

---

## 1. Only `taleem-player` Knows About Time

Time is **not content**.

- Schema does NOT know time
- Slides do NOT know time
- Browser does NOT know time
- UI does NOT know time

Only the **time-based engine** (`taleem-player`) is allowed to reason in seconds.

Time is a **control signal**, not data.

If time appears anywhere else, the system is broken.

---

## 2. Only `taleem-slides` Understands JSON

JSON is a **source format**, not a runtime format.

- Engines do NOT read JSON
- UI does NOT read JSON
- Controls do NOT read JSON

JSON is consumed once by `taleem-slides` and converted to HTML.

Above that point, JSON must not exist.

---

## 3. JSON → HTML Happens Exactly Once

The conversion from structured data to visuals happens in **one place only**:

