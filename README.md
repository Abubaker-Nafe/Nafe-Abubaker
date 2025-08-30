# Nafe Portfolio (React + Vite + Tailwind)

This is a React port of your single-file HTML portfolio. It keeps your styles, animations, dark mode, EmailJS form, tech ticker, scroll progress bar, and more.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL.

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- EmailJS uses your IDs as provided. For security, move them to environment variables before deploying.
- Tailwind is configured with your color palette and fonts; your custom CSS from the original file lives in `src/index.css`.
- Smooth-scrolling links use a small helper to apply an 80px offset for the fixed navbar.
