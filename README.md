# Dominion Holdings Patch
Date: 2025-09-09

This zip contains:
- `dominionholdings-polish.patch` — apply with `git apply` or `git am`
- `_redirects` — Netlify-style redirects (or copy lines into `.htaccess`)
- `robots.txt` — allow indexing and declare sitemap
- `assets/og-cover.png` — 1200x630 share image (update if you prefer)

## Apply the patch

From the root of your repo (where `index.html` lives):

```
git checkout -b chore/polish-seo-a11y
git apply dominionholdings-polish.patch
# If you prefer commits with metadata:
# git am < dominionholdings-polish.patch
```

If a hunk fails due to drift, open the patch and copy the changed block into your file manually.

## Deploy redirects

- **Netlify**: add `_redirects` at repo root (same level as `index.html`).
- **Apache**: instead of `_redirects`, add to `.htaccess`:
  ```
  Redirect 301 /book-online /contact.html
  Redirect 301 /service-page/landscaping-advisory /resources.html
  Redirect 301 /blank-1 /
  ```

## Share image

Place `assets/og-cover.png` at `/assets/og-cover.png` (already included). The HTML references `/assets/og-cover.jpg` — you can keep the PNG and update the extension, or export a JPG from this file.

--
Generated for dominionholdings.co
