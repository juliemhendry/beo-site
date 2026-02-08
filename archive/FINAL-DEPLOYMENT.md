# beó Website – Final Deployment Package
**Date:** 3 February 2026
**Status:** Ready to deploy

---

## ✅ All Changes Completed

### Branding
- ✅ **beó (with accent)** used everywhere – never "beo"
- ✅ All em dashes removed – replaced with proper alternatives
- ✅ Header links to #top (scroll to top of page)
- ✅ Seamless navigation between main site, blog, and blog posts

### Structure
- ✅ **User-first approach** (emotional hero) with scientific details lower on page
- ✅ All grids centered properly (no right whitespace)
- ✅ Responsive design (mobile-friendly)
- ✅ Consistent design across all pages

### Team Section
- ✅ Minimal prominence (smaller, simpler)
- ✅ Just names + roles (Julie: CTO, Mark: CEO)
- ✅ No bios, no images, no funding details

### Ethics & Privacy
- ✅ Clarified: data stays on phone, only anonymous scores shared
- ✅ No device ID, no location, no email = truly anonymous
- ✅ GDPR compliant (no export/delete needed for truly anonymous data)
- ✅ "We don't sell your data" explicit
- ✅ BPS Code of Ethics mentioned

### Content
- ✅ No participant cap mentioned
- ✅ Replaced thesis citation with published paper (Andrews et al., 2015)
- ✅ Research credited to "beó" not personally
- ✅ Email: lab@beo.llc throughout
- ✅ Footer: no personal names
- ✅ British English throughout (30 to 50%, colour, realise, etc)

---

## Files Ready to Deploy

All files in `/mnt/beo-lab-site/`:

1. **index.html** – Main site (DEPLOY THIS)
2. **blog.html** – Research blog landing page
3. **blog/your-phone-knows.html** – First blog post
4. **privacy.html** – (existing, unchanged)
5. **terms.html** – (existing, unchanged)

---

## What Still Needs Configuration

Before going live:

### 1. Email Form (HIGH PRIORITY)
**Current:** `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
**Action needed:**
- Set up Formspree account (free tier is fine)
- Replace YOUR_FORM_ID with real form ID
- OR integrate ConvertKit/Mailchimp for autoresponder

### 2. Google Analytics (HIGH PRIORITY)
**Action needed:**
- Add GA4 tracking code to `<head>` of all pages
- Track: page views, form submissions, navigation clicks

### 3. Domain Setup
**Current:** Files ready for beo.llc
**Action needed:**
- Upload to GitHub Pages (github.com/juliemhendry/beo-site)
- Or deploy to hosting of choice
- Ensure CNAME file points to www.beo.llc

---

## Quick Deploy Steps

### Option 1: GitHub Pages (Recommended)

```bash
cd /path/to/beo-site
git add .
git commit -m "Launch beó lab study site

- User-focused design with scientific rigour
- beó branding (accented) throughout
- Simplified team section
- Comprehensive privacy & ethics
- Blog integrated seamlessly

Ready for study launch February 2026"

git push origin main
```

Site live at www.beo.llc within 1-2 minutes.

### Option 2: Test Locally First

```bash
cd /path/to/beo-site
python3 -m http.server 8000
# Open http://localhost:8000 in browser
```

---

## User Journey Flow

### Happy Path:
1. **Land on homepage** → Emotional hero ("Your phone doesn't have to control you")
2. **Scroll** → See benefits (gap, pattern, data, science)
3. **Scroll** → 28 interventions showcase
4. **Decide** → Scroll back up OR continue reading details
5. **Sign up** → Enter email in form
6. **Confirmation** → See message about TestFlight within 48 hours
7. **Optional** → Click "research" to read blog

### Blog Flow:
1. **Click "research" in nav** → Blog landing page
2. **Click post title** → Read full article
3. **Click "Join the Study" CTA** → Back to main site signup form
4. **Click "Back to Research"** → Return to blog listing

### Navigation:
- **beó logo** → Scroll to top of current page
- **lab** → Jump to signup form (#lab)
- **research** → Go to blog.html
- **team** → Jump to team section (#team)
- **contact** → Open email to lab@beo.llc

---

## Design Specifications

### Colors
- Primary: #3D6B4A (forest green)
- Background: #F5F5F3 (warm off-white)
- Text: #4A4A4A (dark grey)
- White: #FFFFFF

### Typography
- Font: System fonts (SF Pro on Mac, Segoe UI on Windows)
- Hero: 52px light
- Headings: 36px, 28px, 22px
- Body: 18px for posts, 16px for details, 15px for cards

### Spacing
- Section padding: 80px vertical
- Card padding: 32px
- Grid gaps: 32px for cards, 24px for interventions

### Responsive
- Breakpoint: 768px
- Mobile: Larger touch targets, simplified grids, smaller text

---

## Content Strategy

### Main Site
- **Hero:** Emotional hook, immediate value
- **Benefits:** What you get (see gap, break pattern, own data, science)
- **Interventions:** 28 evidence-based categories
- **Details:** How it works (scientific rigour)
- **Team:** Minimal (just names/roles)
- **Ethics:** Comprehensive privacy & research standards
- **Signup:** Simple email + optional name

### Blog
- **Purpose:** Establish research thought leadership
- **Frequency:** 1 post/month (expand LinkedIn posts)
- **Tone:** Human but credible, no em dashes, British English
- **Citations:** Informal (Author et al., Year)
- **CTA:** Link back to study signup

---

## Launch Checklist

**Pre-launch:**
- [ ] Configure email form (Formspree or ConvertKit)
- [ ] Add Google Analytics
- [ ] Test form submission end-to-end
- [ ] Test all nav links
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Check all "beó" accents render correctly

**Launch day:**
- [ ] Deploy to beo.llc
- [ ] Send test email to yourself
- [ ] Share on LinkedIn
- [ ] Email personal network
- [ ] Monitor form submissions

**Post-launch:**
- [ ] Check Analytics daily (first week)
- [ ] Respond to any emails within 24 hours
- [ ] Screenshot first signups (O-1 evidence)
- [ ] Track Apple Developer approval status
- [ ] Prepare TestFlight invite email template

---

## Success Metrics (Week 1)

**Minimum:**
- 10 signups (20% of eventual 50)
- Form works without errors
- No major design breaks on mobile

**Good:**
- 25 signups (50%)
- 100+ page views
- 1+ collaboration enquiry

**Exceptional:**
- 50+ signups (100%+ → create waitlist)
- 500+ page views
- 3+ collaboration enquiries

---

## Known Limitations

**Current setup:**
- English only (no translations yet)
- iOS only (Android mentioned as future)
- No live participant count
- No testimonials (pre-launch)
- No app screenshots (pre-launch)

**Not a problem because:**
- This is pre-launch recruitment
- Study just starting
- Don't need social proof yet
- Focus on getting first 50 participants

---

## Support & Contact

**For deployment issues:**
- Check GitHub Actions (if using GitHub Pages)
- Check Formspree dashboard for form errors
- Check Google Analytics for tracking

**For content questions:**
- Email: lab@beo.llc
- All research enquiries go to same email

**For technical issues:**
- HTML/CSS is vanilla (no build process)
- Works in all modern browsers
- No JavaScript dependencies

---

## Next Steps After Launch

**Week 1:**
1. Monitor signups daily
2. Respond to all enquiries within 24 hours
3. Post on LinkedIn 2x (per O-1 strategy)
4. Track metrics in spreadsheet

**Week 2:**
1. Reach out to potential research advisors
2. Add 2-3 sample interventions to site (if requested)
3. Write second blog post (expand LinkedIn content)

**When Apple approves:**
1. Send TestFlight invite to all signups
2. Update site: remove "pending approval" language
3. Post update on LinkedIn

**Monthly:**
1. Review analytics (traffic, conversions, sources)
2. Publish new blog post
3. Update O-1 evidence packet (screenshots, metrics, testimonials)

---

## Final Notes

**This site is:**
- ✅ User-focused with scientific credibility
- ✅ Privacy-first (truly anonymous)
- ✅ beó branded (accented, consistent)
- ✅ Ready for research study launch
- ✅ Optimised for participant recruitment
- ✅ Clean user journey (no confusion)

**This site is NOT:**
- ❌ A product marketing site (it's research-first)
- ❌ Personally branded (it's beó, not Julie)
- ❌ Trying to sell anything (it's a study signup)
- ❌ Overselling benefits (it's honest about what we don't know)

**Ready to deploy when you are.**

Questions? Issues? Email lab@beo.llc or update in Cowork.
