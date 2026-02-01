# QA & Launch Checklist

## Pre-Development Verification

### Environment Setup
- [ ] Node.js installed (v18+)
- [ ] npm dependencies installed (`npm install`)
- [ ] Dev server runs without errors (`npm run dev`)
- [ ] Build completes successfully (`npm run build`)
- [ ] ESLint passes (`npm run lint`)

### Font Files
- [ ] Figtree-VariableFont_wght.ttf in `/public/fonts/`
- [ ] EBGaramond-Italic-VariableFont_wght.ttf in `/public/fonts/`
- [ ] Fonts load correctly in browser

### Environment Variables
- [ ] `.env.local` created (not committed)
- [ ] RESY_RESTAURANT_ID set (when available)
- [ ] Email API key set (when applicable)

---

## Component Testing

### Header Component
- [ ] Logo displays and links to home
- [ ] Navigation links work
- [ ] "Reserve" CTA works
- [ ] "Order Online" CTA works
- [ ] Mobile hamburger menu toggles
- [ ] Mobile nav closes on link click
- [ ] Sticky behavior works on scroll
- [ ] Transparent mode on hero pages

### Footer Component
- [ ] Address displays correctly
- [ ] Hours display correctly
- [ ] Phone link works (`tel:`)
- [ ] Email link works (`mailto:`)
- [ ] WhatsApp link works
- [ ] Social icons link correctly:
  - [ ] Instagram
  - [ ] Facebook
  - [ ] TikTok
- [ ] Google Maps embed loads
- [ ] Copyright year is current

### Button Component
- [ ] Primary variant (Ember) displays
- [ ] Secondary variant (Bronze border) displays
- [ ] Ghost variant displays
- [ ] Hover states work
- [ ] Focus states work (keyboard nav)
- [ ] Disabled state works
- [ ] Link buttons navigate correctly

### Form Components
- [ ] Input fields validate
- [ ] Required fields marked
- [ ] Error messages display
- [ ] Select dropdowns function
- [ ] Date picker works
- [ ] Form submission works
- [ ] Success message displays
- [ ] Error handling works

---

## Page-by-Page Testing

### Home Page (`/`)
- [ ] Hero section loads with background
- [ ] Headline typography correct (EB Garamond)
- [ ] Reservation mini-form works
- [ ] "Book a Table" CTA works
- [ ] "View Menu" CTA → TryOtter
- [ ] "Order WhatsApp" CTA → WhatsApp
- [ ] Signature section displays
- [ ] Feature grid hover effects work
- [ ] Split section displays correctly
- [ ] Tonight's Specials section loads
- [ ] Menu items from data display
- [ ] Reviews section loads
- [ ] Booking block form works
- [ ] Dark/Ivory section rhythm correct

### Menu Page (`/menu`)
- [ ] Page loads without errors
- [ ] Categories from menu.ts display
- [ ] All menu items render
- [ ] Images load from TryOtter CDN
- [ ] Prices display formatted
- [ ] Item descriptions show
- [ ] Each item links to TryOtter
- [ ] "Order Online" CTA works
- [ ] "Order via WhatsApp" CTA works
- [ ] Category navigation works (if implemented)
- [ ] Mobile layout correct

### Drinks Page (`/drinks`)
- [ ] Page loads without errors
- [ ] Drink items from menu.ts display
- [ ] Images load correctly
- [ ] CTAs link correctly
- [ ] Same behavior as menu page

### Reserve Page (`/reserve`)
- [ ] Page loads without errors
- [ ] Resy widget loads (when integrated)
- [ ] Widget allows date selection
- [ ] Widget allows time selection
- [ ] Widget allows party size
- [ ] Booking flow completes
- [ ] Fallback phone number displays
- [ ] Hours information correct
- [ ] Private dining link works

### Order Page (`/order`)
- [ ] Page loads without errors
- [ ] "Order Online" card displays
- [ ] TryOtter link works
- [ ] "Order via WhatsApp" card displays
- [ ] WhatsApp link works
- [ ] Prefilled message appears in WhatsApp
- [ ] Both options clearly explained

### Parties Page (`/parties`)
- [ ] Page loads without errors
- [ ] Information section displays
- [ ] Form displays all fields:
  - [ ] Full Name
  - [ ] Email
  - [ ] Phone
  - [ ] Preferred Date
  - [ ] Time Range
  - [ ] Guest Count
  - [ ] Event Type
  - [ ] Notes
- [ ] Required fields validate
- [ ] Form submits successfully
- [ ] Confirmation message appears
- [ ] Email received in inbox

### About Page (`/about`)
- [ ] Page loads without errors
- [ ] Brand story content displays
- [ ] Images load correctly
- [ ] Split sections display
- [ ] Values section displays

### Events Page (`/events`)
- [ ] Page loads without errors
- [ ] Event cards display
- [ ] Event details correct:
  - [ ] Title
  - [ ] Date
  - [ ] Time
  - [ ] Description
  - [ ] Image (if provided)
- [ ] CTAs work (Reserve/WhatsApp)
- [ ] Empty state if no events

### Specials Page (`/specials`)
- [ ] Page loads without errors
- [ ] Featured items display
- [ ] Images load correctly
- [ ] CTAs link correctly

### Jobs Page (`/jobs`)
- [ ] Page loads without errors
- [ ] Email link works
- [ ] Form works (if implemented)

---

## User Journey Testing

### Journey A: Order Online (TryOtter)
1. [ ] Start from Home page
2. [ ] Click "Order Online" in hero
3. [ ] Verify TryOtter page opens
4. [ ] Menu displays correctly on TryOtter
5. [ ] Can add items to cart

**Also test from:**
- [ ] Header CTA
- [ ] Menu page CTA
- [ ] Order page CTA
- [ ] Individual menu items

### Journey B: Order via WhatsApp
1. [ ] Start from Home page
2. [ ] Click "Order via WhatsApp"
3. [ ] WhatsApp opens (app or web)
4. [ ] Phone number is 718-346-0285
5. [ ] Prefilled message appears:
   > "Hi BONAO, I'd like to place an order..."

**Also test from:**
- [ ] Header CTA (if present)
- [ ] Order page
- [ ] Menu page CTA

### Journey C: Reserve a Table (Resy)
1. [ ] Navigate to `/reserve`
2. [ ] Resy widget loads
3. [ ] Select date
4. [ ] Select time
5. [ ] Select party size
6. [ ] Click through booking flow
7. [ ] Confirmation appears

**Also test:**
- [ ] "Reserve" button in header
- [ ] Reserve CTA on home page

### Journey D: Private Event Inquiry
1. [ ] Navigate to `/parties`
2. [ ] Read event information
3. [ ] Fill out form completely
4. [ ] Submit form
5. [ ] See success confirmation
6. [ ] Check email inbox for submission

---

## Responsive Testing

### Mobile (320px - 767px)
- [ ] Header collapses to hamburger
- [ ] Mobile nav opens/closes
- [ ] Touch targets 48px minimum
- [ ] Text readable without zoom
- [ ] Images scale correctly
- [ ] Forms usable with keyboard
- [ ] No horizontal scroll
- [ ] CTAs thumb-friendly

### Tablet (768px - 1023px)
- [ ] Grid columns adjust
- [ ] Navigation appropriate
- [ ] Images resize correctly
- [ ] Content balanced

### Desktop (1024px+)
- [ ] Full navigation displays
- [ ] Hero sections full impact
- [ ] Multi-column layouts work
- [ ] Hover states visible

---

## Cross-Browser Testing

### Chrome (latest)
- [ ] All pages load
- [ ] Fonts render correctly
- [ ] Animations smooth
- [ ] Forms work

### Safari (latest)
- [ ] All pages load
- [ ] Fonts render correctly
- [ ] Animations smooth
- [ ] Forms work
- [ ] Date inputs work

### Firefox (latest)
- [ ] All pages load
- [ ] Fonts render correctly
- [ ] Animations smooth
- [ ] Forms work

### Edge (latest)
- [ ] All pages load
- [ ] Fonts render correctly
- [ ] Animations smooth
- [ ] Forms work

### Mobile Safari (iOS)
- [ ] Pages load
- [ ] Touch interactions work
- [ ] Forms usable
- [ ] WhatsApp deep links work

### Chrome Mobile (Android)
- [ ] Pages load
- [ ] Touch interactions work
- [ ] Forms usable
- [ ] WhatsApp deep links work

---

## Performance Testing

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1

### Lighthouse Scores (target 90+)
- [ ] Performance: ___
- [ ] Accessibility: ___
- [ ] Best Practices: ___
- [ ] SEO: ___

### Image Optimization
- [ ] All images in WebP format
- [ ] Responsive image sizes used
- [ ] Lazy loading on below-fold images
- [ ] Alt text on all images

---

## SEO Verification

### Meta Tags
- [ ] Title on every page
- [ ] Description on every page
- [ ] Titles under 60 characters
- [ ] Descriptions 150-160 characters

### Open Graph
- [ ] og:title set
- [ ] og:description set
- [ ] og:image set
- [ ] og:url set

### Technical SEO
- [ ] Semantic HTML (h1, h2, nav, main, footer)
- [ ] One H1 per page
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Canonical URLs set

---

## Accessibility Verification

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators visible
- [ ] Skip links work (if implemented)
- [ ] Modal traps focus properly

### Screen Reader
- [ ] Alt text on images
- [ ] Form labels associated
- [ ] Buttons have accessible names
- [ ] Landmarks present (nav, main, footer)

### Visual
- [ ] Color contrast passes WCAG AA
- [ ] Text resizable to 200%
- [ ] No content relies on color alone

---

## Security Checklist

### Forms
- [ ] HTTPS on all pages
- [ ] Form data sent over HTTPS
- [ ] Input validation (client-side)
- [ ] Input sanitization (server-side)
- [ ] CSRF protection (if applicable)

### Environment
- [ ] No secrets in client code
- [ ] .env.local in .gitignore
- [ ] No console.log with sensitive data

---

## Final Launch Checklist

### Pre-Launch
- [ ] Client approved all content
- [ ] Client approved design
- [ ] All user journeys tested
- [ ] Performance acceptable
- [ ] SEO meta tags complete
- [ ] Analytics configured
- [ ] Error tracking configured
- [ ] Domain DNS configured
- [ ] SSL certificate active

### Launch Day
- [ ] Production build successful
- [ ] Deployment successful
- [ ] All pages accessible
- [ ] All CTAs functional
- [ ] Forms receiving submissions
- [ ] Resy widget working
- [ ] TryOtter links working
- [ ] WhatsApp links working
- [ ] Mobile experience verified
- [ ] Client notified of launch

### Post-Launch
- [ ] Monitor error tracking
- [ ] Check analytics data flowing
- [ ] Verify form submissions arriving
- [ ] Test from multiple devices
- [ ] Client confirms satisfaction

---

## Quick Test Script

Run through this 5-minute smoke test after any deployment:

1. **Home** → Hero loads, "Reserve" works, "Order Online" works
2. **Menu** → Items display, images load, TryOtter links work
3. **Reserve** → Resy widget loads
4. **Order** → Both options work (TryOtter + WhatsApp)
5. **Parties** → Form submits successfully
6. **Footer** → Map loads, phone works, socials work
7. **Mobile** → Navigation works, CTAs accessible

---

## Issue Tracking Template

When logging issues:

```
**Page:** [Page name]
**Device:** [Desktop/Mobile] [Browser]
**Expected:** [What should happen]
**Actual:** [What actually happened]
**Steps to reproduce:**
1. ...
2. ...
3. ...
**Screenshot:** [if applicable]
**Severity:** [Critical/High/Medium/Low]
```
