# Research

This folder holds everything we learned while working out **what to build** and
**who to build it for**. It is plain Markdown. No code, no build step.

We keep this in Git because research is never "done". Six months from now you
will forget why you made a decision. This folder is the memory.

## How to use this folder

- **Start with the summary below.** If you only read one thing, read that.
- Each document answers one question and ends with a short "What this means".
- Anything we could not verify is marked **Not verified**. Please fix those if
  you can. A wrong fact written down confidently is worse than no fact.
- Facts about Sri Lanka are time-sensitive. Check the date on a document.

## Documents

### Start here

| # | Document | What it answers |
| --- | --- | --- |
| 00 | [Research summary](./00-research-summary.md) | What did we learn, and what are we building? |
| 01 | [Our target student](./01-target-student.md) | Who exactly are we teaching? |
| 02 | [Sri Lankan education system](./02-education-system.md) | How does school work here? |
| 03 | [Grade 6 syllabus](./03-grade6-syllabus.md) | What must a Grade 6 student learn? |
| 04 | [O-Level maths syllabus](./04-olevel-syllabus.md) | What must an O-Level student learn? |
| 05 | [Exam and past papers](./05-exams-and-papers.md) | How are students actually tested? |

### Market and product

| # | Document | What it answers |
| --- | --- | --- |
| 06 | [Tutoring market](./06-tutoring-market.md) | Who teaches this today, and what do they charge? |
| 07 | [Competitive landscape](./07-competitive-landscape.md) | What else is out there? |
| 08 | [Teaching method that works](./08-teaching-method.md) | How should the content actually be taught? |
| 09 | [Website ideas](./09-website-ideas.md) | What features are worth building? |
| 10 | [Making money](./10-making-money.md) | Can this pay for itself? |
| 11 | [Technology choices](./11-technology.md) | What should we build it with? |
| 12 | [Getting students](./12-getting-students.md) | How will anyone find it? |
| 13 | [Roadmap](./13-roadmap.md) | What order do we do this in? |
| 14 | [Open questions](./14-open-questions.md) | What we still do not know. |

### Reference

| Document | What it holds |
| --- | --- |
| [Sources](./sources.md) | Every link used, with the date it was checked. |
| [Glossary](./glossary.md) | Sri Lankan education terms in plain English. |

## How to add research

1. Create a branch: `git checkout -b docs/research-topic`
2. Add or edit a file in this folder.
3. Commit with `docs(research): ...`
4. Open a Pull Request into `develop`.
