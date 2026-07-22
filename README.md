# Brisbane Access Solutions — Website

A fast, modern website for Brisbane Access Solutions, built to be **hosted free on GitHub Pages** and **updated without any coding** — you edit one settings file and drag photos into a folder, and the site rebuilds itself.

---

## 1. Put the website online (one-time setup, ~15 minutes)

### Step 1 — Create a GitHub account
1. Go to **github.com** and sign up (free).
2. Verify your email address.

### Step 2 — Create a repository (a home for the website files)
1. Click the **+** in the top-right corner → **New repository**.
2. Repository name: `brisbane-access-solutions` (lowercase, use dashes).
3. Leave it set to **Public** (required for free GitHub Pages).
4. Don't tick any of the "initialize" boxes. Click **Create repository**.

### Step 3 — Upload the website files
1. Unzip the website folder on your computer.
2. On the empty repository page, click the **"uploading an existing file"** link.
3. Open the unzipped folder, select **everything inside it** (not the folder itself), and drag it onto the upload page.
   - Make sure the hidden `.github` folder and `.gitignore` file are included. On Windows, turn on **View → Show → Hidden items** in File Explorer first, then select everything with **Ctrl+A**.
4. Scroll down and click **Commit changes**. Wait for the upload to finish (it's a few hundred small files).

> **Tip:** if drag-and-drop misses the `.github` folder, you can add it afterwards: **Add file → Create new file**, type `.github/workflows/deploy.yml` as the name, and paste in the contents of that file from the zip.

### Step 4 — Turn on GitHub Pages
1. In the repository, go to **Settings → Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Go to the **Actions** tab. If it asks you to enable workflows, click **Enable**.
4. If no build is running, open **Actions → Deploy website to GitHub Pages → Run workflow**.
5. After ~2 minutes a green tick appears. Your site is live at:

```
https://YOUR-USERNAME.github.io/brisbane-access-solutions/
```

That's it. From now on, **every change you commit republishes the site automatically** — you never repeat this setup.

---

## 2. Everyday updates (no coding)

### Change your phone number, email, hours, suburbs, brands…
1. In the repository, open **`src/config/site.ts`**.
2. Click the **pencil icon** (Edit this file).
3. Change the text between the quotes. The file is full of comments explaining every setting.
4. Click **Commit changes**. The site updates itself in ~2 minutes.

**Before going live, replace these placeholders in `site.ts`:**
- `phone` and `phoneHref` (currently `0400 000 000`)
- `email` (currently `info@example.com.au`)

### Add photos to the gallery
1. Open the folder **`public/images/gallery`** in the repository.
2. Click **Add file → Upload files**, drag your photos in, click **Commit changes**.
3. Done — every image in that folder automatically appears on the Gallery page.

**Photo tips**
- Name files descriptively with dashes — the file name becomes the caption:
  `sliding-gate-motor-install.jpg` → *"Sliding Gate Motor Install"*
- Use `.jpg` photos around 1200–1600px wide (phone photos are fine, but resize huge originals so the page stays fast).
- To **remove** a photo: click the file → bin icon → commit.
- The three `sample-*.svg` files are placeholders — delete them once you have real photos.

### Replace the other placeholder images
The grey placeholder graphics on the pages live in **`public/images/`** (`hero-gate.svg`, `sliding-gate.svg`, `garage-door.svg`, etc.). To replace one with a real photo, upload your photo to that folder **with the exact same file name** (or ask a developer/Claude to point the page at a new file name).

### Edit page text
Each page lives in **`src/app/…/page.tsx`** (e.g. `src/app/gates/page.tsx`). The wording is plain text inside the code — edit carefully, change only the words, and keep the quotes and tags around them. The **About page** contains a clearly marked `[Placeholder …]` paragraph waiting for your real business history.

### Reviews
The three review cards on the homepage are **clearly marked placeholders**. Replace them with genuine customer feedback (with permission) in `src/app/page.tsx`, or link to your Google reviews. Don't publish invented reviews — it's illegal in Australia (ACCC) and Google can penalise the site.

---

## 3. Switch on the quote form (Formspree, free)

Until this is done, the contact page politely shows your phone/email instead of a form.

1. Sign up free at **formspree.io**.
2. Click **New form**, name it "Website quotes", and set the email where enquiries should arrive.
3. Copy the form's ID — the short code in its URL/endpoint (looks like `mqkrzabc`).
4. Edit `src/config/site.ts` and paste it in: `formspreeId: "mqkrzabc",`
5. Commit. The quote form goes live on the next rebuild.

**Notes**
- The free Formspree plan includes 50 submissions/month — plenty to start.
- **Photo attachments** on forms require a paid Formspree plan. On the free plan the enquiry still arrives with all details; customers can text/email photos after you reply. If photo uploads matter to you, Formspree's paid tier enables them with no changes to the site.
- Each submission includes name, phone, email, suburb, equipment type, job type, property type, brand, description, urgency flag, and preferred contact method/time.

---

## 4. Custom domain later (optional)

When you buy a domain (e.g. `brisbaneaccesssolutions.com.au`):
1. Repository **Settings → Pages → Custom domain** — enter the domain and save.
2. At your domain registrar, add the DNS records GitHub shows you (a CNAME for `www` pointing to `YOUR-USERNAME.github.io`).
3. Tick **Enforce HTTPS** once it verifies.
4. The build automatically uses the new address — no file edits needed (the deploy workflow reads the address GitHub Pages reports).

---

## 5. Before launch checklist

- [ ] Real phone number + email in `src/config/site.ts`
- [ ] Formspree ID added (section 3)
- [ ] About page placeholder paragraph replaced
- [ ] Placeholder reviews replaced with real ones (or removed)
- [ ] Real photos in the gallery, sample images deleted
- [ ] Privacy Policy & Terms reviewed — the included pages are **sensible templates, not legal advice**; have a professional look them over and fill in the "Last updated" dates
- [ ] Check the live site on your phone

---

## 6. For developers (optional)

Local preview requires Node.js 20+:

```bash
npm install
npm run dev      # live preview at http://localhost:3000
npm run build    # static export into ./out
```

Stack: Next.js 15 (static export) · Tailwind CSS 4 · TypeScript. No database, no server — the whole site is static files, which is why hosting is free and there's nothing to hack or maintain. Structured data (LocalBusiness / Service / FAQ), sitemap and robots.txt are generated automatically from `src/config/site.ts`.
