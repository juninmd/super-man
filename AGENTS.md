# AGENTS.md - super-man

## Tech Stack
- **Framework:** React 19
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Lucide React
- **Deploy:** Docker + ArgoCD + K3s

## Project Structure
```
├── src/             # React components
├── public/          # Static assets
├── dist/            # Build output
├── index.html       # HTML entry
├── vite.config.ts   # Vite config
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── Dockerfile       # Nginx container
├── netlify.toml
└── tsconfig*.json
```

## Commands
```bash
pnpm dev          # Vite dev server
pnpm build        # Production build
pnpm preview      # Preview build
```

## URL
Production: https://super-man.antonio-code.duckdns.org
