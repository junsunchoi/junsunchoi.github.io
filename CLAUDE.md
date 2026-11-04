# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Junsun Choi (CS PhD student), hosted on GitHub Pages at `junsunchoi.github.io`. Plain HTML/CSS with no build step — no Jekyll, no static site generator.

Blog posts are written in Markdown (`.md`) and rendered in-browser using the `zero-md` web component.

## Architecture

- `index.html` — Homepage: nav bar, sidebar (photo/links), bio, featured blog post, projects, publications
- `blog/index.html` — Blog listing page; renders entries from `assets/js/posts.js`
- `blog/posts/*.html` — Blog posts (Markdown embedded inside a `zero-md` web component)
- `assets/js/posts.js` — Single source of truth for post metadata (slug, date, title, excerpt). Consumed by both `index.html` (featured card = first entry) and `blog/index.html` (full listing).
- `assets/css/style.css` — All styling (shared across all pages)
- `assets/images/` — Profile photo, project thumbnails, blog figures
- `assets/cv.pdf` — CV download

## Adding a new blog post

1. Create `blog/posts/new-slug.html` (copy an existing post and edit the embedded markdown)
2. Add an entry at the TOP of the array in `assets/js/posts.js` — `slug` must match the filename. This single edit drives both the featured card on the homepage and the blog listing.

## Figures with captions in blog posts

Use HTML `<figure>` inside Markdown files:
```html
<figure>
  <img src="../../assets/images/figure.png" alt="Description">
  <figcaption>Figure 1: Caption text.</figcaption>
</figure>
```

## Development

No build step. Open `index.html` directly in a browser or use VS Code Live Server. Preview Markdown posts with VS Code's built-in preview (Cmd+Shift+V). Push to `main` branch to deploy via GitHub Pages.
