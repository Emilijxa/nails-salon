# Neringa | Nail Technician

Public website for Neringa, an independent nail technician based in Spain.

The site is a static React app. Appointment booking is handled entirely by Square Appointments. This website does not take payments, store customer data, or manage calendars.

## 1. Install

```bash
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
```

The static files are written to `dist/`. Preview them with:

```bash
npm run preview
```

## 4–5. Square booking URL

Stored once in `src/config/business.ts`:

```ts
export const SQUARE_BOOKING_URL =
  "https://app.squareup.com/appointments/book/84m7brwsos03pw/LA6H12NQF7NYE/start";
```

Every “Book appointment” button uses this value through the `BookingButton` component. To change the booking link later, edit that one constant. Do not paste the URL into individual pages.

Square handles dates, times, service selection, customer details, confirmations and Neringa’s calendar.

## 6. WhatsApp number

In `src/config/business.ts`:

```ts
whatsappNumber: "346XXXXXXXX"
```

Digits only, no spaces. Spanish numbers typically start with `34`.

If this field is empty, the floating WhatsApp button and all WhatsApp links are hidden.

The pre-filled message follows the selected language (see `whatsapp.defaultMessage` in the translation files).

## 7. Instagram

In `src/config/business.ts`:

```ts
instagramUrl: "https://www.instagram.com/username/"
```

Use the full profile URL. If empty, Instagram links in the gallery, contact section, footer and mobile menu are hidden. There is no Instagram API feed.

## 8. Phone number

In `src/config/business.ts`:

```ts
phone: "+34 6XX XXX XXX"
```

If empty, the phone row is hidden.

## 9. Email

In `src/config/business.ts`:

```ts
email: "hello@example.com"
```

If empty, the email row is hidden.

## 10. Location

In `src/config/business.ts`:

```ts
location: "Valencia, España"
```

Use a general public location only. The site already includes translated wording that the exact address is given when the appointment is confirmed. Do not embed Google Maps until there is a real public address.

Also set `siteUrl` to the live domain (for example `https://www.example.com`) once the site is deployed. That value is used for canonical and Open Graph URLs.

## 11–13. Services, prices and durations

Edit `src/data/services.ts`.

- `translationKey` must match a key under `services.items` in `src/i18n/translations.ts`
- `price` is the displayed price (`€XX` is a placeholder)
- `duration` is the displayed duration (`XX min` is a placeholder)

Add or remove objects in the `services` array to change the list. Service names and descriptions are translated in the i18n files, not in the data file.

## 14. Gallery photographs

1. Replace the files in `public/images/gallery/` (`nails-01.jpg` … `nails-08.jpg`) with Neringa’s photographs, **or**
2. Change the `src` paths in `src/data/gallery.ts`.

Current gallery photographs are Neringa’s real work. Add more files in `public/images/gallery/` and list them in `src/data/gallery.ts`.

Hero image: `public/images/hero/hero-nails.jpg`  
Open Graph image: `public/images/og-image.jpg` (currently the brand logo)

## 15. About text and portrait

- Portrait: `public/images/about/neringa-portrait.jpg`
- Copy: edit `about.p1`, `about.p2` and `about.p3` in `src/i18n/translations.ts` for Spanish, English, Russian and Lithuanian

`p3` is intentionally marked as unfinished so real biography details are not invented.

## 16. Genuine reviews

Edit `src/data/reviews.ts` for names/ratings, and `reviews.items` plus `reviews.client` in `src/i18n/translations.ts` for the text.

`rating` can be any integer from 1 to 5. Current entries are obvious placeholders (“Cliente” / “Review text here.”).

## 17. Opening hours

Edit `src/data/openingHours.ts`.

- Set `hours` to a range such as `"10:00 – 19:00"`
- Set `hours` to `"closed"` to show the translated Closed label

These hours are informational only. Real bookable availability always comes from Square.

## 18–22. Translations

The translation system lives in `src/i18n/`.

| Language    | Code | File location                                      |
| ----------- | ---- | -------------------------------------------------- |
| Spanish     | `es` | `src/i18n/translations.ts` → `translations.es`     |
| English     | `en` | `src/i18n/translations.ts` → `translations.en`     |
| Russian     | `ru` | `src/i18n/translations.ts` → `translations.ru`     |
| Lithuanian  | `lt` | `src/i18n/translations.ts` → `translations.lt`     |

Do not hardcode visible copy inside components. Use `useLanguage()` and `t.…`.

The brand name **Neringa** and the subtitle **Nail Technician** are never translated.

Selected language is stored in `localStorage` under `neringa-language`. On the first visit the site checks the browser language (`es`, `en`, `ru`, `lt`) and otherwise defaults to Spanish.

## 23. Add another language later

1. Add the language code to `Language` and `LANGUAGE_OPTIONS` in `src/i18n/types.ts`
2. Add a matching object in `src/i18n/translations.ts` (TypeScript will require every key)
3. Extend `detectLanguage()` and `SUPPORTED` in `src/i18n/LanguageContext.tsx`

## 24. Deploy to Cloudflare Pages

1. Push this repository to GitHub (or connect the folder in the Cloudflare dashboard).
2. In Cloudflare Pages, create a project with:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 or later
3. `public/_redirects` already sends all routes to `index.html`, so `/privacy` and `/legal` work on the static host.
4. After the live URL is known, set `siteUrl` in `src/config/business.ts`.

## Brand assets

- Logo: `public/images/brand/logo.jpg`
- Favicon: `public/favicon.svg`

The visual brand lockup is always:

**Neringa**  
Nail Technician

## Legal pages

- Privacy: `/privacy`
- Legal notice: `/legal`

Both are placeholders. Complete identity, contact and tax details before launch. Do not invent NIF or company data.

The public site does not include a contact form, newsletter, analytics or marketing cookies.

## Project structure

```
src/
  components/     UI sections and shared controls
  config/         Business details and Square URL
  data/           Services, gallery, reviews, hours
  i18n/           Languages and translations
  lib/            Small helpers
public/
  images/hero/
  images/gallery/
  images/about/
  images/brand/
```
