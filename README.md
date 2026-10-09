# MathsGuru Website

> Helping Sri Lankan students actually understand mathematics.

A learning website for **Grade 6 to O-Level (Grade 11) Mathematics**, built for
students in Sri Lanka and explained in a friendly, simple way.

---

## The idea

The problem is not that Sri Lankan students are weak at maths. It is that:

- Classes move fast, and if you fall behind in Grade 6 it quietly compounds
  all the way to the O-Level exam in Grade 11.
- Tuition exists, but it is expensive, hard to schedule, and often one-to-one,
  so it does not scale to everyone who needs it.
- Most maths websites online are built for American or European syllabuses, so
  the examples, the order of topics, and even the exam questions feel foreign.

This site aims to fill that gap: **syllabus-matched, explained patiently, and
free or near-free for students.**

## Who it is for

| | |
| --- | --- |
| **Students** | Grade 6 through Grade 11 (Year 7 to Year 11) |
| **Location** | Sri Lanka |
| **Languages** | English first, Sinhala and Tamil planned |
| **Device** | Mobile-first, because that is how most students get online |
| **Cost** | Free core content |

## Current status

Early stage. We are building the research foundation first.

- [x] Project structure and Git workflow set up
- [ ] Research phase ([`research/`](./research/))
- [ ] Technology chosen
- [ ] First lesson pages built
- [ ] Students

See [`research/`](./research/) for the full picture of where this is going.

---

## Repository layout

```text
.
├── research/     Research notes and findings. Plain Markdown, no code.
├── src/          Application source code.
├── public/       Static files served as-is.
├── CONTRIBUTING.md  How we branch, commit, and review.
└── README.md     This file.
```

## How we work

This project follows standard Git practice.

- `main` holds released, live code only.
- `develop` is the default branch for ongoing work.
- Changes are made on short-lived `feature/`, `bugfix/`, and `docs/` branches
  and merged through Pull Requests.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/).

Read [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full details.

---

## Contributing

Contributions are welcome, especially from anyone who has taught or sat the
O-Level in Sri Lanka. If you know how a topic is *actually* taught in a real
classroom, that knowledge is valuable here.

Please read [`CONTRIBUTING.md`](./CONTRIBUTING.md) first.

## Licence

To be decided. Please do not assume reuse rights yet.

## Contact

Reach out via GitHub issues on this repository.
