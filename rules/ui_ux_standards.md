# UI/UX & Styling Standards (rules/ui_ux_standards.md)

This module defines styling requirements, design tokens, light/dark themes, and animation specifications.

---

## 1. Kid-Friendly Visual Palette
The app uses a warm, cozy palette. Avoid generic primary colors in favor of balanced HSL tones:

### Dark Mode (Default: Starry Sky & Constellations)
* **Background Gradient**: Deep midnight blues/purples `radial-gradient(circle at top left, #0b0f19, #02040a)`
* **Card Backing**: Frosted glassmorphism `rgba(17, 24, 39, 0.6)` with backdrop blur `12px` and a thin semi-transparent white border `rgba(255, 255, 255, 0.08)`.
* **Accent highlights**: Soft gold `#f59e0b` and neon purple `#a78bfa`.
* **Text main**: Off-white `#f3f4f6`.

### Light Mode (Warm Cream & Sunlight)
* **Background Gradient**: Gentle pastel cream-yellows `radial-gradient(circle at top left, #fefae0, #fcf6bd)`
* **Card Backing**: Frosted glassmorphism `rgba(255, 255, 255, 0.85)` with backdrop blur `12px` and border `rgba(0, 0, 0, 0.06)`.
* **Accent highlights**: Warm honey `#d97706` and lavender `#8b5cf6`.
* **Text main**: Charcoal `#1f2937`.

---

## 2. Mascot (Tobi) Animations
Tobi the owl mascot is key to engagement. Apply three animations via CSS keyframes:
1. **Idle Breathing**: Soft vertical scaling and translation (`scaleY(1.02)`, `translateY(-2px)`) at a slow pace (4s cycle).
2. **Hover/Focus Bounce**: High elasticity jumping bounce (`translateY(-12px) scaleY(0.95)` to `scaleY(1.05)`) when hovered or tapped.
3. **Success Celebration**: A side-to-side shake, spin, or confetti jump (`rotate(10deg)` to `rotate(-10deg)`) triggered when a quiz question is answered correctly.

---

## 3. Accessibility & Layout
* **Touch Targets**: Standard buttons must have a minimum clickable size of `48px x 48px`. Rounded corners (`16px` to `24px`) are preferred to give a soft, organic feel.
* **Font Scaling**: Modals and worksheets must support relative font scaling using the dynamic font scale adjuster. The baseline is `100%` scale and can be scaled in increments of `10%`.
* **Translation Toggles**: Header translation controls are exclusively enabled for Filipino, Makabansa, and GMRC. Tapping text with translation properties displays the translation overlay.
