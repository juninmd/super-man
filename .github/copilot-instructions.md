# Copilot Instructions for Super-Man Project

## Project Overview
**Super-Man** is a motivational habit tracker and "2026 Life Reset" app. It's a local-first React+TypeScript application themed around high-performance protocol execution with gamification elements. The app emphasizes personal discipline and transformation.

## Architecture & Key Components

### Component Structure
- **Hero**: Landing section with motivational messaging and scroll-to-action pattern
- **Tracker**: Core habit tracking interface with confetti animations on daily completion
- **Toast**: Notification system (info/success/warning) using fixed positioning
- **Supporting Sections**: Diagnosis, MementoMori, Perspective, Readings, Guide (static content sections)

### Data Flow Pattern
1. **State Management**: Local component state + localStorage (no Redux/Context)
2. **LocalStorage Keys**: All persist with "2026" suffix (e.g., `habitState2026`, `habitStreak2026`)
3. **Daily Reset Logic**: 
   - Date key format: `YYYY-MM-DD` (ISO date string)
   - Reset triggers when stored date ≠ current date
   - Habits array clears but streak persists

### Key Components Details
- **Tracker** (Tracker.tsx): 12 habits, streak counter, progress percentage, confetti fire on 100% completion
- **Toast System**: Direct localStorage reading pattern; uses CSS custom variables for styling
- **useHabits Hook**: Alternative habits state management (appears legacy/unused alongside Tracker's inline logic)

## Tech Stack & Build
- **Build Tool**: Vite (fast refresh, optimized bundling)
- **Package Manager**: pnpm (lockfile: pnpm-lock.yaml)
- **Styling**: Tailwind CSS v4 + PostCSS + custom CSS variables (index.css)
- **UI Icons**: Lucide React
- **Animations**: canvas-confetti library
- **Type Safety**: TypeScript strict mode

### Build Commands
```bash
pnpm install      # Install dependencies
pnpm dev         # Start dev server (Vite hot reload)
pnpm build       # TypeScript check + Vite production build
pnpm preview     # Test production build locally
```

## Styling Conventions
- **Design System**: Dark mode only (pure black #000000 background, surfaces at #09090b-#27272a)
- **Colors**: Primary amber (#f59e0b), text variants (primary #ffffff, secondary #a1a1aa)
- **Responsive**: Mobile-first with md: breakpoints
- **Animation**: Tailwind utilities + custom keyframes (slideIn, bounce, pulse, fade-in patterns)
- **Accessibility**: No explicit a11y patterns observed; component descriptions use semantic HTML

## Developer Workflows

### Adding New Features
1. Create component in `src/components/` (functional + TypeScript)
2. Add section to App.tsx render chain (maintains scroll-friendly layout)
3. For state persistence: use localStorage with "2026" suffix + useEffect initialization
4. For notifications: call `addToast()` callback passed from App

### Modifying Habits
- Edit `HABITS` array in Tracker.tsx (12 items expected)
- Edit `REMINDERS` array for motivational quotes (random selection on button click)
- Reset logic auto-handles array length mismatches

### Styling New Components
- Use Tailwind classes + CSS custom variables (`var(--primary-color)`, etc.)
- Dark mode is default—never add light mode styles unless refactoring design system
- Reference `index.css` for animation examples and scrollbar customization

## Project-Specific Patterns

### Props Pattern
- Simple prop drilling (no Context API)
- Toast notification via `addToast` callback from parent
- Interface definitions above component: `interface Props { addToast: (...) => void }`

### LocalStorage Pattern
Consistent three-step initialization:
```typescript
const todayKey = new Date().toISOString().split('T')[0];
const stored = localStorage.getItem('key2026');
if (storedDate !== todayKey) { /* reset */ } else { /* load */ }
```

### Animation Pattern
- Lucide icons: `<Flame className="animate-pulse" />`
- Confetti fires with `fireConfetti()` on habit completion (3-second animation)
- Progress bars use Tailwind width utilities with smooth transitions

## External Dependencies
- **canvas-confetti**: No configuration; called directly in Tracker.tsx
- **Lucide Icons**: Used for Hero, Tracker, Toast (import specific icons needed)
- **Tailwind CSS v4**: Uses @import "tailwindcss" in index.css (new monolithic approach)

## Deployment
- **Netlify**: netlify.toml present (CI/CD integration ready)
- **Build Output**: `dist/` folder (gitignored, regenerated on deploy)

## Important Notes
- The `useHabits` hook exists but is **not actively used**—Tracker.tsx manages its own state
- Streak counter persists across day resets; habits reset daily
- No error boundaries or fallback UI patterns observed—keep error handling simple
- No environment variables or secrets in codebase

---

**When extending this app**: Prioritize localStorage persistence, maintain dark aesthetic, and use the Toast system for user feedback. Keep component tree shallow and avoid prop drilling beyond 2 levels.
