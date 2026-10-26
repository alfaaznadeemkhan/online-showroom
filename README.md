# Online Showroom

A premium, responsive frontend prototype for **Online Showroom** — a future multi-category product discovery and showroom platform.

## Important: preview only

This project is **not a live marketplace**. Product data, sample prices, and showroom profiles are illustrative. No checkout, payments, order placement, real seller onboarding, contact submission, or launch-email storage is connected. Signup/contact forms explicitly tell users that the demo does not save or send their information.

## Tech stack

- React + Vite + TypeScript
- Tailwind CSS (base utilities available; bespoke design system in `src/styles.css`)
- React Router
- Framer Motion dependency included for future transitions
- Lucide React icons
- Local typed demo catalogue
- Browser localStorage for non-sensitive wishlist product IDs only

## Run locally

Requires Node.js 20 or a current supported LTS release.

```bash
npm install
cp .env.example .env
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

The generated production site is in `dist/`.

## Environment

`.env.example` includes:
- `VITE_PRIMARY_DOMAIN` — intended canonical domain, currently `https://onlineshowroom.in`
- `VITE_API_BASE_URL` — intentionally blank until a backend is implemented
- `VITE_LAUNCH_SIGNUP_MODE` — `demo` until a real signup API is configured

The current frontend does not yet consume these variables. Connect canonical metadata and the API service when deployment and backend choices are finalized.

## Routes

- `/` — Homepage
- `/explore` — Search and filter the demo product catalogue
- `/categories`, `/category/:slug`
- `/collections`, `/collection/:slug`
- `/showrooms`, `/showroom/:slug`
- `/product/:slug`
- `/wishlist` — local device-only demo wishlist
- `/about`
- `/coming-soon`
- `/contact` — demo form only
- `/privacy`, `/terms` — draft copy requiring review
- fallback 404 page

## Deployment

Deploy the `dist/` directory to a static host such as Cloudflare Pages, Netlify, Vercel, or a static Nginx server. Configure SPA fallback so nested paths serve `index.html`.

For the domains:
1. Choose `https://onlineshowroom.in` as the canonical host if that remains the plan.
2. Configure `onlineshowroom.com` to redirect to `.in` at the DNS/hosting layer.
3. Configure HTTPS and test direct navigation/refresh on nested routes.
4. Replace draft legal text and confirm all image usage rights before public promotion.

## Before public launch

- Replace externally loaded Unsplash demo images with reviewed, appropriately licensed and optimized assets.
- Connect `LaunchSignupService` to a real backend/email provider with consent, validation, duplicate handling, rate limiting, privacy policy, and error states.
- Connect the contact form to a real API or remove it.
- Add actual canonical metadata, sitemap, robots configuration, social preview image, and analytics only after provider and consent choices are finalized.
- Add automated route, accessibility, and responsive tests.
- Review legal pages with a qualified professional.
- Do not advertise sample products or showroom profiles as real inventory or partners.


## Netlify deployment

This repository includes `netlify.toml` and `public/_redirects` for Vite builds and client-side React Router refreshes.

**Git-connected deployment (recommended):**
1. Push this project folder to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Connect GitHub and select the repository.
4. Confirm build command `npm run build` and publish directory `dist`.
5. Click **Deploy**. Netlify will build the project from source.

**Manual deployment:**
1. Run `npm install` and `npm run build` locally.
2. Upload the generated `dist` folder to Netlify Drop.

If `npm run build` fails, fix the error before publishing. Domain setup can be done later in Netlify's Domain management after the site is deployed.
