# AI Ready PDX - Graphics & Image Generation Prompts

Use these prompts with image generation tools (Midjourney, DALL-E, Gemini, etc.) to create visual assets for the AI Ready PDX website.

---

## FILE ORGANIZATION

Place all generated images in the `public/images/` folder:

```
public/
└── images/
    ├── logos/
    │   ├── logo-full.svg          (or .png)
    │   ├── logo-full-white.svg    (for dark backgrounds)
    │   ├── logo-wordmark.svg
    │   ├── logo-icon.svg
    │   └── favicon.png            (32x32 and 180x180)
    ├── hero/
    │   └── hero-background.jpg    (or .webp)
    ├── icons/
    │   ├── service-strategy.svg
    │   ├── service-automation.svg
    │   ├── service-marketing.svg
    │   ├── service-training.svg
    │   ├── service-data.svg
    │   ├── client-home-services.svg
    │   ├── client-food.svg
    │   ├── client-professional.svg
    │   ├── client-manufacturing.svg
    │   ├── client-nonprofit.svg
    │   ├── phase-1-foundation.svg
    │   ├── phase-2-automation.svg
    │   ├── phase-3-operations.svg
    │   └── phase-4-sovereign.svg
    ├── sections/
    │   ├── about-team.jpg
    │   ├── cta-consultation.svg   (or .png)
    │   └── private-ai.svg         (or .png)
    ├── patterns/
    │   └── background-pattern.svg (or .png, tileable)
    └── social/
        ├── social-profile.png     (400x400)
        ├── social-cover.png       (1584x396)
        └── og-image.jpg           (1200x630 for link previews)
```

---

## COLOR REFERENCE

When generating images, reference these brand colors:
- **Deep Forest Green:** #0B3D2E
- **Slate Blue:** #1F3A5F
- **Teal Accent:** #2BBBAD
- **Warm Neutral:** #F4F1EA
- **Dark Grey:** #1E2022

---

## 1. PRIMARY LOGO (Icon + Wordmark)

**File names:**
- `public/images/logos/logo-full.svg` (primary)
- `public/images/logos/logo-full.png` (fallback, transparent background)
- `public/images/logos/logo-full-white.svg` (for dark backgrounds)

**Dimensions:** Flexible, but design at ~400px wide minimum

### Prompt:
```
Create a flat vector logo for a company called "AI Ready PDX". The concept is a simple evergreen tree made from connected dots and lines, symbolizing both the Pacific Northwest and AI networks. Style: minimal, modern, professional, and reassuring (reflecting a 30-year tech legacy), not playful or experimental. Use a limited palette of deep forest green (#0B3D2E), slate blue (#1F3A5F), and a touch of teal (#2BBBAD) on a light background. Include a clean sans-serif wordmark "AI Ready PDX" to the right of the icon. No gradients, no 3D, suitable for web and print.
```

### Alternative Concept:
```
Design a professional, modern logo for "AI Ready PDX" - a Portland, Oregon-based AI consulting company. The logo should combine the letters "AI" in a creative monogram with a subtle Pacific Northwest element such as an evergreen tree silhouette, the St. Johns Bridge arch, or Mt. Hood outline. Use deep forest green (#0B3D2E) as the primary color with a teal (#2BBBAD) accent. The style should feel established and trustworthy, not startup-y or overly techy. Clean lines, balanced composition, works well at small sizes. No gradients. Transparent background.
```

---

## 2. WORDMARK ONLY (Text Logo)

**File name:** `public/images/logos/logo-wordmark.svg`

**Dimensions:** ~300px wide

### Prompt:
```
Design a clean wordmark logo that says "AI Ready PDX". Style: modern sans-serif with slightly rounded corners, professional but inviting. The logo should feel established, as if the company has been in tech leadership for decades. Emphasize "AI" subtly, perhaps with a different weight or color. Use deep forest green (#0B3D2E) and dark grey (#1E2022) on a white or light neutral background. No icon, just typography.
```

---

## 3. LOGO ICON ONLY

**File names:**
- `public/images/logos/logo-icon.svg`
- `public/images/logos/favicon.png` (32x32)
- `public/images/logos/apple-touch-icon.png` (180x180)

**Dimensions:** Square, works at 32x32px minimum

### Prompt:
```
Design a simple square icon/favicon for "AI Ready PDX" that works at 32x32 pixels. Feature a minimalist "AI" lettermark with a single subtle evergreen tree or mountain peak element. Deep forest green (#0B3D2E) on transparent background. Must be instantly recognizable at small sizes.
```

---

## 4. WEBSITE HERO IMAGE

**File name:** `public/images/hero/hero-background.jpg` (or `.webp`)

**Dimensions:** 1920x1080px (16:9 aspect ratio)

### Prompt:
```
Create an illustration for a website hero section. Scene: a Portland-style small business environment (for example, a coffee shop storefront and a landscaping truck) with subtle hints of AI, like soft connection lines or gently glowing nodes around tools and devices. Style: flat, minimal, slightly geometric, with a Pacific Northwest color palette of greens (#0B3D2E), blues (#1F3A5F), teals (#2BBBAD), and warm neutrals (#F4F1EA). The overall feeling should be calm competence: "we've done this before," not "shiny startup." No text in the image. 16:9 wide aspect ratio for use as a web banner.
```

### Alternative Hero Concept:
```
Create a hero section background image for an AI consulting website. Scene: Abstract representation of Portland, Oregon - silhouettes of evergreen trees and distant mountain (Mt. Hood) with subtle digital network patterns woven through. Style: modern, professional, warm lighting like golden hour. Color palette: deep forest greens, slate blues, and warm amber accents. No people, no text. The image should feel technological but grounded and natural. 1920x1080 resolution, subtle enough to have text overlaid.
```

---

## 5. SERVICE ICONS (5 Icons)

**File names:**
- `public/images/icons/service-strategy.svg`
- `public/images/icons/service-automation.svg`
- `public/images/icons/service-marketing.svg`
- `public/images/icons/service-training.svg`
- `public/images/icons/service-data.svg`

**Dimensions:** 64x64px each (or SVG scalable)

### Prompt:
```
Create a set of 5 flat vector icons in a consistent style, outlined with minimal fills. Icons needed:

1. Strategy & roadmaps - a simple path/road with a flag at the end
2. Automation & agents - two gears with a small spark or glowing node
3. Marketing & outreach - a megaphone with signal waves
4. Training & enablement - a person at a whiteboard with a lightbulb
5. Data & private AI - a shield with small network nodes inside

Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), and teal accents (#2BBBAD) on a light neutral background (#F4F1EA). The style should be modern and professional, appropriate for a consulting company with a long history in tech. All icons should be the same size and visual weight.
```

---

## 6. CLIENT INDUSTRY ICONS (5 Icons)

**File names:**
- `public/images/icons/client-home-services.svg`
- `public/images/icons/client-food.svg`
- `public/images/icons/client-professional.svg`
- `public/images/icons/client-manufacturing.svg`
- `public/images/icons/client-nonprofit.svg`

**Dimensions:** 64x64px each (or SVG scalable)

### Prompt:
```
Create a set of 5 flat vector icons representing different business types:

1. Home & field services - a house with a leaf/tree element
2. Coffee & food businesses - a coffee cup with steam
3. Professional practices - a clipboard or medical/legal symbol
4. Manufacturers & distributors - a factory building with boxes
5. Nonprofits & organizations - hands holding a heart or community symbol

Style: minimal line art with selective fills. Colors: deep forest green (#0B3D2E) and teal (#2BBBAD) on light background. Modern, friendly, professional. All icons same size and weight.
```

---

## 7. PHASE/APPROACH ICONS (4 Icons)

**File names:**
- `public/images/icons/phase-1-foundation.svg`
- `public/images/icons/phase-2-automation.svg`
- `public/images/icons/phase-3-operations.svg`
- `public/images/icons/phase-4-sovereign.svg`

**Dimensions:** 64x64px each (or SVG scalable)

### Prompt:
```
Create 4 icons representing phases of AI adoption for a consulting company:

1. Phase 1 - Digital Foundation - a building block or foundation with a screen/browser window
2. Phase 2 - Automation & Growth - upward arrows with gear/automation symbol
3. Phase 3 - Operations - interconnected process nodes or workflow diagram
4. Phase 4 - Sovereign AI/Data Vault - a secure server or vault with lock symbol

Style: flat, minimal, modern. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), teal (#2BBBAD). Professional consulting aesthetic. Same size, same visual weight.
```

---

## 8. DECORATIVE BACKGROUND PATTERN

**File name:** `public/images/patterns/background-pattern.svg` (or `.png`)

**Dimensions:** Tileable/seamless, ~200x200px base tile

### Prompt:
```
Create a decorative graphic element for AI Ready PDX marketing materials: an abstract pattern inspired by Pacific Northwest topography (mountain ridges, tree lines, river curves) rendered in a modern, geometric style. Use deep forest green (#0B3D2E), soft sage green, and teal (#2BBBAD) on warm white (#F4F1EA). Should work as a background texture or section divider. Horizontal orientation, seamless/tileable.
```

---

## 9. TEAM/ABOUT SECTION IMAGE

**File name:** `public/images/sections/about-team.jpg`

**Dimensions:** 800x600px (or larger, will be cropped/scaled)

### Prompt:
```
Generate a photorealistic image for a marketing flyer or about section. Scene: A modern, sunlit office in a historic Portland building (exposed brick, rain visible on windows). Subject: Two professionals in smart casual attire (not suits, more Pacific Northwest style - think flannel and laptop) collaborating at a wooden desk with technology visible but not overwhelming. Action: Reviewing something on a laptop screen together, appearing thoughtful and engaged. Lighting: Soft, natural window light with a "golden hour" feel. Mood: Collaborative, empowering, forward-looking, professional but approachable.
```

---

## 10. FREE CONSULTATION CTA GRAPHIC

**File name:** `public/images/sections/cta-consultation.svg` (or `.png`)

**Dimensions:** 400x300px (flexible)

### Prompt:
```
Create an illustration for a call-to-action section promoting a free AI consultation. Visual: A simple calendar or clock icon combined with a friendly handshake or conversation bubble, suggesting "book time with us." Include subtle elements suggesting checklist/roadmap (checkmarks, simple document icon). Style: flat, modern, warm. Colors: primarily teal (#2BBBAD) with forest green (#0B3D2E) accents on a soft sage or light neutral background. Should feel inviting and low-pressure.
```

---

## 11. ON-PREM AI / PRIVACY SECTION GRAPHIC

**File name:** `public/images/sections/private-ai.svg` (or `.png`)

**Dimensions:** 400x300px (flexible)

### Prompt:
```
Create an illustration representing secure, on-premises AI computing. Visual: A simplified server or computer box with a shield icon, sitting inside a building outline (representing "stays in your office"). Small lock symbol. Subtle network nodes contained within the building boundary, not extending outside. Style: flat, clean, modern. Colors: deep forest green (#0B3D2E), slate blue (#1F3A5F), with a secure/trust feel. Convey: "Your data stays here, safe and private."
```

---

## 12. ONE-PAGER / PDF HEADER GRAPHIC

**File name:** `public/images/sections/pdf-header.png` (or `.jpg`)

**Dimensions:** 2550x600px (8.5" x 2" at 300dpi for print)

### Prompt:
```
Create a header graphic for a one-page marketing PDF. Dimensions: approximately 8.5" wide x 2" tall. Scene: Abstract Portland skyline (simplified building silhouettes, evergreen trees, distant mountain) with subtle AI network overlay (connected dots/lines). Style: flat, modern, professional. Colors: deep forest green (#0B3D2E) gradient into slate blue (#1F3A5F), with teal (#2BBBAD) accent nodes. Should work as a top banner with company name/logo placed over it.
```

---

## 13. SOCIAL MEDIA PROFILE IMAGE

**File name:** `public/images/social/social-profile.png`

**Dimensions:** 400x400px (square)

### Prompt:
```
Create a square social media profile image for "AI Ready PDX." Design: The logo icon only (evergreen tree made of connected nodes) centered on a deep forest green (#0B3D2E) background. Style: minimal, clean, instantly recognizable at small sizes. No text. Square format, 400x400 pixels minimum.
```

---

## 14. SOCIAL MEDIA COVER/BANNER

**File name:** `public/images/social/social-cover.png`

**Dimensions:** 1584x396px (LinkedIn) or 1200x630px (Facebook/Twitter)

### Prompt:
```
Create a LinkedIn/Facebook cover banner for "AI Ready PDX." Dimensions: 1584x396 pixels (LinkedIn) or similar wide format. Scene: Abstract Pacific Northwest landscape with subtle AI/tech overlay - flowing lines connecting points over silhouetted trees and mountains. Text area: Leave clear space on the left third for logo/text overlay. Colors: Deep forest green (#0B3D2E) to slate blue (#1F3A5F) gradient, teal (#2BBBAD) accent nodes. Style: Professional, established, modern but not flashy.
```

---

## 15. OPEN GRAPH IMAGE (Link Preview)

**File name:** `public/images/social/og-image.jpg`

**Dimensions:** 1200x630px

### Prompt:
```
Create an Open Graph image for link previews when sharing "AI Ready PDX" website. Include the company name "AI Ready PDX" prominently in the center-left. Tagline below: "Experienced tech leaders for your AI journey." Background: Abstract Pacific Northwest scene with subtle tech/AI elements. Colors: Deep forest green (#0B3D2E), slate blue (#1F3A5F), teal accents (#2BBBAD). Style: Professional, clean, readable at small sizes. The text must be legible when the image is displayed at 600px wide.
```

---

## ASSETS CHECKLIST

### Logos (4 files)
- [ ] `logo-full.svg` - Primary logo with icon + wordmark
- [ ] `logo-full-white.svg` - White version for dark backgrounds
- [ ] `logo-wordmark.svg` - Text only
- [ ] `logo-icon.svg` - Icon only (also export as favicon.png at 32x32 and 180x180)

### Hero (1 file)
- [ ] `hero-background.jpg` - 1920x1080px hero image

### Service Icons (5 files)
- [ ] `service-strategy.svg`
- [ ] `service-automation.svg`
- [ ] `service-marketing.svg`
- [ ] `service-training.svg`
- [ ] `service-data.svg`

### Client Industry Icons (5 files)
- [ ] `client-home-services.svg`
- [ ] `client-food.svg`
- [ ] `client-professional.svg`
- [ ] `client-manufacturing.svg`
- [ ] `client-nonprofit.svg`

### Phase Icons (4 files)
- [ ] `phase-1-foundation.svg`
- [ ] `phase-2-automation.svg`
- [ ] `phase-3-operations.svg`
- [ ] `phase-4-sovereign.svg`

### Section Graphics (4 files)
- [ ] `about-team.jpg` - Team/collaboration photo
- [ ] `cta-consultation.svg` - Free consultation CTA graphic
- [ ] `private-ai.svg` - On-prem/security illustration
- [ ] `pdf-header.png` - One-pager header (if creating PDF)

### Patterns (1 file)
- [ ] `background-pattern.svg` - Tileable background

### Social Media (3 files)
- [ ] `social-profile.png` - 400x400px profile picture
- [ ] `social-cover.png` - 1584x396px cover banner
- [ ] `og-image.jpg` - 1200x630px link preview image

---

## TOTAL: 27 image assets

### Priority Order (for MVP launch):
1. **Logo files** (logo-full, logo-icon/favicon)
2. **Hero image**
3. **OG image** (for link sharing)
4. **Social profile** (if setting up LinkedIn/social)
5. Service icons (can use placeholder icons initially)
6. Everything else (nice to have for polish)

---

## EXPORT TIPS

1. **SVG files:** Best for icons and logos - scalable, small file size
2. **PNG files:** Use for anything with transparency that can't be SVG
3. **JPG/WebP files:** Use for photos and complex images (hero, team photo)
4. **Optimize all images:** Run through ImageOptim, TinyPNG, or Squoosh before adding to repo
5. **Test at actual display size** before finalizing
