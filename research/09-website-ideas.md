# What Should We Build?

**Research date: 9 October 2026**

Turning everything we learned into a list of things worth building. Every idea
here has to justify itself against the constraints we have found.

---

## The constraints, in one place

Before any feature, remember these. Every one of them kills ideas.

1. **Mobile first.** 80% of smartphone use. 21% of households own a computer.
2. **Low data.** Students spend LKR 2,000+ a month on data. Video is expensive.
3. **Power cuts happen.** A February 2025 national blackout. Must not lose work.
4. **Free.** We must beat LKR 2,000/month on price, which means free.
5. **Ten minutes, not an hour.** School ends 1:30pm, then tuition, then
   homework. And under 10 min/week of usage produces nothing measurable.
6. **Sinhala and Tamil.** English-only locks out ~75% of the school system.
7. **No motivation available.** Khan Academy's own research: adding *people*,
   not software, moved usage from 7 to 47 min/week.
8. **Parents decide.** They hold the money and they see the report card.
9. **Novices cannot self-diagnose.** We must diagnose errors for them.
10. **Must be right.** A tutor who is wrong is embarrassing. A website that is
    confidently wrong is worse, because nobody can tell.

---

## Tier 1: the core engine

**If we build nothing else, build this.** Everything else depends on it.

### 1. Step-by-step worked examples

Not a video. Not a PDF. A structured sequence where each step is explained and
the reasoning is visible.

**Why:** worked examples beat discovery for novices at d = 0.57. It is the
single best-evidenced thing in this entire folder.

**What makes it good:**

- Every step explained, not just shown
- Say **why** the step works, not only what it is
- The wrong steps removed, so no dead ends to imitate
- Available in Sinhala, Tamil and English

### 2. Practice with a fading ladder

For every topic:

```
Worked example  ->  Completion problem  ->  Independent problem
```

**Why:** the fading technique beats simply alternating examples and problems.
Research on novices is unambiguous - do not make them discover the method first.

**Important:** this only applies while the student is new. For students who
already know a topic, worked examples make performance *worse* (expertise
reversal effect). The engine must know which.

### 3. Diagnosis, not just marking

When a student is wrong, do not say "Incorrect". Say:

> "You multiplied instead of dividing. Try again - the question is asking how
> many *groups*."

**Why:** novices cannot diagnose their own errors. This is the part nearly every
platform gets wrong, and it is the single best thing we could build.

**How:** tag every question with the *reason* a student is likely to be wrong,
not just the correct answer.

### 4. A scheduler, not a question feed

The system decides:

- Which topic next
- Which old topics to bring back, and when
- Mix topics rather than drill one
- Never repeat the same question twice

**Why:** spacing works (g = 0.28, g = 0.24 in real courses). Interleaving
works. But **students systematically undervalue both and judge blocked practice
as better when it is worse.** So they cannot be left to make this choice.

### 5. Fluency practice for the boring arithmetic

Carry operations, times tables, fractions, basic manipulation.

**Why:** maths anxiety specifically damages working memory, and the damage
shows up in exactly this: carrying in addition, multi-step arithmetic, routine
algebra. Making these automatic frees the working memory for thinking.

**This is the anxiety fix that actually works.** The research is blunt: anxiety
support alone improves feelings but not scores. Only skills teaching moves
scores.

### 6. Progress shown as mastery, not streaks

- Skills mastered by topic
- "You could not do this in March. Now you can."
- A chart that fills up

**Why:** growth mindset research says the mechanism is *attribution* - what a
student believes caused their result. Showing evidence beats lecturing about
effort (which barely works, r = 0.10).

**Avoid:** public leaderboards. PISA found better-performing classmates
*increase* anxiety. About 1 in 5 students is maths-anxious and leaderboards
directly harm them.

---

## Tier 2: what makes it usable in Sri Lanka

### 7. Works on a phone, on one bar of signal

- Text and images, not video
- Every question works without loading
- State saved locally so a power cut does not lose work
- Small data footprint
- Works on an old, cheap Android

### 8. Sinhala and Tamil as first-class

Not machine-translated afterthoughts. Real explanations, using the terms from
the NIE textbooks, in the language students actually think in.

**Why:** mathematics moves to English instruction from Grade 6, so students read
English symbols while thinking in Sinhala or Tamil. The explanation needs to be
in the thinking language.

**The Tamil opportunity:** 3,042 Tamil-medium schools. 10 Tamil papers out of
1,066 online. That is 1% of content for 25% of students.

### 9. Accessiblity done properly from the start

- MathML under every equation, via MathJax v4
- `intent` on ambiguous notation (`|x|` is absolute value or a determinant at
  Grade 10+)
- Alt text on every diagram
- Never a screenshot of an equation

This is cheap on day one and nearly impossible to retrofit.

### 10. Printable worksheets

Sri Lankan students sit national exams **on paper**. "Print this and use it" is
a delivery channel, not a nice-to-have.

---

## Tier 3: what makes parents take it seriously

### 11. A weekly parent report

The single highest-leverage idea in this document.

Send a WhatsApp message to the parent, once a week:

```
This week: 5 practice days
Mastered: Fractions, Ratio
Still working: Algebraic fractions
One note: She got stuck twice on
the same step, then solved it herself.
```

**Why this is not nagging:** research shows students cannot accurately predict
their own progress and do not know what improves learning. **A parent report
gives the family information the child genuinely cannot supply.**

**Why it works commercially:** the parent holds the money. Nothing else reaches
them.

### 12. Honest progress, including bad news

Show the real number, even when it went down.

Parents are not fooled and they resent finding out from a bad result. A report
that says "this week was worse, here is what we think happened" is more
trustworthy than one that only ever reports success.

### 13. Teacher use, even at the start

Free for teachers. Printable. Assignable.

**Why:** the single most effective thing anyone has found is putting practice
**into a timetable slot**. The Sri Lankan Khan Academy study worked (+0.20 SD)
only because schools scheduled it.

Even one teacher using our worksheets with a class is a distribution channel we
cannot buy.

---

## Tier 4: build later

### 14. Past papers with detailed marking schemes

Answers alone are not enough. Students need to see **where the marks are**.

**Careful:** this is the most competitive category. Do not build an archive.
Build the practice engine, and use the free archives as our question source.

### 15. Virtual manipulatives

GeoGebra for geometry and graphing. Free for non-commercial use.

Follow the CRA sequence properly: **separate** concrete, pictorial and abstract
lessons, since research shows separating them works better than mixing.

Apply it to our core topics: fractions, ratio, area, volume, surface area,
trigonometry. Not to everything - CRA gets worse for advanced maths.

### 16. Virtual tuition classes later

Once content and practice work, and only if we have students to put in them.

Low priority. The incumbent tutors are good and trusted.

---

## What we should NOT build

| Idea | Why not |
| --- | --- |
| **Another past paper archive** | Crowded, free, easily copied, government already hosts them |
| **A generic AI chatbot** | Competitors already do this. Cannot guarantee correctness. Wrong maths from a confident AI is the worst outcome |
| **Video lessons** | Expensive in data, useless on a bad connection, and worked examples beat video anyway |
| **Leaderboards or streaks** | Actively harms the ~20% with maths anxiety |
| **A growth mindset page** | r = 0.10. Barely works alone |
| **Payments** | Not our problem. Everyone else does bank transfer plus receipt upload, badly, but it is not where we win |
| **A tutor marketplace** | Every directory already fails here. Trust runs through WhatsApp and personal relationships |
| **Gamification** | Character decoration, not real game design. Wrong age group and wrong goal |
| **Anything needing a laptop** | 21% of households. Rural 18% |
| **Anything English-only** | Locks out ~75% of students |

---

## The one-line version

**Build a free, mobile-first, trilingual practice engine that shows worked
examples, diagnoses exactly what a student got wrong, reschedules their
practice properly, and tells their parent it worked.**

Everything else is decoration.

---

## Build order

See [the roadmap](./13-roadmap.md) for sequencing and milestones.

Short version:

1. **Prove the core works** - one topic, Grade 6 fractions, English, phone only
2. **Prove students use it** - habit, not signups
3. **Prove parents value it** - the weekly report
4. **Then scale** - more topics, then languages

> **Do not build all three languages before proving the teaching engine works in
> one.** A perfect trilingual product that does not teach well is worthless, and
> we cannot tell which of the two problems we have until we test.
