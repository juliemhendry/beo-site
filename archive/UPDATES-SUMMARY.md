# Website Updates Summary - 3 February 2026

## All Changes Completed ✅

### 1. Research Foundation Section (index.html)

**REMOVED:**
- ❌ Specific thesis reference "MSc Psychology dissertation, University of Strathclyde"
- ❌ Detailed methodology paragraph (N=82, ages, questionnaires)

**UPDATED:**
- ✅ Now references **general research** about self-assessment accuracy
- ✅ Cites multiple studies (Paulhus & Vazire, 2007; Andrews et al., 2015; Ellis et al., 2019)
- ✅ More broadly applicable: "people are notoriously poor at self-assessment, especially around habitual behaviours"
- ✅ Explains that people can estimate frequency reasonably but struggle with duration
- ✅ No longer claims this is YOUR unique finding alone

**New text:**
> Most research on smartphone and social media use relies on self-reported questionnaires. But people are notoriously poor at self-assessment, especially around habitual behaviours.
>
> Research comparing self-reported technology use with actual device data consistently shows a gap. People can estimate frequency (how often they check their phone) reasonably well, but struggle to accurately gauge duration or identify problematic patterns. Addiction-focused questionnaires often fail to correlate with actual behaviour.

---

### 2. Benefits Cards (index.html)

**UPDATED: "See the gap"**
- ❌ REMOVED: "30 to 50%" claim (no solid citation)
- ✅ NEW: "Research shows people struggle to accurately estimate their screen time"

**UPDATED: "Break the pattern" → "Gentle interventions"**
- ❌ OLD: "28 simple interventions. Some take 30 seconds. All backed by peer-reviewed research."
- ✅ NEW: "Not blocking apps or punishing you. 28 evidence-based pauses you choose when you want them. You're in control."
- Emphasizes user control, not phone-centric blocking apps

**ADDED: "Reclaim real life"**
- 🌱 NEW 4th card
- "Move, breathe, connect with people face-to-face. Small moments that shift attention back to what matters."
- Now **5 total cards** instead of 4

**Benefits grid now shows:**
1. See the gap (👁️)
2. Gentle interventions (⏸️)
3. Own your data (🔒)
4. Reclaim real life (🌱) ← NEW
5. Contribute to science (🧪)

---

### 3. Details Section (index.html)

**UPDATED: "What you'll do"**
- ❌ OLD: "Then use our tools at your own pace, completing interventions when you want to interrupt automatic scrolling."
- ✅ NEW: "We'll send gentle notifications suggesting interventions. You choose if and when to complete them. You're always in control."
- Acknowledges notifications but emphasizes choice

---

### 4. Privacy & Ethics Cards (index.html)

**UPDATED: "Questions?" card**
- ❌ OLD: "Questions?" + "Research: lab@beo.llc"
- ✅ NEW: "Questions about the research?" + "Get in touch: lab@beo.llc"
- More text to match other cards' length

---

### 5. Footer (All Pages)

**UPDATED: All footers**
- ❌ OLD: "&copy; 2026 beó. Digital wellbeing research lab."
- ✅ NEW: "&copy; 2026 beó"
- Cleaner, less prescriptive

**Files updated:**
- index.html ✅
- team.html ✅
- blog.html ✅
- blog/from-research-to-reality.html ✅

---

### 6. Team Page (team.html)

**UPDATED: Julie's credentials**
- ❌ OLD: "FBCS, FRSA"
- ✅ NEW: "Fellow British Computer Society, Fellow Royal Society of Arts"
- Spelled out fully for clarity

**REMOVED: Thesis download**
- ❌ Removed thesis.pdf download link
- ❌ Removed thesis methodology details "(N=82, validated questionnaires + iPhone Screen Time data)"
- Reason: Experts advised not good enough to share publicly

**Julie's bio now:**
1. MSc Psychology (Distinction, 2020), BSc Computer Science, Fellow British Computer Society, Fellow Royal Society of Arts.
2. Perception gap discovery paragraph
3. beó evolution paragraph
4. LinkedIn link only (no thesis download)

---

### 7. Blog Post (blog/from-research-to-reality.html)

**REMOVED:**
- ❌ Reference section at end with thesis citation
- No longer promotes thesis download

**Footer updated:**
- ✅ Same as other pages ("&copy; 2026 beó")

---

### 8. Blog Landing Page (blog.html)

**Footer updated:**
- ✅ Consistent with site ("&copy; 2026 beó")

---

## Summary of Key Changes

### What Was Removed ✅
1. ❌ Specific thesis institutional reference (MSc dissertation, University of Strathclyde)
2. ❌ "30 to 50%" underestimation claim (no citation)
3. ❌ Thesis download link from team page
4. ❌ Detailed thesis methodology "(N=82, validated questionnaires...)"
5. ❌ "Digital wellbeing research lab" from footer

### What Was Added ✅
1. ✅ General research citations (Paulhus & Vazire, Andrews et al., Ellis et al.)
2. ✅ "Reclaim real life" benefits card
3. ✅ Emphasis on user control vs phone-centric blocking
4. ✅ Notification acknowledgement with user choice emphasis
5. ✅ Fully spelled out credentials

### What Was Updated ✅
1. ✅ Research foundation now references multiple studies, not just your thesis
2. ✅ "Break the pattern" → "Gentle interventions" (emphasizes choice, not punishment)
3. ✅ "Questions?" card expanded to match others
4. ✅ All footers simplified and consistent

---

## Still TODO / Questions

### Images?
- No images added yet
- Do you want hero images, team photos visible, intervention illustrations?

### Accessibility?
- Need to add alt text for any images
- Need to test keyboard navigation
- Need to check color contrast ratios
- Need to test with screen readers

### Security?
- HTTPS enforced via GitHub Pages
- No user data collected on website itself (only via Formspree)
- Email form needs Formspree configuration

### Compliance?
- Privacy policy page (referenced but not created)
- Terms page (referenced but not created)
- Cookie banner? (Currently none)
- GDPR: Anonymous research data = compliant per current plan

### Navigation Consistency?
- Headers across pages use same styling (48px, centered)
- Blog has slightly narrower container (700px) than team (1100px)
- Should these be identical?

### Centre Intervention Panels?
- Currently: 7 intervention cards in grid
- Grid uses `repeat(auto-fit, minmax(160px, 1fr))`
- On desktop: Might show 4-3 layout causing whitespace on right
- Do you want them centered so no whitespace on second row?

---

## Files Modified

1. **index.html** - Research section, benefits, details, ethics, footer
2. **team.html** - Julie bio, credentials, thesis removal, footer
3. **blog.html** - Footer
4. **blog/from-research-to-reality.html** - Reference removal, footer

---

## Next Actions Needed

1. **Review all pages** in browser to check layout
2. **Test intervention grid** - does it need centering?
3. **Decide on images** - hero, team, interventions?
4. **Create missing pages** - privacy.html, terms.html
5. **Accessibility audit** - WCAG compliance check
6. **Configure Formspre** - email signup form
7. **Add tracking** - Google Analytics for O-1 evidence

---

## Key Positioning Changes

**Before:**
- "This is MY thesis research"
- "30-50% underestimation" (uncited)
- "Break the pattern" (could sound controlling)
- Thesis prominently featured

**After:**
- "This is supported by multiple studies in the field"
- "Research shows people struggle..." (properly cited)
- "Gentle interventions you control" (emphasizes choice)
- Thesis removed, credentials remain

**Effect:**
- ✅ More credible (multiple citations vs single thesis)
- ✅ Less vulnerable (no thesis for experts to critique)
- ✅ Better positioning (research-backed vs thesis-backed)
- ✅ User-centric (control, choice, gentle vs restrictive)

---

Ready for your review!
