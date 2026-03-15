# AGENTS.md - Agentic Coding Guidelines

This file provides guidelines for AI agents working in this repository.

## Project Overview

- **Type**: Astro static site with Tailwind CSS v4
- **Purpose**: English learning blog with grammar lessons and interactive content
- **Tech Stack**: Astro 5.x, TypeScript, Tailwind CSS v4, Vite

---

## Build Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Run Astro's built-in type checking |
| `npm run astro sync` | Sync TypeScript types for content collections |

**No separate lint/test commands are configured.** Use `npm run astro check` for type validation.

---

## Code Style Guidelines

### General Conventions

- **TypeScript**: Strict mode enabled via `astro/tsconfigs/strict`
- **File Extensions**: `.astro` for components, `.ts` for logic/scripts
- **Component Structure**: Astro components with frontmatter fence (`---`)
- **No client-side JS**: This is a static site; avoid adding client-side interactivity unless needed

### Astro Components

```astro
---
// Frontmatter: imports, interfaces, logic
import Component from './Component.svelte';

interface Props {
    title: string;
    description?: string;
}

const { title, description = 'Default' } = Astro.props;
---

<!-- Template: HTML with embedded expressions -->
<slot />
```

### Props Interface

- Always define `Props` interface for component props
- Use TypeScript types (string, number, boolean, array types)
- Use optional properties with `?` for optional props
- Provide default values in destructuring assignment

### Imports

- Group imports: external packages first, then relative imports
- Use absolute imports from `astro:` for Astro built-ins
- Group CSS imports in `<style is:global>` blocks

### Template Syntax

- Use single quotes for HTML attributes: `<div class='foo'>`
- Use double quotes for JS expressions in attributes: `className={\`foo-${bar}\`}`
- Self-closing tags for void elements: `<img />`, `<input />`
- Use parentheses for multi-line JSX expressions:
  ```astro
  {items.map((item) => (
      <div>{item.name}</div>
  ))}
  ```

### Tailwind CSS

- Use Tailwind v4 syntax with `@import 'tailwindcss'` in global styles
- Use `@plugin` for Tailwind plugins: `@plugin "@tailwindcss/typography"`
- Use utility classes for all styling (no custom CSS unless necessary)
- Custom colors defined in `tailwind.config.mjs`: primary, secondary, accent, squirtle
- Use `group` and `group-hover` for hover effects
- Use `transition-*` classes for smooth transitions
- Use `backdrop-blur-*` for glassmorphism effects

### TypeScript

- Enable strict type checking; fix all TypeScript errors
- Use interfaces for type definitions (not type aliases for objects)
- Use Zod for content collection schemas in `src/content/config.ts`
- Prefer explicit return types for functions

### Naming Conventions

- **Components**: PascalCase (e.g., `PostCard.astro`, `Quiz.astro`)
- **Props interfaces**: `Props` suffix (e.g., `interface PostCardProps`)
- **Variables/functions**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE
- **Files**: kebab-case for pages, PascalCase for components

### Error Handling

- Let errors propagate for uncaught exceptions
- Use try/catch for async operations that might fail
- No error boundaries needed (static site)

### Content Collections

- Define schemas in `src/content/config.ts` using Zod
- Posts go in `src/content/post/*.md`
- Schema fields: title, img, description, tags

---

## Project Structure

```
/
├── src/
│   ├── components/    # .astro components
│   ├── content/
│   │   ├── config.ts  # Content collection schemas
│   │   └── post/     # Markdown blog posts
│   ├── layouts/      # Page layouts
│   └── pages/        # Route pages (index.astro, post/[id].astro)
├── public/           # Static assets (images, favicon)
├── astro.config.mjs  # Astro configuration
├── tailwind.config.mjs
└── tsconfig.json
```

---

## Common Tasks

### Adding a New Blog Post

1. Create `src/content/post/<slug>.md`
2. Add frontmatter with title, img, description, tags

### Adding a New Component

1. Create `src/components/<Name>.astro`
2. Define `Props` interface in frontmatter
3. Use Tailwind utilities for styling

### Adding a New Page

1. Create `src/pages/<name>.astro` or `src/pages/<name>/index.astro`
2. Import and use a layout component
3. Export page metadata if needed

---

## Important Notes

- **No client-side JavaScript**: Avoid adding `<script>` tags unless absolutely necessary
- **Images**: Put images in `public/` folder and reference with leading slash: `/image.png`
- **View Transitions**: Enabled globally via `<ViewTransitions />` in Layout.astro
- **Lazy Loading**: Add `loading="lazy"` to images below the fold
