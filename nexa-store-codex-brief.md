# Nexa Store — Flagship Ecommerce Demo Rebuild

## 1. Project Goal

Rebuild **Nexa Store** from scratch as Visiotec's flagship ecommerce demo.

Current demo:
- https://nexa-store.visiotec.tn

Primary UX reference:
- https://qurios.tn

The objective is **not to copy Qurios visually**.

Instead, use Qurios as inspiration for:
- Mobile-first ecommerce layout
- Product discovery
- Swipeable sections
- Promotional merchandising
- Smooth mobile animations
- Category exploration
- Cart interactions
- Product browsing rhythm
- Dense but polished commercial presentation

The finished Nexa Store should feel like a **premium ecommerce brand + native mobile shopping app**, while still working perfectly as a modern responsive website.

This project will be shown to prospective Visiotec clients, so the result must look production-ready rather than like a generic template.

---

# 2. Core Positioning

Nexa Store should demonstrate what Visiotec can build for a serious ecommerce client.

The demo should communicate:

- Premium visual design
- Excellent mobile UX
- Fast product discovery
- Strong merchandising
- Smooth animation
- Modern ecommerce interactions
- Professional checkout
- Realistic Tunisian commerce flow
- Responsive behavior across all screen sizes
- Clean technical execution
- Production-quality polish

Avoid the feeling of:
- A generic Shopify clone
- A simple ecommerce starter template
- A desktop site compressed onto mobile
- An animation showcase with excessive effects
- A fake demo with inconsistent data

---

# 3. Target Market and Demo Context

The demo should be adapted to Tunisia.

Use:

- Currency: **TND / DT**
- French as the main storefront language
- Tunisian governorates and realistic delivery information
- Realistic Tunisian phone number formats
- Local ecommerce terminology
- Cash on delivery where appropriate
- Card payment as an available payment option
- Consistent Tunisian pricing

Do not mix:
- Dollars
- Euros
- French delivery claims
- PayPal claims
- Unrelated international checkout information

All demo content must feel internally consistent.

---

# 4. Brand Direction

Keep the name:

**Nexa Store**

The visual direction should be modern, refined, energetic, and premium.

Aim for:

- Contemporary DTC ecommerce
- Editorial product presentation
- Strong typography
- Premium whitespace
- High-quality imagery
- Strong promotional sections
- Smooth interactions
- App-like mobile usability

Do not recreate Qurios branding, colors, typography, imagery, or exact compositions.

Create an original Nexa Store identity.

A technology / lifestyle / accessories positioning is preferred because it allows attractive products, multiple categories, promotions, bundles, variants, and editorial content.

Possible categories:

- Audio
- Smartphones & accessories
- Gaming
- Smart home
- Wearables
- Lifestyle accessories
- Chargers & power
- Workspace

The catalog should feel curated rather than random.

---

# 5. Development Approach

Build the frontend from scratch.

Reuse existing Nexa Store backend, APIs, product data, authentication, or business logic only if they are clean and useful.

Do not preserve old frontend structure merely for convenience.

Architecture should be modular and maintainable.

Prefer reusable components for:

- Product cards
- Product sliders
- Promotional sections
- Category cards
- Buttons
- Inputs
- Modals
- Bottom sheets
- Drawers
- Badges
- Navigation
- Product option selectors
- Search results
- Cart items
- Toasts
- Skeleton states

---

# 6. Mobile-First Requirement

Mobile is the highest-priority viewport.

Design mobile intentionally first and expand upward for tablet and desktop.

The mobile website should feel closer to a native shopping app than a conventional responsive desktop site.

Critical requirements:

- No horizontal page overflow
- No accidental clipped sections
- No tiny desktop controls
- Comfortable touch targets
- Smooth swipe behavior
- Proper spacing around mobile browser UI
- Sticky actions where useful
- Fast perceived performance
- Stable layout while images load

Never solve broken responsive layouts by simply hiding overflow with:

```css
overflow-x: hidden;
```

Fix the actual layout problem.

---

# 7. Global Mobile Navigation

## Header

Create a compact mobile header.

Suggested structure:

- Hamburger/menu
- Centered Nexa logo
- Search icon
- Cart icon with animated quantity badge

The header can become slightly more compact after scrolling.

It should remain visually stable and polished.

## Bottom Navigation

Add a sticky mobile bottom navigation.

Suggested tabs:

1. Accueil
2. Boutique
3. Recherche
4. Favoris
5. Panier

Requirements:

- Clear active state
- Large touch areas
- Safe-area support on modern phones
- Subtle transition when changing state
- Cart quantity indicator
- Do not cover page CTAs

Desktop should use a conventional premium navigation instead.

---

# 8. Homepage Structure

The homepage should behave like a real ecommerce merchandising page.

Recommended section order:

## 8.1 Announcement Bar

Examples:

- Livraison offerte à partir de 199 DT
- Retours faciles
- Offre limitée
- Paiement à la livraison

Can rotate between short messages.

Animation must remain subtle.

---

## 8.2 Main Hero

Build a premium full-width hero carousel.

Mobile requirements:

- Swipeable
- Strong visual imagery
- Short headline
- Supporting copy
- Primary CTA
- Optional secondary CTA
- Pagination indicators
- Smooth slide animation
- Text entrance animation
- Avoid giant hero heights that hide everything below

Desktop can use larger compositions.

Example campaigns:

- Nouveautés
- Summer Tech
- Audio Week
- Gaming Setup
- Smart Essentials

---

## 8.3 Category Explorer

Use a horizontally swipeable mobile category row.

Each category should have:

- Image/icon
- Name
- Tap interaction

Examples:

- Audio
- Gaming
- Mobile
- Maison
- Wearables
- Accessoires

Allow partial visibility of the next card to communicate that the row is swipeable.

---

## 8.4 Featured Products

Create a horizontal product slider on mobile.

Section examples:

- Meilleures ventes
- Nouveautés
- Nos coups de cœur
- Prix doux
- Tendances

Do not always use rigid four-column desktop grids.

Mix sliders and grids strategically.

---

## 8.5 Promotional Banner

Create visually rich promotional blocks between catalog sections.

Example:

**Jusqu'à -30% sur l'audio**

Include:
- Large campaign image
- Headline
- Short message
- CTA

Use different editorial compositions throughout the homepage.

---

## 8.6 Shop by Collection

Show visually distinctive collection cards.

Examples:

- Setup gaming
- Bureau minimal
- Smart home
- Essentials voyage
- Fitness & lifestyle

Cards should feel editorial rather than purely functional.

---

## 8.7 Flash / Limited Offer Section

Include:

- Product or campaign image
- Promotional price
- Old price
- Percentage discount
- Optional countdown
- CTA

If a countdown is used, make it believable and do not fake urgency indefinitely.

---

## 8.8 Brand / Lifestyle Story

Add a short storytelling section that breaks the catalog rhythm.

Possible theme:

**La tech pensée pour votre quotidien.**

Use a strong image and concise copy.

---

## 8.9 Customer Reviews

Create modern testimonial cards.

Include:

- Customer name
- Rating
- Short quote
- Purchased product where relevant
- Optional customer image

Swipeable on mobile.

---

## 8.10 Benefits

Examples:

- Livraison rapide
- Paiement sécurisé
- Retours simplifiés
- Support client
- Garantie

Use simple icons and concise copy.

---

## 8.11 Editorial / Blog

Show 3–4 articles.

Examples:

- Comment choisir ses écouteurs ?
- 5 accessoires pour améliorer votre bureau
- Guide pour choisir une montre connectée
- Les indispensables pour voyager léger

This demonstrates SEO/content capabilities.

---

## 8.12 Newsletter

Premium newsletter block.

Keep it visually strong and simple.

---

## 8.13 Footer

Include realistic sections:

- Boutique
- Service client
- À propos
- Livraison
- Retours
- FAQ
- Contact
- Conditions
- Confidentialité
- Réseaux sociaux

---

# 9. Product Card Component

Product cards are one of the most important components.

Each card can support:

- Product image
- Secondary hover/tap image
- Brand/category
- Product title
- Current price
- Old price
- Discount badge
- New badge
- Bestseller badge
- Rating
- Wishlist button
- Quick add
- Color/variant indication

Mobile cards must remain easy to scan.

Do not overcrowd every card with every possible badge.

Use badges only where appropriate.

---

# 10. Product Card Interaction

Desktop:

- Subtle image zoom
- Alternate image on hover where available
- Quick actions fade in
- Smooth hover state

Mobile:

- No hover-dependent functionality
- Wishlist always reachable
- Quick add reachable
- Optional swipe image gallery
- Tap product to open PDP

Animations should use transform/opacity where possible for performance.

---

# 11. Product Listing / Collection Page

Build a premium catalog page.

Include:

- Collection hero/header
- Description
- Product count
- Sorting
- Filters
- Active filter chips
- Responsive product grid

## Mobile Filters

Do not show desktop sidebars.

Open filters in a slide-up bottom sheet.

Possible filters:

- Category
- Price
- Brand
- Availability
- Rating
- Color
- Features

Requirements:

- Clear selected state
- Reset filters
- Apply filters
- Result count
- Smooth opening/closing
- Scrollable content
- Body scroll lock while open

Sorting can use a smaller bottom sheet.

---

# 12. Search Experience

Search should be a premium feature.

When search opens:

- Focus input automatically
- Show recent searches
- Show trending searches
- Show popular categories

As user types:

- Product autocomplete
- Category suggestions
- Suggested terms
- Product thumbnails
- Prices

Include:

- Loading skeleton
- Empty state
- No-results suggestions
- Clear input action

Mobile search can use a full-screen overlay or dedicated view.

---

# 13. Product Detail Page

The PDP should look polished enough to sell the demo by itself.

## Product Gallery

Mobile:

- Horizontal swipe gallery
- Pagination indicator
- Optional image zoom
- Video support if useful

Desktop:

- Large image layout
- Thumbnail navigation or editorial grid

---

## Product Information

Include:

- Brand
- Title
- Rating
- Review count
- Price
- Old price
- Discount
- Installment information if appropriate
- Stock status
- Variants
- Color options
- Quantity
- Delivery estimate
- Main CTA
- Wishlist

---

## Sticky Mobile CTA

When the normal buy section scrolls away, show a sticky mobile purchase bar.

Example:

- Price
- Ajouter au panier

Do not cover the bottom navigation.

Coordinate both sticky systems correctly.

---

## Product Content

Include:

- Description
- Features
- Specifications
- Delivery
- Warranty
- FAQ
- Reviews

Use accordions on mobile where appropriate.

---

## Related Products

Show:

- Produits similaires
- Complétez votre setup
- Vous aimerez aussi

Prefer swipeable mobile rails.

---

# 14. Quick View

Create a product quick-view system.

Desktop:
- Modal or side panel

Mobile:
- Bottom sheet

Include:

- Product image
- Title
- Price
- Variants
- Quantity
- Add to cart
- Link to full product page

Opening should feel fast and fluid.

---

# 15. Cart Interaction

When a product is added:

- Animate the add action
- Update cart count instantly
- Show clear confirmation
- Optionally open a cart drawer

Desktop cart:
- Side drawer

Mobile cart:
- Full-height or near-full-height bottom sheet / drawer

Include:

- Product
- Variant
- Quantity controls
- Remove
- Subtotal
- Delivery message
- Checkout CTA

Use optimistic UI where safe.

---

# 16. Wishlist

Wishlist should work as a real feature.

Requirements:

- Toggle from product cards
- Toggle from product page
- Animated active state
- Dedicated wishlist page
- Empty state
- Add wishlist item to cart

If login is required, handle guest state gracefully.

---

# 17. Checkout

Create a believable Tunisian checkout.

Steps can be:

1. Informations
2. Livraison
3. Paiement
4. Confirmation

Fields:

- Nom
- Prénom
- Téléphone
- Email
- Adresse
- Gouvernorat
- Ville
- Code postal
- Notes

Delivery:

- Standard
- Express if supported
- Store pickup only if the demo includes it

Payment:

- Paiement à la livraison
- Carte bancaire

Do not claim payment providers that are not actually integrated.

Display:

- Order summary
- Products
- Discount
- Delivery
- Total
- Promo code

Mobile checkout should remain extremely clean.

---

# 18. Account Area

Create a polished account experience.

Pages:

- Connexion
- Inscription
- Mot de passe oublié
- Tableau de bord
- Mes commandes
- Détails commande
- Mes adresses
- Mes favoris
- Mes informations

Use realistic empty and populated states.

---

# 19. Animations and Motion

Animation quality is a major part of this rebuild.

The goal is **fluidity**, not excessive motion.

Use animation strategically.

## Preferred Motion

- Hero slide transitions
- Section reveal
- Product-card image transitions
- Bottom sheet spring-like movement
- Drawer entrance
- Cart badge feedback
- Wishlist microinteraction
- Button press state
- Accordion animation
- Tab transitions
- Filter chip feedback
- Skeleton loading
- Toast notifications
- Page/route transitions where appropriate
- Image fade-in after loading

---

## Scroll Animations

Use subtle reveal animations such as:

- Fade + slight translate
- Staggered cards
- Image mask reveal where tasteful

Avoid:

- Huge parallax effects everywhere
- Long entrance delays
- Scroll hijacking
- Animation that blocks interaction
- Elements constantly moving

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Reduce or disable nonessential animation for those users.

---

# 20. Mobile Gesture Behavior

Where technically appropriate, support:

- Swipe hero
- Swipe product rails
- Swipe image galleries
- Drag bottom sheets
- Swipe category rows

Interactions must remain compatible with normal vertical page scrolling.

Do not create gesture conflicts.

---

# 21. Loading States

Do not leave blank areas while waiting.

Create skeletons for:

- Product grids
- Product cards
- Search
- Cart
- Account orders
- PDP
- Category sections

Avoid aggressive spinners where a skeleton provides better context.

---

# 22. Empty States

Design polished empty states for:

- Cart
- Wishlist
- Search
- Orders
- Filter results

Provide clear actions.

Example:

**Votre panier est vide**

CTA:

**Découvrir nos produits**

---

# 23. Error Handling

Never expose technical errors to visitors.

Do not display:

- API errors
- Database errors
- Stack traces
- Server messages
- Raw exception text
- Internal endpoints

Show only client-friendly messages.

Example:

**Une erreur est survenue. Veuillez réessayer dans quelques instants.**

Log technical details privately for development/debugging.

---

# 24. Responsive Breakpoints

Test intentionally at:

- 320px
- 360px
- 375px
- 390px
- 414px
- 430px
- 768px
- 1024px
- 1280px
- 1440px+

Especially test mobile widths manually.

Ensure:

- No horizontal scrolling
- Text does not overflow
- Buttons remain usable
- Drawers fit
- Bottom sheets fit
- Sticky UI does not overlap
- Product grids remain balanced
- Images maintain correct aspect ratio

---

# 25. Performance

The website must feel extremely fast.

Prioritize:

- Optimized images
- Responsive image sizes
- Modern image formats
- Lazy loading below the fold
- Preloading critical hero assets where useful
- Code splitting
- Minimal client-side JavaScript where possible
- Efficient animation
- Avoiding layout shifts
- Caching
- Efficient API requests

Avoid adding heavy animation libraries unless there is clear value.

Prefer CSS and lightweight animation solutions for simple interactions.

---

# 26. Accessibility

Include:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper labels
- Alt text
- Accessible dialogs
- Focus trapping in modals/drawers
- Escape to close where appropriate
- Sufficient contrast
- Reduced-motion support

Bottom sheets and drawers must be accessible, not only visually animated.

---

# 27. SEO

The demo should demonstrate strong ecommerce SEO practices.

Implement:

- Unique page titles
- Meta descriptions
- Canonicals
- Open Graph metadata
- Product structured data
- Breadcrumb structured data
- Organization structured data
- Clean URLs
- Indexable categories
- Semantic headings
- Optimized internal linking
- Product alt text
- Blog/article SEO

Avoid keyword stuffing.

---

# 28. GEO / AI Search Readiness

Structure important company and product information clearly so search engines and AI assistants can understand it.

Use:

- Clear semantic content
- Descriptive product data
- Structured FAQs
- Product specs
- Brand/category relationships
- Consistent business information
- Structured data where appropriate

---

# 29. Demo Product Data

Create enough realistic demo data that the website feels alive.

Target:

- 30–50 products
- 6–8 categories
- Multiple collections
- Multiple campaigns
- Sale products
- New products
- Bestseller products
- Products with variants
- Products with colors
- Products with different stock states
- Reviews
- Related products

Do not use obvious placeholder names like:

- Product 1
- Test Product
- Lorem Ipsum Product

Use convincing fictional commercial product names.

---

# 30. Product Imagery

Use visually consistent, high-quality product images.

The demo should have a coherent art direction.

Avoid:

- Random image styles
- Pixelated images
- Broken images
- Watermarks
- Inconsistent backgrounds

Use appropriate aspect ratios and ensure images remain crisp on retina/mobile screens.

---

# 31. Promotional Data

Create several realistic campaigns.

Examples:

### Audio Week
Jusqu'à -30% sur une sélection audio.

### Gaming Essentials
Tout pour améliorer votre setup.

### Smart Everyday
La technologie utile au quotidien.

### Nouveautés
Découvrez les derniers produits Nexa.

These campaigns should populate hero slides and promotional homepage sections.

---

# 32. Reviews

Populate products with realistic reviews.

Avoid fake-looking repetition.

Mix:

- Ratings
- Review lengths
- Customer names
- Product references

Do not write hundreds of reviews.

Enough data to demonstrate UI is sufficient.

---

# 33. Desktop Experience

Although mobile is the priority, desktop must still feel premium.

Desktop should not simply stretch mobile.

Use:

- Larger editorial grids
- Richer hero compositions
- Wider product rails
- Hover states
- More visible navigation
- Refined whitespace
- Large lifestyle sections

Keep visual consistency between platforms.

---

# 34. Tablet

Do not ignore tablet layouts.

Test:

- Portrait tablet
- Landscape tablet

Avoid awkward transitions between mobile and desktop structures.

---

# 35. Admin / Demo Management

If an admin already exists and is reusable, adapt it as needed.

If the project requires an admin demo, it should allow management of:

- Products
- Categories
- Collections
- Orders
- Customers
- Promotions
- Hero banners
- Promo codes
- Stock
- Reviews/content if appropriate

The storefront is higher priority than admin aesthetics.

---

# 36. Analytics-Friendly Architecture

Prepare clean event hooks for actions such as:

- Product viewed
- Product added to cart
- Product removed
- Checkout started
- Purchase completed
- Search
- Wishlist
- Promo clicked

Do not hardcode a specific analytics vendor unless one already exists.

---

# 37. UX Details

Pay attention to small details.

Examples:

- Disable impossible quantity decreases
- Show stock feedback
- Prevent duplicate add-to-cart requests
- Preserve filters when appropriate
- Preserve cart between visits
- Handle unavailable variants
- Prevent layout jump when badges appear
- Keep mobile CTAs within thumb reach
- Use clear validation messages
- Keep prices aligned consistently
- Animate state changes rather than full page reloads where possible

---

# 38. Content Language

Storefront language:

**French**

All visible customer-facing demo copy should be polished French.

Avoid untranslated English UI unless it is part of a product name.

Examples:

Use:
- Ajouter au panier
- Acheter maintenant
- Voir le produit
- Découvrir
- Trier par
- Filtrer
- En stock
- Rupture de stock
- Livraison

Do not mix UI languages.

---

# 39. Visual Quality Bar

Every important page should be presentation-ready.

Before considering a page complete, check:

- Typography
- Spacing
- Hierarchy
- Image quality
- Alignment
- States
- Hover
- Mobile interaction
- Empty state
- Loading state
- Error state
- Responsiveness

The design should remain cohesive across all pages.

---

# 40. Pages to Build

At minimum:

- `/`
- `/boutique`
- `/categorie/[slug]`
- `/collection/[slug]`
- `/produit/[slug]`
- `/recherche`
- `/favoris`
- `/panier`
- `/checkout`
- `/connexion`
- `/inscription`
- `/compte`
- `/compte/commandes`
- `/compte/commandes/[id]`
- `/compte/adresses`
- `/a-propos`
- `/contact`
- `/faq`
- `/livraison`
- `/retours`
- `/blog`
- `/blog/[slug]`

Adapt paths to the existing stack/router if needed.

---

# 41. Suggested Component Inventory

Create a clean reusable component system.

Possible components:

- `AnnouncementBar`
- `Header`
- `MobileHeader`
- `DesktopNav`
- `MobileBottomNav`
- `HeroCarousel`
- `SectionHeader`
- `CategoryRail`
- `CategoryCard`
- `ProductRail`
- `ProductGrid`
- `ProductCard`
- `ProductBadge`
- `WishlistButton`
- `QuickAddButton`
- `PromoBanner`
- `EditorialCollectionCard`
- `ReviewsCarousel`
- `BenefitsSection`
- `Newsletter`
- `Footer`
- `SearchOverlay`
- `SearchAutocomplete`
- `FilterBottomSheet`
- `SortBottomSheet`
- `QuickView`
- `CartDrawer`
- `MobileCartSheet`
- `Toast`
- `ProductGallery`
- `VariantSelector`
- `QuantitySelector`
- `StickyAddToCart`
- `Accordion`
- `Skeleton`
- `EmptyState`
- `ErrorState`

Names can vary according to the stack.

---

# 42. Code Quality

Requirements:

- Clean component boundaries
- No huge monolithic pages
- Avoid duplicated UI
- Typed data where supported
- Clear folder structure
- Reusable hooks/utilities
- Sensible state management
- Remove unused code
- Remove obsolete old frontend code after migration
- No console errors
- No hydration errors
- No broken routes

Do not over-engineer.

---

# 43. Browser QA

Test modern:

- Chrome
- Safari
- Firefox
- Edge

Pay special attention to:

- iOS Safari
- Android Chrome

Check:

- Sticky navigation
- 100vh behavior
- Bottom sheets
- Safe areas
- Input zoom
- Keyboard opening
- Scroll locking
- Image carousels
- Swipe interactions

---

# 44. Animation Performance QA

Animations must remain smooth on normal mobile hardware.

Avoid:

- Large blur animations
- Constant box-shadow animation
- Layout-triggering properties
- Massive parallax calculations
- Multiple simultaneous heavy effects

Prefer:

- `transform`
- `opacity`

Use `will-change` sparingly.

---

# 45. No Fake Functionality

If something appears clickable, it should work.

Do not ship:

- Fake search
- Fake filters
- Fake favorites
- Dead buttons
- Checkout buttons that do nothing
- Empty account pages without intentional empty states

If a feature is intentionally demo-only, make its behavior coherent.

---

# 46. Implementation Priority

Build in this order:

## Phase 1 — Foundation

- Project structure
- Design tokens
- Typography
- Header
- Bottom nav
- Buttons
- Product card
- Layout system
- Demo data model

## Phase 2 — Homepage

- Hero
- Categories
- Product rails
- Promo blocks
- Collections
- Reviews
- Benefits
- Blog
- Footer

## Phase 3 — Shopping

- Catalog
- Filters
- Sorting
- Search
- Product page
- Quick view
- Wishlist

## Phase 4 — Cart & Checkout

- Cart drawer/sheet
- Cart page
- Checkout
- Confirmation

## Phase 5 — Account

- Auth
- Account dashboard
- Orders
- Addresses

## Phase 6 — Polish

- Animations
- Loading states
- Empty states
- Errors
- Accessibility
- SEO
- Performance
- Cross-browser QA

---

# 47. Acceptance Criteria

The project is not complete until all of the following are true.

## Mobile

- Excellent UX at 360–430px
- No horizontal scrolling
- Hero is swipeable
- Category rails are swipeable
- Product rails are swipeable
- Bottom navigation works
- Filters open as a bottom sheet
- Product gallery swipes smoothly
- Cart interaction is fluid
- Sticky product CTA works without overlap
- Search feels app-like

## Visual

- Looks like a real premium ecommerce brand
- No generic starter-template feeling
- Consistent spacing
- Consistent typography
- High-quality imagery
- Strong merchandising
- Original Nexa identity

## Functional

- Search works
- Filters work
- Sorting works
- Cart works
- Wishlist works
- Product variants work
- Checkout flow works
- Account routes work
- No dead buttons

## Technical

- No console errors
- No technical errors exposed to visitors
- No broken routes
- No major layout shifts
- No hydration problems
- Optimized assets
- Responsive images
- Accessible dialogs/drawers
- Reduced-motion support

## Demo

- Tunisian currency/data is consistent
- French UI is consistent
- Product catalog looks realistic
- Demo is convincing in a live client presentation

---

# 48. Important Final Instruction

Do not treat this as a basic redesign.

The goal is to create **the ecommerce demo Visiotec can confidently open in front of a prospect and use as proof of capability**.

The strongest differentiator should be the mobile experience.

The reference point is the commercial fluidity and mobile merchandising quality seen on Qurios, but Nexa Store must have its own design identity and a more premium, technically polished execution.

Prioritize:

1. Mobile UX
2. Visual polish
3. Product discovery
4. Smooth interactions
5. Real ecommerce functionality
6. Performance
7. Responsive quality

When choosing between adding more features and polishing the primary buying journey, always polish the primary buying journey first.

---

# 49. Codex Working Instructions

Before changing code:

1. Inspect the current repository.
2. Identify the framework, routing, styling system, data layer, backend/API, auth, cart, and checkout implementation.
3. Identify what existing backend/business logic can safely be reused.
4. Identify frontend code that should be replaced.
5. Preserve working infrastructure where useful, but do not preserve weak frontend architecture.

Then implement the rebuild incrementally.

After each major section:

1. Run lint/type checks if available.
2. Build the application.
3. Fix errors before continuing.
4. Test the relevant responsive views.
5. Verify that no existing backend behavior was unintentionally broken.

Do not stop after producing mockups or static sections.

Implement the actual working ecommerce demo.
