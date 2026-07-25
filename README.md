# Khaata — Personal Expense Ledger (₹)

A premium, dark-navy expense tracker for Indian Rupees, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Signature feature: expandable category showcase

The "Spending, by category" panel is inspired by [Skiper UI's Projects Showcase (skiper80)](https://skiper-ui.com/v1/skiper80) pattern — hover a category row for a floating live preview, click to expand it into a full-screen detail view with a shared-element (`layoutId`) transition, showing the category's totals, share of spend, and transaction history. It's a from-scratch Framer Motion recreation of that interaction (gallery → overlay), since `skiper80` itself ships only through Skiper UI's Pro CLI.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with a custom dark-navy / gilt-gold token system
- Framer Motion for the shared-element transitions
- Recharts for the spend-distribution donut
- Data is stored in `localStorage` — no backend, no database, nothing leaves the browser

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Khaata expense tracker"
git branch -M main
git remote add origin https://github.com/<your-username>/khaata.git
git push -u origin main
```

### 2. Deploy to Vercel

- Go to https://vercel.com/new, import the GitHub repo, and click Deploy — no environment variables are required.
- Or, with the Vercel CLI: `npx vercel`

## Customizing

- **Categories & colors** — `lib/categories.ts`
- **Currency formatting** — `lib/format.ts` (uses `Intl.NumberFormat` with `en-IN` / `INR`)
- **Seed data** — `lib/storage.ts` (`seedExpenses`, only used the first time the app runs on a device)
- **Theme tokens** — `tailwind.config.ts` (`ink`, `gilt`, `iris`, `mint`, `coral` palettes)
