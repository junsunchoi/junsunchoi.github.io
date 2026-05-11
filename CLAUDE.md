# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Junsun Choi (CS PhD student), hosted on GitHub Pages at `junsunchoi.github.io`. Plain HTML/CSS with no build step — no Jekyll, no static site generator.

Blog posts are written in Markdown (`.md`) and rendered in-browser using the `zero-md` web component.

## Architecture

- `index.html` — Homepage: nav bar, sidebar (photo/links), bio, featured blog post, projects
- `blog/index.html` — Blog listing page (manually maintained, newest first)
- `blog/post.html` — Blog post viewer; loads `posts/{slug}.md` via `?p=slug` query param
- `blog/posts/*.md` — Blog posts written in Markdown
- `assets/css/style.css` — All styling (shared across all pages)
- `assets/images/` — Profile photo, project thumbnails, blog figures
- `assets/cv.pdf` — CV download

## Adding a new blog post

1. Create `blog/posts/new-slug.md`
2. Add an entry in `blog/index.html` (link to `post.html?p=new-slug`)
3. Optionally update the featured post card in `index.html`

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
