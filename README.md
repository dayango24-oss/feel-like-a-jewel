# Feel Like A Jewel

A static storefront and brand landing page for the FLJ wellness, beauty, and self-care concept. The current implementation is a single-page marketing site styled with a black, rose-gold, and ivory palette and designed to be published directly via GitHub Pages.

## Current project structure

- `index.html` — page structure, hero content, product cards, FAQ, and contact form.
- `styles.css` — full visual design system, responsive layout, product cards, and mobile navigation styling.
- `script.js` — mobile menu toggling and dynamic footer year.
- `FLJ-Thank-You.png` and `back.png` — brand artwork assets used across the landing page.

## Local development

Because this is a static site, there is no build step or package installation required.

1. Open `index.html` directly in a browser, or
2. Serve the folder locally, for example:
   `python -m http.server 8000`
3. Browse to `http://localhost:8000`.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)`.
5. Save the configuration and use the generated Pages URL.

## Customization checklist

- Replace the demo product cards in `index.html` with your real offerings and pricing.
- Update the contact form action and email address in the contact section.
- Replace placeholder FAQ answers with actual customer support details.
- Add your social links, shipping policy, refund policy, privacy policy, and terms pages.
- If the site promotes health or beauty claims, confirm statements comply with relevant regulations and your brand approvals before publishing.

## Notes on implementation

The JS is intentionally lightweight and uses simple DOM queries to keep the site fast and easy to maintain. The menu toggle keeps the mobile navigation accessible by syncing the button's `aria-expanded` state with the open/closed menu state.
