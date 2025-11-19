# Copilot Instructions for AI Agents

## Project Overview
- **Stack:** React + TypeScript + Vite
- **Entry Point:** `src/main.tsx` mounts the root `App` component.
- **Routing:** Managed in `src/Router.tsx` (if present).
- **Styling:** Main styles in `src/App.css`.
- **Utilities:** Shared logic in `src/lib/utils.ts`.

## Build & Development
- **Start Dev Server:** `npm run dev` (Vite, with HMR)
- **Build for Production:** `npm run build`
- **Preview Production Build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint, config in `eslint.config.js`)
- **Type Checking:** `tsc --noEmit` (uses `tsconfig.app.json` and `tsconfig.node.json`)

## Key Patterns & Conventions
- **Component Structure:** Place React components in `src/` or subfolders. Use `.tsx` for components, `.ts` for logic.
- **Assets:** Store images and static files in `src/assets/` or `public/`.
- **Utilities:** Place reusable functions in `src/lib/`.
- **TypeScript:** Prefer explicit types and interfaces. Type-aware linting is recommended (see `README.md`).
- **Routing:** If using `src/Router.tsx`, define all routes there and import in `main.tsx` or `App.tsx`.
- **No custom test setup detected.**

## External Integrations
- **Vite Plugins:** See `vite.config.ts` for plugin usage (e.g., `@vitejs/plugin-react`).
- **ESLint Plugins:** See `eslint.config.js` for recommended plugins and rules.

## Examples
- **Component Import:**
  ```tsx
  import MyComponent from './MyComponent'
  ```
- **Utility Usage:**
  ```ts
  import { myUtil } from './lib/utils'
  ```
- **Asset Import:**
  ```tsx
  import logo from './assets/logo.svg'
  ```

## References
- See `README.md` for ESLint and TypeScript config tips.
- See `vite.config.ts` for build customization.
- See `tsconfig.*.json` for TypeScript project structure.

---
**Keep instructions concise and up-to-date. Update this file if project structure or workflows change.**
