# Lepefy Corporate

Corporate website for **Lepefy Labs**, intended to power `www.lepefy.com`.

## Positioning

Lepefy Labs creates intelligent digital products and tailored solutions built around real-world needs.

The corporate website presents:

- Lepefy Labs as the master brand.
- Tailored digital products, platforms and automation.
- **Lepefy Commerce** as the flagship SaaS platform for modern food businesses.
- The Lepefy Labs Founder profile, including a branded digital business card and downloadable vCard.

## Routes

- `/` — Corporate homepage
- `/solutions` — Tailored solutions and methodology
- `/commerce` — Lepefy Commerce
- `/about` — Company principles and founder
- `/contact` — Contact entry point
- `/founder` — Branded Founder digital business card
- `/founder.vcf` — Downloadable vCard with embedded Lepefy contact image

Legacy `/robertin` and `/robertin.vcf` routes redirect permanently to the branded Founder routes.

## Development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run typecheck
npm run build
```

CI runs typecheck and production build on every push to `main` and on pull requests.

## Stack

- Next.js App Router
- React
- TypeScript
- CSS
- Vercel deployment target

See `AGENTS.md` before making changes.
