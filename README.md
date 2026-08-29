# Lepefy Corporate

Corporate website for **Lepefy Labs**, intended to power `www.lepefy.com`.

## Positioning

Lepefy Labs creates intelligent digital products and tailored solutions built around real-world needs.

The corporate website presents:

- Lepefy Labs as the master brand.
- Tailored digital products, platforms and automation.
- **Lepefy Commerce** as the flagship SaaS platform for modern food businesses.
- A brand-only public identity, without founder or personal-profile positioning.

## Languages

- French is the default language.
- Localized routes use `/fr`, `/en`, `/it`.
- `/` redirects to `/fr`.

## Main routes

- `/{locale}` — Corporate homepage
- `/{locale}/solutions` — Tailored solutions and methodology
- `/{locale}/commerce` — Lepefy Commerce
- `/{locale}/about` — Company principles
- `/{locale}/contact` — Corporate contact
- `/{locale}/card` — Lepefy Labs digital contact card
- `/card.vcf` — Downloadable Lepefy Labs vCard with embedded brand image

Legacy founder/personal routes are retained only as redirects to the brand contact card for backward compatibility.

## Corporate contact

- `ciao@lepefy.it`
- `https://www.lepefy.com`

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
