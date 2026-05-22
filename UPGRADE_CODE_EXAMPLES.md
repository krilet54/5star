# 💻 Code Examples - Design Upgrade Integration

## Quick Copy-Paste Examples

### 1️⃣ Enhanced Button Variations

#### Primary CTA Button
```html
<!-- Gold button with glow and shine effect -->
<button class="btn btn-gold">
  Get Started
</button>

<!-- With icon -->
<button class="btn btn-gold">
  <span>Schedule Demo</span>
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path d="M6 2L10 8L6 14" stroke="currentColor" fill="none"/>
  </svg>
</button>
```

#### Secondary Outline Button
```html
<!-- Outline button with gold accent on hover -->
<button class="btn btn-outline">
  Learn More
</button>

<!-- With icon -->
<button class="btn btn-outline">
  <svg width="16" height="16">...</svg>
  Explore Services
</button>
```

#### Loading Button State
```html
<!-- Shows spinner while processing -->
<button class="btn btn-gold is-loading">
  Processing...
</button>
```

---

### 2️⃣ Enhanced Card Examples

#### Premium Service Card
```html
<div class="card service-card">
  <div class="svc-icon">
    <svg><!-- Your icon --></svg>
  </div>
  
  <h3>Service Name</h3>
  <p>Service description text goes here.</p>
  
  <ul>
    <li>Feature one</li>
    <li>Feature two</li>
  </ul>
  
  <div class="svc-arrow">
    Explore →
  </div>
</div>
```

#### Feature Card with Corner Accent
```html
<div class="card">
  <h3>Key Feature</h3>
  <p>Your feature description with enhanced hover effects.</p>
  
  <!-- Corner accent appears automatically on hover -->
</div>
```

#### Hover Card (Process Step)
```html
<div class="hover-card">
  <div class="number">01</div>
  <h3>Step Title</h3>
  <p>Step description here</p>
</div>
```

---

### 3️⃣ Divider Examples

#### Animated Shimmer Divider
```html
<!-- Section separator with animation -->
<div class="divider-animated"></div>
```

#### Section Top/Bottom Dividers
```html
<!-- Top of section -->
<div class="section-divider-top"></div>

<!-- Section content here -->

<!-- Bottom of section -->
<div class="section-divider-bottom"></div>
```

#### Standard Gold Divider (with slideInDown animation)
```html
<div class="gold-divider"></div>
```

---

### 4️⃣ Icon Examples

#### Large Enhanced Icon with Background
```html
<div class="icon-enhanced icon-bg">
  <svg width="40" height="40">
    <!-- Your 40x40 SVG icon -->
  </svg>
</div>
```

#### Dark Theme Icon
```html
<div class="icon-enhanced icon-bg dark">
  <i class="icon-check"></i>
</div>
```

#### Icon with Hover Rotation
```html
<i class="icon-hover" style="font-size: 24px;">
  →
</i>
```

#### Service Card Icon (Auto-Enhanced)
```html
<!-- Already sized at 54x54 with hover effects -->
<div class="svc-icon">
  <svg width="24" height="24">...</svg>
</div>
```

---

### 5️⃣ Text Gradient Examples

#### Gradient Headings
```html
<!-- Gold gradient -->
<h1 class="text-gradient-gold">
  Elevate Your Digital Presence
</h1>

<!-- Warm gradient -->
<h2 class="text-gradient-warm">
  Premium Service Solutions
</h2>

<!-- Partial gradient (wrap specific words) -->
<h2>
  Achieve <span class="text-gradient-gold">Excellence</span> Today
</h2>
```

---

### 6️⃣ Loading & Success States

#### Loading Spinner Variants
```html
<!-- Standard spinner -->
<div class="loader-spinner"></div>

<!-- Small (inline) -->
<div class="loader-spinner sm"></div>

<!-- Large (prominent) -->
<div class="loader-spinner lg"></div>

<!-- Inside button -->
<button class="btn btn-gold is-loading">
  Loading Form...
</button>
```

#### Success Checkmark
```html
<!-- After form submission -->
<div class="checkmark-icon">✓</div>
```

#### Form Input with Focus Glow
```html
<div>
  <label class="form-label">Your Email</label>
  <input class="form-input" type="email" placeholder="you@example.com" />
  <!-- Gold glow appears on focus -->
</div>
```

---

### 7️⃣ Animated Section Backgrounds

#### Section with Floating Elements
```html
<section class="section-bg-animated">
  <!-- Floating geometric elements -->
  <div class="float-element float-element-1"></div>
  <div class="float-element float-element-2"></div>
  <div class="float-element float-element-3"></div>

  <!-- Your section content -->
  <div class="max-w-6xl mx-auto">
    <h2>Your Section Title</h2>
    <p>Your content here...</p>
  </div>
</section>
```

#### Full Section with Animated Background
```html
<section class="section theme-dark section-bg-animated">
  <div class="max-w-6xl mx-auto">
    <!-- Content automatically gets animated background -->
    <div class="card">Content</div>
  </div>
</section>
```

---

### 8️⃣ Interactive Link Examples

#### Link with Underline Animation
```html
<!-- Gold underline grows on hover -->
<a href="#" class="link-lift">
  Learn more about our services
</a>
```

#### Multiple Links in Navigation
```html
<nav>
  <a href="#" class="link-lift">Home</a>
  <a href="#" class="link-lift">Services</a>
  <a href="#" class="link-lift">About</a>
  <a href="#" class="link-lift">Contact</a>
</nav>
```

---

### 9️⃣ Complete Page Section Example

```html
<section class="section theme-light">
  <div class="max-w-6xl mx-auto">
    <!-- Section header with divider -->
    <div class="text-center mb-12">
      <span class="tag">PREMIUM FEATURES</span>
      <h2 class="text-gradient-gold mt-4">
        What Makes Us Different
      </h2>
      <div class="divider-animated mt-8"></div>
    </div>

    <!-- Cards grid with service cards -->
    <div class="grid grid-cols-3 gap-6">
      <div class="card service-card">
        <div class="svc-icon">
          <svg>...</svg>
        </div>
        <h3>Feature One</h3>
        <p>Description here</p>
        <div class="svc-arrow">Learn more →</div>
      </div>

      <div class="card service-card">
        <div class="svc-icon">
          <svg>...</svg>
        </div>
        <h3>Feature Two</h3>
        <p>Description here</p>
        <div class="svc-arrow">Learn more →</div>
      </div>

      <div class="card service-card">
        <div class="svc-icon">
          <svg>...</svg>
        </div>
        <h3>Feature Three</h3>
        <p>Description here</p>
        <div class="svc-arrow">Learn more →</div>
      </div>
    </div>

    <!-- CTA button -->
    <div class="text-center mt-12">
      <button class="btn btn-gold">
        Get Started Today
      </button>
    </div>
  </div>
</section>
```

---

### 🔟 Form Section with Enhancements

```html
<section class="section theme-light-gray">
  <div class="max-w-2xl mx-auto">
    <h2 class="text-gradient-gold text-center mb-8">
      Contact Us Today
    </h2>

    <form class="space-y-6">
      <!-- Text input with focus glow -->
      <div>
        <label class="form-label">Full Name</label>
        <input class="form-input" type="text" required />
      </div>

      <!-- Email input -->
      <div>
        <label class="form-label">Email Address</label>
        <input class="form-input" type="email" required />
      </div>

      <!-- Select with custom styling -->
      <div>
        <label class="form-label">Service Interest</label>
        <select class="form-select">
          <option>Select an option</option>
          <option>Service One</option>
          <option>Service Two</option>
        </select>
      </div>

      <!-- Textarea -->
      <div>
        <label class="form-label">Your Message</label>
        <textarea class="form-textarea" required></textarea>
      </div>

      <!-- Submit button with loading state -->
      <div class="text-center">
        <button type="submit" class="btn btn-gold">
          Send Message
        </button>
      </div>
    </form>

    <!-- Success message (hidden by default) -->
    <div class="hidden text-center mt-8">
      <div class="checkmark-icon inline-block mb-4"></div>
      <p class="text-green-600">Message sent successfully!</p>
    </div>
  </div>
</section>
```

---

### 1️⃣1️⃣ Responsive Grid with Enhanced Cards

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Card 1 -->
  <div class="card">
    <div class="mb-4">
      <div class="icon-enhanced icon-bg">
        <svg>...</svg>
      </div>
    </div>
    <h3>Title One</h3>
    <p>Description with all hover effects included.</p>
    <div class="mt-4">
      <a href="#" class="link-lift">Read more →</a>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="card">
    <div class="mb-4">
      <div class="icon-enhanced icon-bg">
        <svg>...</svg>
      </div>
    </div>
    <h3>Title Two</h3>
    <p>Description with all hover effects included.</p>
    <div class="mt-4">
      <a href="#" class="link-lift">Read more →</a>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="card">
    <div class="mb-4">
      <div class="icon-enhanced icon-bg">
        <svg>...</svg>
      </div>
    </div>
    <h3>Title Three</h3>
    <p>Description with all hover effects included.</p>
    <div class="mt-4">
      <a href="#" class="link-lift">Read more →</a>
    </div>
  </div>
</div>
```

---

## 🎨 CSS Variables Reference

If you need to customize, these variables control the theme:

```css
:root {
  --color-gold: #C9A84C;
  --color-gold-light: #E8D5A3;
  --color-black: #0A0A0A;
  --color-white: #FAFAFA;
}
```

---

## 🚀 Best Practices

### DO ✅
- Use `.btn-gold` for primary CTAs
- Use `.btn-outline` for secondary actions
- Wrap icon content in `.icon-enhanced` for consistency
- Apply `.link-lift` to important navigation links
- Use `.text-gradient-gold` sparingly on key headings
- Add `.section-bg-animated` for hero/feature sections

### DON'T ❌
- Don't mix multiple glow effects on same element
- Don't use text gradients on body text (hard to read)
- Don't add both `.card` and `.hover-card` classes
- Don't nest `.loader-spinner` directly in text
- Don't override animation timing without reason

---

## ✨ Animation Timings Reference

All animations use these timings for consistency:

- **300ms** - Button/Link hover transitions
- **600ms** - Shine animation on buttons
- **1.5s** - Glow pulse on hover
- **3s** - Divider shimmer
- **6-10s** - Float elements animation
- **20s** - Section background animation

---

**That's it! All your design upgrades are ready to use! 🎉**
