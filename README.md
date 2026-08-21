# Discount Autobody Supply Inc

One-page marketing site for **Discount Autobody Supply Inc** — an automotive paint & refinish supply shop in Rock Island, IL.

- **Address:** 601 4th St, Rock Island, IL 61201
- **Phone:** (309) 732-0950
- **Rating:** 5.0 ★ (19 reviews)

## Stack

- [Astro](https://astro.build) static site
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) (static assets + `/api/contact` handler)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # build to dist/
npm run preview  # preview built site
```

## Deploy

```bash
npm run build
CLOUDFLARE_API_TOKEN=<token> npx wrangler deploy
```

## Design

Visual system is lifted from the actual storefront: black block wordmark, orange (`#E24A16`) + royal-blue (`#133A8E`) racing stripes on a white-wall background. Display type **Anton**, body **Archivo**.

## Content integrity

Only verified facts from the Google Business listing and directory cross-checks are used. Full weekday hours are not published on the listing (limited view) — the site shows verified Thursday hours and directs visitors to call.
