# AGENTS.md

## Purpose

This repository powers the corporate website for **Lepefy Labs** and the public website at `lepefy.com`.

Lepefy Labs is the master brand. The website must present:

- Lepefy Labs as a builder of intelligent digital products and tailored solutions for real-world needs.
- Lepefy Commerce as the flagship SaaS platform for modern food businesses.
- Future products from Lepefy Labs without coupling the corporate brand to a single vertical.
- Robertin Boukeng as Founder, with a digital business-card experience at `/robertin`.

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

Initial public routes:

- `/` — Corporate homepage
- `/solutions` — Tailored solutions / methodology
- `/commerce` — Lepefy Commerce
- `/about` — Lepefy Labs and founder
- `/contact` — Contact entry point
- `/robertin` — Founder digital business card
- `/robertin.vcf` — Downloadable vCard

Do not add speculative product routes until there is enough real content to support them.

## Delivery rules

- Treat current `main` as the source of truth.
- Before editing, inspect relevant existing files.
- Keep changes coherent and production-ready rather than leaving placeholder scaffolding.
- Do not modify payment/business logic in other Lepefy repositories from this repository.
- Validate TypeScript/build assumptions before claiming a deployment is ready.
