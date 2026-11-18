# OjaLive - Live Now page

A "Live Now" home page for OjaLive, a live shopping marketplace for Nigerian buyers. Vendors go live to show products, buyers ask questions, and the payment is held until the buyer confirms delivery.

Built with Next.js (App Router), TypeScript, Tailwind CSS and shadcn/ui.

Live demo: https://ojalive-live.vercel.app

## How to run

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To check the production build:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        font and page metadata
  page.tsx          the home page, holds the search and category state
  globals.css       Tailwind import and brand colours
components/
  Header.tsx        logo, search bar, sign in button
  SearchBar.tsx
  Logo.tsx
  Hero.tsx          hero text with a background image carousel
  CategoryFilter.tsx
  SessionGrid.tsx   grid + empty state
  SessionCard.tsx
  ui/               shadcn/ui components (button, input, badge, card)
  HowItWorks.tsx
  StepCard.tsx      one step in How it works (number, title, text)
  Footer.tsx
data/
  sessions.ts       mock live sessions and categories
  heroSlides.ts     background photos for the hero
lib/
  format.ts         naira and viewer count formatting
  utils.ts          cn() helper used by shadcn/ui
```

## Main decisions

- **Mobile first.** I started from the phone layout and added columns at bigger sizes (1 column, then 2, 3 and 4). On mobile the search bar moves to its own row under the logo and the category chips scroll sideways instead of wrapping into many lines.
- **State lives in the page.** The search text and selected category are kept in `page.tsx` and passed down as props. The components themselves don't know about the data source so they are easy to reuse.
- **Search** matches the product title, vendor name and category, and works together with the category filter. If nothing matches there is an empty state with a "Clear filters" button.
- **shadcn/ui for the basic pieces.** Button, Input, Badge and Card come from shadcn/ui, which is built on Tailwind, so everything is still styled with Tailwind classes. I changed the primary colour to the OjaLive green. Icons are from lucide-react.
- **Thumbnails.** Since there is no real video, each card shows a product photo from Unsplash, loaded with `next/image` so it is resized and lazy loaded.
- **Hero carousel.** The hero background fades between Nigerian market photos every 5 seconds. It pauses when you hover or tab into it, has dots and previous/next buttons, and does not auto play if the user has "reduce motion" turned on.
- **Accessibility.** Semantic `header`, `main`, `section`, `footer` and `nav`, one `h1`, a labelled search input, filter buttons with `aria-pressed`, a live region for the result count, visible focus styles, a screen reader label for the verified tick, and the How it works steps are an ordered list. The whole card is clickable but there is still only one link per card.
- **Naira formatting** uses `Intl.NumberFormat` with the `en-NG` locale.

## What I would improve with more time

- Loading skeletons while images load, and vendor uploaded thumbnails instead of stock photos
- Put the search and category in the URL so a filtered page can be shared
- Debounce the search and add sorting (most viewers, lowest price)
- A real session page with the video player, chat and the payment hold flow
