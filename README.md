# MathsGuru Website

A free maths learning website for Sri Lankan students, Grade 6 to O-Level
(Grade 11), built on the NIE syllabus.

## Local development

```bash
npm install
npm run dev        # start the dev server
npm test           # run the practice engine tests
npm run build      # type-check and build to dist/
npm run preview    # serve the built site
```

Requires Node 20 or newer.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Astro 5, static output | Ships zero JS by default, so pages are cheap on slow connections |
| Content | Markdown in `src/content/` | Reviewable in Git, no database, survives anything |
| Schema | Astro content collections | The schema *is* the syllabus, so a lesson cannot be published without a competency id, a term, and a period count |
| Maths | KaTeX + auto-render | Emits real MathML, which is what screen readers need |
| Practice engine | Plain TypeScript | No framework. The diagnosis and scheduler are the product, so we own them |
| Hosting | Cloudflare Pages | Free, fast CDN, deploys on push to `main` |

## Project layout

```text
src/
├── components/
│   └── Practice.astro        Interactive question runner
├── content/
│   ├── competency/           One file per NIE competency (the syllabus)
│   └── lesson/               One file per lesson
├── data/questions/           Question banks, keyed by competency
├── layouts/
│   └── Base.astro            Shared shell, KaTeX loading
├── lib/
│   ├── engine.ts             mark / record / scheduler  <- the core
│   ├── engine.test.ts        Engine behaviour
│   ├── bank.test.ts          Question bank integrity, every bank
│   └── types.ts              Domain types + answer normalisation
├── pages/
│   ├── index.astro
│   └── grade/{6,11}/
├── scripts/practice.ts       DOM layer for the practice runner
├── styles/global.css
└── types/env.d.ts

research/                     Plain Markdown. No code.
```

## The practice engine

`src/lib/engine.ts` is the part worth reading. Four decisions come directly from
the research in `research/08-teaching-method.md`:

**Every wrong answer carries a named misconception.** Not "incorrect" - what the
student did, why a learner makes that error, and what to do instead. Novices
cannot diagnose their own mistakes, which is the gap the whole product exists to
close.

**Mathematically-equivalent answers are accepted.** A student who writes `4/6`
where `2/3` is expected has not made a mistake. Marking it wrong is exactly the
emphatic error correction that Ashcraft (2002) identifies as a documented
*cause* of maths anxiety.

**Hints forfeit mastery.** Only an independent, un-hinted correct answer counts.
A forgiving mastery number would feel better and mean nothing.

**The scheduler decides what comes next.** Students systematically undervalue
spacing and interleaving and judge blocked practice as better when it is
measurably worse (Hartwig et al. 2022), so we do not let them choose.

Progress lives in `localStorage` under `mathsguru:v1:<competencyId>`. There are
no accounts, no sign-up, and no server-side tracking.

## Content: how a competency becomes a page

1. Add `src/content/competency/<id>.md` with the official NIE data: grade, term,
   title, period count, prerequisites.
2. Write the lesson in `src/content/lesson/`. Every worked-example step carries a
   `why`, not just a `what`. That is the whole product.
3. Add questions to `src/data/questions/<grade>-<id>.ts` and register it in
   `src/data/questions/index.ts`.
4. Create the page under `src/pages/grade/<grade>/<id>/`.

The content schema will refuse to build a lesson that is missing a competency id
or has an invalid one.

### Content tests

`src/lib/bank.test.ts` runs over **every** registered bank, so a new competency
gets all the checks automatically. It will fail the build if:

- a question has no diagnosis, so a wrong answer would be reported as a bare
  "incorrect"
- an answer appears in both `accept` and `diagnoses` — a student typing a correct
  answer and being told they made a named mistake
- two diagnoses fire for the same answer, giving contradictory advice
- a diagnosis blames the student, or has no cause and no next step
- an independent question has fewer than two hints for the ladder to fade
- a completion question has no starting point

## Coverage

| Competency | Lesson | Questions |
| --- | --- | --- |
| 3.2 Equivalent fractions | done | 7 |
| 3.4 Adding and subtracting fractions | done | 8 |

Both Grade 6, Term 2, following the official NIE sequence. `MISSING_QUESTION_BANKS`
in the registry lists what is not built yet, so the gap is visible rather than
implied by absence.

## Adding maths to a lesson

Use LaTeX in Markdown:

```markdown
Inline: \(\frac{1}{2}\)
Block:  $$\frac{1}{2}$$
```

A custom rehype plugin (`astro.config.mjs`) converts these into delimiters for
KaTeX auto-render. If KaTeX fails to load, the raw TeX stays visible rather than
leaving a blank space.

## Accessibility

- Every formula renders as real MathML alongside the visual output, so screen
  readers get navigable structured maths rather than a screenshot.
- Touch targets are at least 48px. Input fields are 17px+ so iOS does not zoom
  on focus.
- `prefers-reduced-motion` is respected.
- There is a skip link and `aria-live` on the feedback region.
- Zoom is never disabled.

**Known gap:** we have not tested Sinhala or Tamil screen readers. Both are
low-resource languages for speech synthesis. See
`research/14-open-questions.md`.

## Accessibility of the teaching itself

See `research/08-teaching-method.md` for the evidence base. The short version:
worked examples before discovery, a fading ladder per topic, no public
leaderboards, and mastery gates as anxiety regulators.

## Constraints this codebase is built around

These are from the research, not preferences:

- **Mobile first.** 80% of device use is smartphones; 21.3% of households own a
  computer.
- **Low data.** Students pay over LKR 2,000/month. No web fonts, no images, ~7KB
  of CSS and ~6.6KB of JS on a practice page.
- **Power cuts happen.** State is saved per attempt; nothing is lost mid-question.
- **No accounts.** Every account system adds friction and data cost.
- **Free, permanently.** We will never charge a student for the teaching.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for branching, commit format, and the
Pull Request checklist. The important rule: **every wrong answer needs a
diagnosis**, and **every step needs a why**.

## Research

All of it is in [`research/`](./research/), in plain English. Start with
`research/00-research-summary.md`.

The syllabus documents (`research/03-grade6-syllabus.md`,
`research/04-olevel-syllabus.md`) were written from the NIE Teacher's Guides
directly, not from summaries. Do the same for anything new.

## Licence

Undecided. Do not assume reuse rights.
