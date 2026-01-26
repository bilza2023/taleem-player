
# EQ Slide – Behavior Plan (v2)

This document defines the **behavioral plan** for the EQ slide.
No schema changes are introduced. The existing JSON structure remains unchanged.

EQ is treated as a **timed, progressive explanation slide**, not as a math container.

---

## 1. What Stays the Same

- `type: "eq"` remains unchanged
- Existing fields remain unchanged:
  - `start`, `end`
  - `data[]`
  - `line`, `math`, `spItems`
- No new JSON fields
- No new slide schema
- Math rendering is handled globally via `useMath`

---

## 2. Core Concept

EQ is a **progressive list of lines with inline explanations**.

- Lines are revealed over time
- Explanations (`spItems`) appear **directly under the line they explain**
- No side panel is used

EQ does not own math.
EQ manages **focus and progression**, not content.

---

## 3. Inline Explanation Rule

- Each item in `data[]` renders as a line
- If a line has `spItems`, they are rendered **under that line**
- `spItems` are visually indented and styled as explanations
- No duplication of content occurs

Example visual structure:

```

Equation line
↳ explanation text

```

---

## 4. Timing-Based Behavior (Primary Mode)

When EQ has timing (`start`, `end`, `showAt`):

- One line is considered **active** at a time
- When a line becomes active:
  - Its `spItems` expand below it
  - Previously active line’s `spItems` collapse
- Only one explanation is expanded at any moment

This creates a **step-by-step teaching flow**.

---

## 5. Rolling Window Rule

To maintain focus and readability:

- EQ maintains a rolling window of the **last N lines** (e.g. 3)
- When the active line index exceeds N:
  - Earlier lines are hidden
  - The most recent lines remain visible
- No content is deleted, only hidden

This keeps the equation progression visible without overwhelming the screen.

---

## 6. No-Timing Behavior (Expanded Mode)

If EQ has **no meaningful timing**:

- All lines render immediately
- All `spItems` render under their respective lines
- No line selection logic
- No collapsing
- Natural vertical flow
- User scrolls freely

In this mode, EQ behaves like a **worked solution / revision sheet**.

---

## 7. Overflow Rule

- EQ is the **only slide type allowed to overflow vertically**
- Content may extend beyond the viewport
- Scrolling is acceptable and expected
- Other slide types remain height-constrained

This aligns with how equations and derivations are naturally taught.

---

## 8. Heading Handling (Deferred)

- `"type": "heading"` inside EQ is **not special-cased for now**
- It is treated as a normal line
- Visual distinction may be added later if needed

---

## 9. Explicit Non-Goals

EQ will NOT:
- Introduce a new schema
- Duplicate content between areas
- Use side panels
- Act as a sub-slide system
- Own math rendering
- Work interactively without timing

---

## 10. Final Definition

> **EQ is a time-native, progressive explanation slide  
> that reveals equations step-by-step with inline explanations.**

With timing → guided teaching  
Without timing → full explanation view  

Same data. Different behavior.

---

Status: **Planned / Locked (No implementation yet)**
