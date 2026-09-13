# Zemen Rate

Live URL: [https://zemenrate.vercel.app](https://zemenrate.vercel.app/)

A lightweight, high-speed multi-currency exchange rate calculator and conversion utility built with Next.js App Router and Server Actions.

---

## Tech Stack
* **Framework**: Next.js App Router (`useActionState`, Server Actions)
* **Styling**: Tailwind CSS (`stone` neutral palette)
* **Language**: TypeScript
* **Data Source**: ExchangeRate-API (`v6/pair/`)

## Key Features
* **Zero-Latency Dropdowns**: Full ISO currency catalog (160+ currencies) bundled cleanly for instant interaction.
* **Server-Driven Mutations**: Safe, progressive enhancement via React 19 `useActionState` and Server Actions.
* **Humanized UI**: Focused, quiet-luxury financial utility layout with live rate context (`1 BASE = X TARGET`).

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev