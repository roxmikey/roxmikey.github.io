
# Brisbane Access Solutions — Static Website

Fresh, lightweight site ready for GitHub Pages.

## 📂 Structure
```
/
├─ index.html
├─ gates.html
├─ garage-doors.html
├─ gallery.html
├─ contact.html
├─ privacy.html
├─ robots.txt
├─ seo/
│  └─ sitemap.xml
└─ assets/
   ├─ css/site.css
   ├─ js/site.js
   ├─ js/config.js   ← set owner/repo/branch here once
   ├─ logo/          ← add logo.png and favicon.ico (optional)
   └─ images/gallery/← drop .jpg/.jpeg/.png images here
```

## 🚀 Deploy (GitHub Pages)
1) Create a **public** repo on GitHub.
2) Upload all files/folders from this package.
3) Enable **Settings → Pages** → Deploy from **main** branch (or a `gh-pages` branch).
4) (Optional) Add your custom domain and DNS A/CNAME records.

## 🖼 Gallery (auto-photos, no captions)
- Put images into `assets/images/gallery/`.
- The gallery page auto-lists images using the GitHub API (no code edits).

**One-time step:** open `assets/js/config.js` and set:
```js
window.GALLERY_CONFIG = { owner: "YOUR_USER", repo: "YOUR_REPO", branch: "main" }
```

## ☎ Contact (no form)
- Phone: 0498 524 378
- Email: info@brisbaneaccesssolutions.com.au
- Hours: Monday to Friday, 8:00 am – 4:00 pm

## ✏ Customise
- Titles & descriptions are in each HTML `<head>`.
- Colours & layout live in `assets/css/site.css`.

---

© Brisbane Access Solutions
