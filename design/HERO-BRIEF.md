# Hero design brief — "The Shipping Ledger"

A comprehensive, reusable design prompt for boopathiraja.dev's hero.
Written to be executable by a designer or a model without further context.

---

## 1. Diagnosis — why the current hero reads as an AI template

Name the disease before prescribing. These five patterns, together, are the
signature of generated portfolio heroes. **All five are banned.**

1. **The 60/40 split** — headline left, decorative object right (terminal,
   blob, 3D card, illustration). The single most common generated layout.
2. **The status pill** — "🟢 Open to work" rounded badge above the headline.
3. **The CTA pair** — one filled button + one outline button, side by side.
4. **The stats strip** — 3 divided columns of number-over-label.
5. **Symmetric vertical rhythm** — badge → h1 → subhead → buttons → stats,
   every block left-aligned at the same edge, evenly spaced.

A hero stops looking generated when its structure is *derived from the
subject* instead of assembled from these parts.

## 2. Concept

**The subject builds systems of record** — POS, billing, invoices, ledgers.
So the hero *is* a system of record: a shipping manifest of real, live
software. Not an illustration OF the work — the work itself, as interface.

One typographic statement, then the ledger. Nothing decorative that isn't
also information.

Availability is not a badge — it is **the last open row of the ledger**
("Your project — open slot — accepting work → contact"). The pitch and the
proof are the same object.

## 3. Anti-template rules (hard constraints)

- No second column. The hero is a single-column document.
- No buttons in the hero. The ledger rows are the calls to action.
- No stat tiles. The ledger IS the numbers.
- No decorative object that contains fake data. Every glyph is real data
  or real typography.
- Asymmetry on purpose: the subhead sits on the RIGHT margin on desktop,
  like a note in a ledger's margin — the one alignment break in the page.

## 4. Layout spec (desktop ≥1024px)

Order, top to bottom, inside the standard `max-w-6xl` container:

1. **Document header** (marginalia): one hairline-ruled row, mono 11px,
   uppercase, tracking +0.18em, justified between:
   left `BOOPATHI RAJA — FULL-STACK & AI ENGINEER`,
   right `INDIA · IST (UTC+05:30)`.
2. **The statement**: display face (Space Grotesk 700), size
   `clamp(3rem, 8.5vw, 7rem)`, leading 0.98, two lines:
   `I build software` / `that ships.` — "ships." in the accent.
   Immediately after "ships.", inline: **the stamp** (see §6), rotated
   −2°, reading `IN PRODUCTION ×N` where N is computed from real data.
3. **Margin note** (subhead): Inter, 17px, max-width 34ch, aligned to the
   right edge of the container, text-right. One sentence. On mobile it
   returns to the left margin.
4. **The ledger** (the centrepiece): full-width table of the production
   systems, one row each, plus one final "open slot" row.
   - Header row: mono 11px uppercase tertiary: `№ / SYSTEM / BUILT FOR /
     STATUS`, hairline rule above and below.
   - Data row anatomy: index (tabular numerals, 2 digits) · system name
     (display face, 18–20px, semibold) · **dotted leader** filling the
     void (receipt idiom) · client descriptor (mono 12px, hidden <md) ·
     status (mono 12px, `●` dot in status colour + word) · arrow glyph.
   - Whole row is one link to the case study. Hover: background lifts one
     step, arrow slides 4px right, name goes accent. Rows separated by
     hairlines — ruled paper.
   - **Final row** = availability: index continues the sequence, name
     `Your project`, descriptor `open slot`, status `accepting work` in
     accent, links to `#contact`. Same anatomy, different meaning.
   - Ledger footer, right-aligned: quiet text link `browse all N projects →`.

## 5. Colour & texture

- Palette unchanged: the site's neutral ramp + single amber accent +
  three status colours. The hero introduces NO new colours.
- Background: near-flat. A faint radial amber wash (≤6% alpha) top-centre
  only. **No grid texture** — the ruled ledger lines are the texture.
- Status colours never appear without their word (WCAG 1.4.1).

## 6. The stamp (signature detail)

A rubber-stamp mark, ledger-native, template-alien:
2px border in `--status-production` at 80% alpha, same colour text,
mono 11–12px, uppercase, tracking +0.14em, padding 4px 10px, radius 4px,
rotate(−2deg), translate up so it sits mid-cap-height beside "ships.".
Content is computed: `IN PRODUCTION ×{count}`. If the count is ever 0,
the stamp is omitted — it must never lie.

## 7. Motion

- Blocks rise in sequence (60ms stagger): header → statement → note →
  ledger header → rows (40ms per row) → footer link.
- The stamp enters last: scale 1.15→1 with its rotation settling from
  −6° to −2° — a stamp being pressed. 250ms, ease-out.
- Row hover transitions ≤200ms, transform/colour only.
- `prefers-reduced-motion`: everything renders in place, stamp included.

## 8. Responsive

- <1024px: margin note returns to left, max-width 60ch.
- <768px: ledger rows wrap to two lines — line 1: index + name + arrow;
  line 2: descriptor + status, indented to align with the name. Leaders
  disappear (leaders need width to mean anything).
- Statement floor: 3rem. Never let "that ships." wrap mid-phrase.

## 9. Accessibility

- The ledger is semantically a list of links, not a `<table>` — order and
  target matter, cell relationships don't.
- Row link text = full sentence for screen readers via aria-label:
  "Steel Flow — billing for a steel trading business — in production".
- Stamp is `aria-hidden` (its fact is restated by the ledger).
- All interactive rows ≥44px tall; focus ring on the whole row.

## 10. Don'ts

Don't add: photos, avatars, globes, keyboards, code snippets, terminals,
gradient meshes, floating shapes, tilt-on-hover 3D, typing animations,
particle fields, or a second accent colour. Every one of these moves the
design back toward the template this brief exists to escape.
