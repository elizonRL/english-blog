# English Blog

Astro-based English learning blog with grammar lessons, idioms, and interactive quizzes.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📚 Content

- **Grammar Lessons**: Modal verbs, conditionals, past perfect, and more
- **Idioms**: Common English expressions with examples
- **Interactive Quizzes**: Test your knowledge with built-in quizzes

## 🛠️ Tech Stack

- Astro 5.x
- Tailwind CSS v4
- TypeScript
- Content Collections (Markdown)

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── content/
│   ├── config.ts   # Content collection schemas
│   └── post/       # Grammar lesson posts
├── layouts/        # Page layouts
├── pages/          # Route pages
└── styles/         # Global styles
```

## 🔧 Available Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro check` | Type checking |

## 📝 Adding Content

### New Grammar Lesson

Create a new markdown file in `src/content/post/`:

```markdown
---
title: Your Lesson Title
img: your-image.png
description: Brief description
tags: ["Grammar", "Topic"]
---

# Your Lesson

Content here...
```

### New Idiom

Idioms are defined in `src/content/idiom/` (see content collection schema).

## 📄 License

MIT
