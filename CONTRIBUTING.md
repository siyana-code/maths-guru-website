# Contributing to MathsGuru Website

Thanks for helping. This document explains how we work together on this project.

The short version:

- `main` is for **live releases only**. Never commit to it directly.
- `develop` is the **default branch**. All day-to-day work lands here first.
- Every change happens on its own **short-lived branch**, then gets merged back.

---

## Branches

| Branch | What goes here | Merges into |
| --- | --- | --- |
| `main` | Released, live code. Always deployable. | `develop` (back-merge fixes) |
| `develop` | Finished work waiting for the next release. | `main` at release time |
| `feature/<short-name>` | A new feature or a new page. | `develop` |
| `bugfix/<short-name>` | A fix for a known broken thing. | `develop` |
| `docs/<short-name>` | Documentation and research changes only. | `develop` |
| `release/<version>` | Final checks and version bump before going live. | `main` + `develop` |
| `hotfix/<short-name>` | An urgent fix for something broken in production. | `main`, then `develop` |

### Naming rules

Use `lowercase-with-dashes`. Keep it short and descriptive, 2-4 words.

Good:

```text
feature/grade6-fractions-page
feature/sinhala-translation
bugfix/nav-mobile-menu
docs/syllabus-research
release/v0.1.0
hotfix/broken-home-link
```

Bad:

```text
feature/stuff
feature/FIX_THIS
Rasindus-branch
temp-test
```

---

## The normal workflow

This is the loop you will use 95% of the time:

```bash
# 1. Make sure you are up to date
git checkout develop
git pull origin develop

# 2. Create a branch for your change
git checkout -b feature/my-change

# 3. Do the work, committing as you go
git add .
git commit -m "feat(lessons): add fractions practice page"

# 4. Push the branch
git push -u origin feature/my-change

# 5. Open a Pull Request on GitHub -> targeting `develop`

# 6. After it is reviewed and merged, delete the branch
git checkout develop
git pull origin develop
git branch -d feature/my-change
```

### Releasing to production

```bash
git checkout develop
git pull origin develop
git checkout -b release/v0.1.0
# ... version bumps, final checks ...
# Open PR: release/v0.1.0  ->  main
# After merge, tag it:
git checkout main
git tag -a v0.1.0 -m "Release v0.1.0"
git push origin v0.1.0
# Then back-merge main into develop so they stay in sync:
git checkout develop
git merge main
git push origin develop
```

### Emergency fixes

When something is broken in production right now:

```bash
git checkout main
git checkout -b hotfix/critical-bug
# ... minimal fix ...
# Open PR: hotfix/critical-bug -> main
# Then merge main back into develop so the fix is not lost
```

---

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). This keeps history readable and makes automatic changelogs possible.

**Format:**

```text
<type>(<scope>): <short description>
```

**Types:**

| Type | When to use it |
| --- | --- |
| `feat` | A new feature for the student |
| `fix` | A bug fix |
| `docs` | Documentation or research changes |
| `style` | Formatting only, no code change |
| `refactor` | Cleaning up code without changing behaviour |
| `perf` | Making something faster |
| `test` | Adding or fixing tests |
| `build` | Build system or dependency changes |
| `ci` | GitHub Actions and deployment config |
| `chore` | Small housekeeping tasks |

**Scopes** match the part of the project, for example:
`syllabus`, `lessons`, `practice`, `auth`, `research`, `ui`, `seo`.

**Rules:**

- Use the **imperative** mood. Write "add" not "added" or "adds".
- Keep the subject line under **72 characters**.
- Do **not** end the subject with a full stop.
- One logical change per commit. If the message needs the word "and", split it.

**Examples:**

```text
feat(lessons): add grade 6 ratios lesson page
fix(practice): stop answer check resetting the score
docs(research): add O/L syllabus notes
chore(deps): bump astro to latest
```

**With a longer explanation** (use the blank line, then the body):

```text
feat(practice): add timed quiz mode for grade 11 students

Students asked for a way to practise under exam time pressure.
This adds a countdown timer and a results summary at the end.

Closes #42
```

---

## Pull requests

- Target **`develop`**, not `main`.
- Keep them small. A 5-file PR is easy to review, a 50-file PR is not.
- Write a short description of **what** changed and **why**.
- Link the related issue at the bottom (`Closes #12`).
- Draft PRs are fine for work in progress.

### Review checklist

Before requesting a review, check that:

- [ ] The site builds without errors.
- [ ] It works on a phone (most Sri Lankan students will be on mobile).
- [ ] Maths formulas and answers are correct.
- [ ] No secrets, `.env` files, or personal data are committed.
- [ ] New content has been checked against the official NIE syllabus.

---

## Protected branches

- **`main` is protected.** You cannot push straight to it. All changes arrive through
  a reviewed Pull Request, and every release must be tagged.
- **`develop` is protected** against force-push and branch deletion.

If you are working solo on this, "review" can mean you re-reading your own diff
carefully before merging. The protection still forces you to pause and check.

---

## Where things live

```text
research/    Research notes and findings. Plain Markdown. No code here.
src/         Application source code.
public/      Static files that get copied to the site as-is.
```

---

## Questions

If something here is unclear or does not match reality, please open an issue or
edit this file. Documentation that drifts from practice is worse than no
documentation at all.
