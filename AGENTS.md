# AGENTS.md

## Purpose

This repository powers the corporate website for **Lepefy Labs** and the public website at `lepefy.com`.

Lepefy Labs is the master brand. The website must present:

- Lepefy Labs as a builder of intelligent digital products and tailored solutions for real-world needs.
- Lepefy Commerce as the flagship SaaS platform for modern food businesses.
- Future products from Lepefy Labs without coupling the corporate brand to a single vertical.
- A brand-only public identity. Do not expose founder names, personal biographies or personal-profile positioning on the corporate website.

## Product principles

1. Problem first, technology second.
2. Prefer concrete outcomes over generic claims about innovation or AI.
3. Keep Lepefy Labs broader than Lepefy Commerce.
4. Present Lepefy Commerce as one connected platform, not a loose collection of features.
5. AI and automation are capabilities, not the entire company identity.
6. Mobile experience is first-class.
7. Accessibility, performance and semantic HTML are required.
8. Do not invent clients, metrics, testimonials, awards, certifications, team members or product capabilities.
9. Chloe Food may be used only as a real-world ecosystem example when the claim is supported by current Lepefy project context.
10. Avoid fake screenshots or fabricated product UI. Prefer abstract product diagrams until real assets are available.

## Languages and routing

- Public website languages: **French, English, Italian**.
- French is the default language.
- Canonical localized prefixes are `/fr`, `/en`, `/it`.
- `/` redirects permanently to `/fr`.
- Unprefixed legacy public routes redirect to their `/fr/...` equivalent.
- Language switching should preserve the current page whenever that localized route exists.
- Keep each localized page internally consistent. Do not mix French, English and Italian body copy on the same page except product names, trademarks or intentionally untranslated brand terms.
- Provide hreflang alternates for FR/EN/IT and `x-default` pointing to French.

## Public identity and contact

- Public corporate email: `ciao@lepefy.it`.
- Public contact identity: **Lepefy Labs**.
- `/{locale}/card` is the neutral Lepefy Labs digital contact card.
- `/card.vcf` is the language-neutral downloadable Lepefy Labs vCard with embedded brand image.
- The digital card and vCard must not expose personal names, founder titles or personal email addresses.
- Legacy `/founder`, `/founder.vcf`, `/robertin` and `/robertin.vcf` may exist only as backward-compatible redirects to the neutral Lepefy Labs contact card or vCard. They must not expose personal content.

## Technical direction

- Next.js App Router
- TypeScript
- Prefer Server Components unless interactivity requires a Client Component.
- Keep dependencies minimal.
- Use CSS modules/global CSS rather than adding a UI framework without a clear need.
- Deploy target: Vercel.
- Default branch: `main`.

## Brand direction

- Master brand: **Lepefy Labs**.
- Primary dark: deep navy.
- Primary accent: Lepefy purple (`#6D5AF6` family).
- Visual character: premium, technological, restrained, human.
- Generous spacing, strong typography and clear information hierarchy.
- Avoid generic SaaS stock imagery and gratuitous gradients.

## Information architecture

Localized public routes live below `/{locale}`:

- `/{locale}` — Corporate homepage
- `/{locale}/solutions` — Tailored solutions / methodology
- `/{locale}/commerce` — Lepefy Commerce
- `/{locale}/about` — Lepefy Labs and company principles
- `/{locale}/contact` — Corporate contact
- `/{locale}/card` — Lepefy Labs digital contact card
- `/card.vcf` — Language-neutral downloadable Lepefy Labs vCard

Do not add speculative product routes until there is enough real content to support them.

## Delivery rules

- Treat current `main` as the source of truth.
- Before editing, inspect relevant existing files.
- Keep changes coherent and production-ready rather than leaving placeholder scaffolding.
- Do not modify payment/business logic in other Lepefy repositories from this repository.
- Validate TypeScript/build assumptions before claiming a deployment is ready.
- Prefer one atomic final update to `main` for coordinated release work so the Vercel project receives one final deployment rather than a stream of intermediate deployments.
