# Website Changes Requested from CEO Discussion

This document tracks changes requested from the executive discussion about claude.aireadypdx.com.

**Reference materials:**
- Preferred hero messaging example: https://gemini-only.aireadypdx.com/
- One-pager template: `claude-AISupportPDX-OnePager.pdf` (update branding to "AI Ready PDX")
- Image generation: `generate-images.mjs` with Gemini 3 Imagen
- Existing icons in `public/images/icons/`

---

## FINAL PLAN

### Page Structure (Top to Bottom)

1. **Navigation** - Add persistent CTA button
2. **Hero** - Urgent messaging, Gemini-only style
3. **Why Us** - Three pillars (30+ years, Local PDX, Privacy-First)
4. **Services & Industries Table** - NEW combined section replacing "Who We Help" + "What We Do"
5. **Confidential AI** - Moved up, simplified messaging
6. **Pricing** - 4 tiers with new structure
7. **Approach** - Simplified, moved lower, Assess → Implement → Train pattern
8. **About** - Keep, emphasize tech + business experience
9. **FAQ** - Keep collapsible format
10. **Contact** - Keep form
11. **Footer** - Update branding

---

## SECTION DETAILS

### 1. Hero Section

**Headline:** "Is Your Business Ready for 2026: The Year of AI?"

**Subheadline:** "AI has moved from bleeding edge to business essential. AI Ready PDX, powered by Vital Enterprises' 30+ years of technology leadership, helps Portland-area businesses adopt AI confidently, practically, and securely."

**CTA:** "Book Your AI Readiness Session — ~~$500~~ $50 (First 100 Clients)"

**Three Pillars (with icons):**
- 30+ Years Tech Leadership
- Local Portland Presence
- Privacy-First Options

---

### 2. Services & Industries Table (NEW - Replaces "Who We Help" + "What We Do")

**Columns (Industry Verticals):**
1. Field Services (HVAC, plumbing, landscaping)
2. Retail & Hospitality (coffee, restaurants, shops)
3. Professional Practices (dental, legal, accounting)
4. Civic & Education (schools, churches, police/fire)
5. Community Organizations (nonprofits)
6. Manufacturers & Distributors (inventory, private AI focus)

**Rows (Service Offerings - Escalating Complexity):**

**Marketing & Sales:**
- Web presence (website, SEO, AEO/GEO)
- Content & collateral
- Outreach (email, voice, social media)

**Operations:**
- Scheduling & intake
- Inventory & supply chain
- Process automation

**Management:**
- Dashboards & analytics
- Reporting & insights

**Confidential AI:**
- On-premise deployment
- Private cloud inference

**Checkmark Logic:**
- Most boxes checked across all verticals
- Some intentionally blank to make it interesting:
  - Inventory/supply chain: blank for Professional Practices, Civic & Education
  - Social media outreach: blank for Manufacturers & Distributors
  - Confidential AI: checked ONLY for Professional Practices, Manufacturers & Distributors, and any data-sensitive orgs

---

### 3. Confidential AI Section (Moved Up, Below Table)

**Headline:** "Need to Keep Your AI Off the Public Internet?"

**Content:**
> "For organizations with sensitive data—legal, medical, financial, or proprietary—we offer on-premise and air-gapped solutions where your data never leaves your building. Ask us about Confidential AI options."

**NO specific hardware mentions** (remove NVIDIA DGX references)

**Link:** "Learn more about Confidential AI" (can link to white paper later)

---

### 4. Pricing Section - 4 Tiers

#### Tier 1: AI Readiness Session
- **Price:** ~~$500~~ **$50** (90% off for first 100 clients)
- 60-90 minute consultation
- Custom recommendations
- AI Opportunities Snapshot document

#### Tier 2: AI Training & Quick Wins
- **Price:** $1,500/quarter
- 90 minutes training (1 session or 2x 45-min)
- Website & web presence review
- One "quick win" deliverable per quarter (examples: chatbot, content calendar, email sequence)
- Email support between sessions

#### Tier 3: AI Deep Dive — **MOST POPULAR**
- **Price:** $2,500 (one-time)
- 2 hours: Deep dive into your business
- 2 hours: Recommendations presentation
- Written roadmap/deliverable
- Includes 90-minute training session
- Output can be executed by you OR lead to project engagement

#### Tier 4: Execution & Projects
- **Price:** Custom (variable based on scope)
- **Execution examples:**
  - "We'll run your marketing for you" - content creation, posting, analytics
  - Custom software and AI solutions
  - Ongoing managed services
- **Project examples:**
  - AI Kickstart Sprint (roadmap + first pilot)
  - Automation & workflow builds
  - On-prem AI deployment

**Visual:** All pricing boxes same size

---

### 5. Approach Section (Moved Lower, Simplified)

**Structure:** Assess → Implement → Train (mirror one-pager)

**Assess:**
- AI Readiness Assessment
- Website AI Audit (SEO, AEO, GEO)
- Opportunity identification
- Technology stack review
- Privacy & security evaluation

**Implement:**
- Chatbots & voice agents
- Content automation tools
- Cold outreach systems
- Custom AI applications
- Secure on-prem AI

**Train:**
- Executive AI briefings
- Team training sessions
- Ongoing strategy support
- Quarterly State of AI updates

---

### 6. Icons & Visual Elements

**Use existing generated icons from `public/images/icons/`:**
- Service icons for the table rows
- Client/industry icons for table columns
- Phase icons can be repurposed for Assess/Implement/Train

**Generate new icons as needed for:**
- Table row categories
- Civic & Education vertical
- Any missing service categories

**Goal:** Break up text, look professional, don't overdo it

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Content & Structure
- [ ] Update hero section with urgent messaging
- [ ] Add three pillars with icons below hero
- [ ] Build services/industries table component
- [ ] Move and simplify Confidential AI section
- [ ] Restructure pricing to 4 tiers
- [ ] Simplify and move Approach section
- [ ] Update About section messaging
- [ ] Remove or consolidate redundant sections

### Phase 2: Visual Polish
- [ ] Integrate existing icons throughout
- [ ] Generate any missing icons
- [ ] Make pricing boxes uniform size
- [ ] Add persistent CTA in nav
- [ ] Test responsive design

### Phase 3: Branding
- [ ] Ensure all text says "AI Ready PDX" (not AISupportPDX)
- [ ] Update email to hello@aireadypdx.com
- [ ] Logo integration (use generated logos)

---

## NOTES

- First email campaign launching soon - website needs to be ready
- One-pager, email template, PowerPoint will follow website (same theme/images)
- Company entity and bank account being set up separately
- Recording consultations and using AI for summaries (like this transcript)
