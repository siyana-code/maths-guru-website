# What Technology Should We Build This With?

**Research date: 9 October 2026**

A reasoned recommendation, not research. There is no perfect answer here, and
the honest truth is that the stack matters much less than the teaching.

---

## The requirement, stated honestly

From the constraints we found:

| Requirement | Why |
| --- | --- |
| **Mobile first, always** | 80% smartphone use, 21% household computer ownership |
| **Very fast on poor connections** | Rural connectivity, data cost sensitivity |
| **Static or near-static pages** | Students on metered data |
| **Content-first, no heavy app** | They cannot install much and pay for data |
| **Easy to add content** | We are a beginner adding chapters regularly |
| **Cheap to run** | No revenue yet |
| **Tricky maths rendering** | MathML, LaTeX, geometry diagrams |

---

## The recommendation

### **Astro, with the content in Markdown files, and a small amount of vanilla JavaScript**

### Why

**Content in Markdown, not a database.**

Every lesson is a file in Git. This matters more than it sounds:

- We can review and correct content through Pull Requests
- Content survives anything. It is not locked in a SaaS.
- No database to run, pay for, or lose.
- Searchable, diffable, versioned, like code.
- Cheap forever.

**Astro by default outputs almost no JavaScript.**

This is the key advantage for our constraints. A student on a slow phone with
1GB of data gets a fast page. Most competing sites ship a React app that costs
megabytes before showing anything.

**It renders maths well.**

Astro supports MathJax and KaTeX. We need MathJax v4 specifically for the
accessibility reasons in [08-teaching-method.md](./08-teaching-method.md).

**Content collections.**

Astro has a built-in system for structured, validated content collections.
Each chapter gets a schema we control, so we cannot accidentally publish a
lesson with a missing prerequisite or a broken diagram reference. That is
genuinely valuable for a syllabus-driven site.

**Static hosting is nearly free and cannot go down.**

A static site on a CDN costs nothing at our scale and has no server to
maintain, patch, or pay for.

**It works without JavaScript.**

Because we need practice questions and a scheduler, we add interactivity per
page. But everything else is plain HTML that works immediately.

---

## Why not the alternatives

### React / Next.js

The default choice, and a reasonable one. We would get a bigger ecosystem.

But Next.js ships React by default, which means a JavaScript bundle before
content appears. For a student on a slow phone and metered data, that is the
wrong default. We would spend our effort fighting our own framework.

**Consider it if** we later build a logged-in app with heavy state, such as a
full adaptive engine. Not now.

### WordPress

Writers and teachers could edit content without Git.

But WordPress is slow, hard to keep secure, and hard to make genuinely fast.
Its plugin surface is also a security liability. And content in a database is
harder to review and easy to lose.

**Consider it if** we get teachers writing content and they cannot use Git.**At
that point the bottleneck is editorial workflow, not the framework.**

### Plain static HTML

Fastest possible and no framework at all.

But it is painful to maintain at scale. Adding 32 chapters x 3 languages by
hand, with correct internal links and maths rendering, would take forever.

**This is what Astro gives us without the weight.**

### Flutter or React Native (an app)

No. The research is clear:

- Only **21% of households** own a computer. Most students use a shared phone.
- App installs cost data and storage.
- **An app cannot be found on Google.** A website can.
- Sinhala and Tamil text rendering in an app needs work.
- Every content update becomes an app release.

A website that works in the browser is reachable by pasting a link into
WhatsApp. An app needs an install.

> **We are not building an app. If a mobile app is ever right, it will be a thin
> wrapper around this website, built after the website works.**

### Moodle / existing LMS

Built for courses and classrooms.

We are not running a course. We are trying to be something a student opens for
ten minutes without an account, a timetable slot, or a teacher's permission.

That argues against anything course-shaped.

---

## What we need beyond a static site

Astro handles content and pages. Three things are extra.

### 1. A practice engine

Questions, marking, hints, diagnosis, scheduling.

**Recommendation: build this ourselves, as a small TypeScript library, with
questions stored as data.**

Why not a third-party engine? Because the core of our product *is* the
diagnosis and the scheduler. Those are our differentiators. Outsourcing them
outsources the product.

Questions become data files:

```yaml
id: frac-001
grade: 6
chapter: fractions
medium: sinhala
prerequisites: [mult-tables, lcm]
question: "..."
answer: "..."
diagnoses:
  - if: multiplied
    say: "You multiplied instead of dividing..."
  - if: used-common-denominator
    say: "The denominators differ, so you need the LCM first..."
```

That format is the product. It is reviewable, translatable, and testable.

### 2. Mathematics rendering

**MathJax v4**, for accessibility. Not KaTeX, which is faster but does not give
us the `aria-label` behaviour we need.

Plus GeoGebra for geometry diagrams and interactive figures. Free for
non-commercial use.

### 3. A database, probably

Not for content. For **student progress**.

We need to store what a student has mastered to make the scheduler work. That
needs somewhere to keep state.

**Recommendation:** start with no accounts at all, and store progress in the
browser. Then add accounts only when something genuinely requires it, like the
parent report.

> **Every account system we add creates friction and costs data.** Do not add
> one until a feature needs it.

---

## Hosting

| Option | Cost | Verdict |
| --- | --- | --- |
| **GitHub Pages** | Free | Good, but tied to GitHub. Fine to start |
| **Cloudflare Pages** | Free, fast globally | **Best fit.** Fast CDN, free, easy |
| Netlify | Free tier | Good, slightly slower than Cloudflare |
| Vercel | Free tier | Fine, but a React-first platform |

**Recommendation: Cloudflare Pages, connected to the repo.** Push to `main`,
deploys automatically. Fast worldwide CDN, free, and it handles the static
output Astro produces.

---

## The stack, stated simply

```
Content      Markdown files in Git, validated by schema
Site         Astro, static output
Styling      Plain CSS, mobile first
Maths        MathJax v4 (accessible), GeoGebra for diagrams
Questions    YAML data files, our own schema
Engine       Small TypeScript library, no framework
Hosting      Cloudflare Pages
Later        A database, only when progress needs a server
```

No CMS. No database for content. No app. No framework tax.

---

## What we should not do yet

- **Do not build a CMS.** We are the editors for now, and Git gives us review for
  free.
- **Do not set up a database for lessons.** Content in Git until it hurts.
- **Do not add an app.**
- **Do not add authentication** until the parent report forces it.
- **Do not add analytics before we know what to ask.** If we add any, we must
  measure practice days per week, not page views.
- **Do not over-engineer.** A beginner maintaining a complex stack alone is a
  reliable way to never ship.

---

## The honest caveat

**The technology choice is not what determines whether this works.**

The research is unambiguous: content that teaches well beats a beautiful site,
and a well-built site with bad teaching is worthless. Choosing Astro frees up
our attention for the part that matters.

Choose the boring, fast thing. Then spend the saved effort on step-by-step
explanations and good error diagnosis.

---

## Decision summary

| Question | Answer | Confidence |
| --- | --- | --- |
| Static site? | Yes | High. Data and power constraints force it |
| Content in Git? | Yes | High. Review and durability |
| Which framework? | Astro | Medium-high. Best fit for content-first static |
| Maths library? | MathJax v4 | High. Accessibility requirement |
| Where does progress live? | Browser first, server later | Medium |
| Hosting? | Cloudflare Pages | High |
| App? | Not now | High |
