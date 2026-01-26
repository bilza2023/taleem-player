

26-Jan-2026
==========
KaTeX support added as a core, opt-in capability

Math rendering has been integrated into Taleem via a dedicated utility useMath.

KaTeX is fully opt-in
If useMath is not used, no KaTeX JS, no KaTeX CSS, and no math footprint is present on the page.
Math is not bundled into the core player.

Deck format remains unchanged
Existing content structure stays intact.
Math is enabled purely through standard inline notation using $…$, for example:
"content": "Mean: $\\bar{x} = \\frac{\\sum x}{n}$"

Math works in all slide types
No special “math slides” are required.
Any slide that renders text can now render math.

Renderer-level integration
Math is handled by the renderer/browser layer, keeping decks semantic and future-proof.

Status: Experimental, but stable in practice
Tested successfully with browser navigation and multiple slide types.    