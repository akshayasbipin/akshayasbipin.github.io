# Akshaya's Portfolio (React + Vite)

A whimsical, hand-drawn-notebook style portfolio, rebuilt in React
from the original HTML/CSS version — and set up so you can learn
React by extending it.

## How to run it

You need [Node.js](https://nodejs.org/) installed (any recent LTS version).

```bash
npm install     # downloads React, Vite, etc.
npm run dev     # starts a local dev server, usually at http://localhost:5173
```

Open the URL it prints in your browser. Edit any file in `src/` and
the page updates instantly (this is called "hot reload").

When you're happy with it:

```bash
npm run build   # creates a /dist folder with the final site
```

You can deploy the `dist` folder to GitHub Pages, Netlify, Vercel,
or any static host.

## Project structure

```
index.html              <- the single HTML page React mounts into
src/
  main.jsx               <- starts React, renders <App />
  App.jsx                <- stacks all the sections together
  index.css               <- global theme: colors, fonts
  data.js                  <- ALL your text content lives here
  components/
    Navbar.jsx / .css
    Hero.jsx / .css         <- the "Home" intro section
    Education.jsx / .css
    Experience.jsx / .css
    Skills.jsx / .css
    Projects.jsx / .css
    ProjectCard.jsx          <- one project card, used by Projects
    Links.jsx / .css         <- footer with social links
public/
  images/                  <- put your photos here (referenced as /images/...)
```

## How to add a new project (the main thing you'll do often)

Open `src/data.js`, find the `projects` array near the bottom, and
copy one block, like:

```js
{
  title: 'My Cool New Project',
  blurb: 'One or two sentences about what it does.',
  link: 'https://github.com/you/your-repo',
  tags: ['Python', 'Flask'],
  details: [
    'Bullet point about how you built it',
    'Another interesting detail',
  ],
},
```

Paste it inside the `projects = [ ... ]` array (don't forget the
comma between objects) and save. A new card appears on the page —
no other file needs to change. This is the whole point of
separating *data* from *components* in React.

## Adding your own photo

Put an image file in `public/images/`, e.g. `public/images/me.jpg`,
then in `src/components/Hero.jsx` change:

```jsx
<img src="/images/image.jpg" alt="Akshaya" />
```

to point at your file.

## Things to try next, to keep learning React

1. **Add a "skills" filter**: in `Projects.jsx`, add a `useState` for
   a selected tag, and only show projects whose `tags` include it.
2. **Dark mode toggle**: add a button in `Navbar.jsx` that toggles a
   class on `<body>`, and write a `.dark` theme in `index.css`.
3. **Animate on scroll**: look up the `IntersectionObserver` API (or
   a tiny library like `framer-motion`) to fade sections in as you
   scroll to them.
4. **Contact form**: a new `Contact.jsx` component with controlled
   inputs (`useState` for each field) is a classic next step.

## Why this looks different from a typical "AI portfolio template"

- No big gradient hero banner or glowing neon buttons.
- Hand-drawn dashed borders, slightly rotated cards, and a
  "washi tape" detail on project cards instead of perfectly
  aligned grids.
- A warm cream paper background and a handwriting-style font
  (Caveat) for headings, instead of a cold dark theme.
- Quirky one-liners instead of corporate buzzwords.

Feel free to tune `--terracotta`, `--sage`, `--mustard`, `--denim`
in `src/index.css` to match your own taste — that's the fastest way
to make it feel even more "you".
