# Conventions

Rules for this repository. They apply to every change, whether written by hand or with an AI assistant. When the course (`crossplatformdevelopment`) has a convention, we follow it unless ours is clearly better; deviations are listed at the bottom.

## Git workflow

- **Never push to `main`.** All changes reach `main` through a pull request.
- Start every step from a fresh `main`:
  `git switch main && git pull --ff-only && git switch -c <branch>`
- Branch names: `<type>/<short-kebab-name>`, with the same types as commits: `feature/`, `fix/`, `refactor/`, `chore/`, `docs/`.
- **One step per branch and PR.** A step touches a few files (aim for 5 or fewer) and does one thing. A refactor and a feature never share a PR.
- Commit messages: `<type>: <what changed>`, imperative, lowercase, no full stop, 72 characters or fewer.
  - Types: `feat`, `fix`, `refactor`, `chore`, `docs`, `style` (formatting only), `test`.
  - Example: `feat: add light and dark theme with useTheme hook`
- Commit after every course lab task (the course counts commit history toward the grade).
- Merge with **Rebase and merge** so the per-task commits stay on `main` and history stays linear. Do not squash.
- Delete the branch after merging.
- PR description has three parts: **What** changed, **Why**, **How to test** (exact steps and the result that confirms it works).
- Push at least once a week; Week 7 and onwards follow the course schedule in the README.

## Definition of done (before opening a PR)

- [ ] `npx tsc --noEmit` passes.
- [ ] `npx expo lint` passes.
- [ ] The change was tested by hand, with the steps written in the PR.
- [ ] No leftover `console.log`, test flags (such as `fail: true`), temporary data or commented-out code.
- [ ] README feature checklist updated if a feature changed state.
- [ ] For UI changes: checked in light mode, dark mode, largest text size, a narrow (about 360 px) and a wide (over 900 px) window, and that the last list item clears the system bar.

## Project structure

```
src/app/          routes only (Expo Router); every file here is a screen
src/components/   reusable UI, one component per file
src/hooks/        custom hooks, one per file
src/constants/    theme tokens and other constants
src/data/         mock data and the fake API (until Supabase)
src/utils/        pure helper functions
src/types.ts      shared types
```

- Non-route code never goes inside `src/app/`.
- Import project files with the `@/` alias, never with long relative paths, and never with a file extension (`@/types`, not `@/types.ts`).
- Use `import type` for type-only imports.

## Code style

- TypeScript `strict` stays on. No `any`; use `unknown` and narrow it.
- Formatting: 2 spaces, double quotes, semicolons, trailing commas, 80-column soft limit. Prettier enforces this (added in a separate PR); never reformat unrelated lines in a feature PR.
- Names: components and their files in `PascalCase`; hooks as `useThing` in `use-thing.ts`; everything else `camelCase`; constants objects `PascalCase` (`Colors`, `Spacing`).
- Components: function components with a default export, one per file. Props are declared as `type XProps = { ... }` (not `interface`) directly above the component.
- Route files only compose: they read params and state, and render components. Logic that is reused or longer than a screen's layout moves to a hook or `src/utils/`.
- Do not export extra things from route files.
- Derive values during render (filters, totals, counts); do not store them in state.
- No magic values: spacing, font sizes, radii and colours come from `@/constants/theme`.
- Money is formatted in one place (a helper in `src/utils/`), never with inline `toFixed` in components.

## Styling and looks

- Layout values go in `StyleSheet.create` using `Spacing`, `FontSize` and `Radius`.
- Colours come only from `useTheme()` and are applied inline in the component. No hex colours outside `src/constants/theme.ts`. Never call `useTheme()` inside `StyleSheet.create`.
- Colours are named by role (`text`, `muted`, `card`, `primary`), not by look (`green`).
- Every screen must work in light and dark mode and adapt to the window width.
- Touch targets are at least 44 x 44 dp. Pressables get `accessibilityRole` and a meaningful `accessibilityLabel`; selected and disabled states use `accessibilityState`.
- Every list shows a useful empty, loading and error state.

## Performance

- A list of data uses `FlatList` (or `SectionList`), never `ScrollView` plus `map`. Always pass `keyExtractor`.
- List item components are wrapped in `React.memo`, and callbacks passed to them are stable (`useCallback`), so one change does not re-render every row.
- Do not add `useMemo` or `useCallback` by default; add them where a measured re-render or a memoized child needs them.
- Remote images use `expo-image` with `contentFit` and a fixed size or `aspectRatio`.
- Before finishing a list change, scroll 200 generated items on a device; it must stay smooth.

## Expo and dependencies

- Install packages with `npx expo install <package>`, never `npm install <package>`, so versions match the SDK (currently SDK 57).
- Check the matching Expo docs (`https://docs.expo.dev/versions/v57.0.0/`) before using an Expo or React Native API; do not rely on memory.
- Prefer Expo modules over third-party packages. Do not add a dependency for something a few lines of code can do.
- Never create or edit `ios/` or `android/` by hand; configure native behaviour in `app.json`.

## Deviations from the course

None yet. Record each one here with the reason when we choose our own convention over the course's.
