# Contributing

- Branch from `main`: feat/_ fix/_ chore/\*
- Conventional Commits. Run `npx prettier . --write` before pushing.
- Open a PR with a clear description and checklist.

## PR checklist

- [ ] Format ok (Prettier)
- [ ] README/docs updated if needed
- [ ] No breaking changes

# Contributing

Thanks for your interest!
This repo is an **HTML + CSS template** with Prettier.

## Workflow

1. Create a branch from `main`:
   - `feat/<short-description>`
   - `fix/<short-description>`
   - `chore/<short-description>`
2. Keep changes small and atomic.
3. Format before committing:
   ```bash
   npx prettier . --write
   ```

```
4. Push your branch and open a Pull Request (PR) against main.

## Commit Messages
Follow Conventional Commits.
Examples:

- feat: add responsive navbar
- fix: correct footer alignment
- docs: update README quick access
- chore: update prettier config

## Pull Request Checklist
Before submitting a PR, please confirm that:

- [ ]Code is formatted with Prettier (npx prettier . --check)
- [ ]Commit messages follow Conventional Commits
- [ ]README/docs updated if applicable
- [ ] No breaking changes introduced
- [ ]Branch name follows convention (feat/*, fix/*, chore/*)
- [ ] PR description includes:
  - Purpose of the change
  - Steps to reproduce (for fixes)
  - Screenshots/visuals if UI changes are involved
- [ ] All files unnecessary for one-off projects are excluded in .degitignore
- [ ] Any issues addressed are linked (e.g., closes #123)

## Scope of Contributions
- Improvements to the base template (HTML, CSS structure, config, tooling).
- Enhancements that improve clarity, accessibility, or maintainability.
- No heavy frameworks or complex external integrations in this template.
```
