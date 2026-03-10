# GIF Background Design

**Date:** 2026-03-11
**Status:** Approved

## Overview

Add a full-viewport animated GIF background to the portfolio, inspired by guns.lol aesthetic. Content stays readable via a dark overlay. Sections get frosted glass treatment.

## Decisions

- **GIF visibility:** Subtle / dimmed (dark overlay ~70% opacity)
- **Content style:** Frosted glass — semi-transparent with backdrop blur
- **Approach:** CSS background-image on root div (no extra components)

## Implementation

### 1. GIF file
User places `bg.gif` at `public/bg.gif`. Served as `/bg.gif`.

### 2. App.jsx — root div
- Remove `bg-white dark:bg-gray-950`
- Add `bg-cover bg-center bg-fixed` + inline `style={{ backgroundImage: "url('/bg.gif')" }}`
- Add fixed overlay div: `<div className="fixed inset-0 z-0 bg-gray-950/70 pointer-events-none" />`
- Wrap main content in `relative z-10`

### 3. Navbar.jsx
- `bg-white/80 dark:bg-gray-950/80` → `bg-black/30 backdrop-blur-md`
- `border-gray-100 dark:border-gray-800` → `border-white/10`

### 4. Projects.jsx — cards
- `bg-gray-50 dark:bg-gray-900` → `bg-white/5 backdrop-blur-sm`
- `border-gray-100 dark:border-gray-800` → `border-white/10`
- Hover: `hover:border-white/20`

### 5. Skills.jsx — pills
- `bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700` → `bg-white/10 border-white/10`

### 6. Experience.jsx — section borders + timeline
- Section border: `border-gray-100 dark:border-gray-800` → `border-white/10`
- Timeline line: `bg-gray-100 dark:bg-gray-800` → `bg-white/10`
- Timeline dot: `bg-gray-400 dark:bg-gray-500` → `bg-white/40`

### 7. Footer.jsx
- Border: `border-gray-100 dark:border-gray-800` → `border-white/10`
