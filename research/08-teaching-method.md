# What Actually Makes Maths Click

**Research date: 9 October 2026**

This is the most important document in the folder.

A maths website can have perfect content, perfect syllabus matching and perfect
marketing, and still not help a single student. The research on learning is
unusually clear about what works. This document is what we must build to.

---

## 1. Show, then help them do it yourself

**Do not make students discover things. Show them first.**

### What the research says

Students trying to solve a problem with no example waste most of their effort
searching for *what to try next*, rather than building understanding. Working
memory is small, and this search fills it up completely.

Sweller and Cooper (1985) showed that unguided problem solving may let a student
*finish* the problem while contributing **very little to actual learning**.
They can get the right answer for the wrong reason.

Meta-analysis (Crissman, 2006) puts the benefit of worked examples at
**d = 0.57** for learning.

The review that shocked the field (Kirschner, Sweller & Clark, 2006, over 1,400
citations) put it bluntly:

> "After a half-century of advocacy associated with instruction using minimal
> guidance, there appears to be **no body of research supporting the
> technique**."

And critically, they were talking about **novices**. For students who already
know the material, the picture reverses.

### But there is a catch

Worked examples work for students who are **new** to a topic. For students who
already know it, examples actually **make performance worse**. This is called
the **expertise reversal effect** (Kalyuga et al.).

Also, the effect only holds if the example is well designed. If it splits
attention across a screen or repeats information, it stops working.

### What we must build

A ladder, for every single topic:

1. **Worked example** - we do the whole problem, explaining each step and why.
2. **Completion problem** - we start it, you finish it.
3. **Independent problem** - you do it alone.

Research (Renkl & Atkinson; Paas, Renkl & Sweller) shows this **fading** approach
beats simply alternating between examples and practice.

### The bit most platforms get wrong

Novices **cannot diagnose their own mistakes**. They look at an example, think
they have understood, and are wrong again.

So we must not ask "where did you go wrong?" We must work it out for them.

> **Our rule: every wrong answer gets a specific diagnosis, not just "Incorrect".**
> "You multiplied instead of dividing" is worth a hundred times more than a red
> cross.

---

## 2. Never make a student feel stupid

**About 1 in 5 people has maths anxiety. That is roughly 1 in 6 of our users.**

### What maths anxiety actually is

It is not a vague feeling. Ashcraft's research shows it **eats up working
memory**.

That is why anxious students are not worse at understanding maths. They are
worse at **doing it under pressure**. Specific findings:

- The damage shows up in **carrying in addition** (like 27 + 18). Simple
  arithmetic alone shows no effect.
- Performance **drops under timed conditions** specifically.
- The result: a maths-anxious student's score **understates what they actually
  know**.

### How anxious students got that way

Ashcraft identified the teaching styles that **cause** anxiety, and one is on us:

> **Student-paced mastery formats with immediate, emphatic error correction.**

Read that again. The most common way edtech does mastery learning is itself a
documented cause of maths anxiety.

This is the sharpest problem in our project. The right pedagogy and its most
common implementation are in conflict.

### What the evidence says actually helps

A 2026 meta-analysis of 51 studies and 7,673 students found:

| Approach | Effect on anxiety |
| --- | --- |
| **Combined skills + anxiety support** | **Large (g = -1.09)** |
| Anxiety support only | Medium (g = -0.71) |
| Skills only | Small (g = -0.37) |

But the crucial finding is the second one:

> **For actual maths performance, only skills-based interventions worked.**
> Anxiety-only interventions improved feelings but **not scores**.

> **The conclusion is uncomfortable: to reduce anxiety you must teach maths, and
> to improve scores you must teach maths. A "calm, safe space" product will feel
> good and move nothing.**

### What we must build

- **Errors are information, not failure.** Never "WRONG". Say "not quite, look
  at step 2 again".
- **Never show a question the student will probably get wrong.** ALEKS only
  shows topics with a predicted 95% success rate. That single rule satisfies
  mastery learning **and** keeps the student calm, from the same algorithm.
- **Real fluency practice.** Carry operations, multi-step arithmetic, routine
  algebra. Get those automatic so they stop eating working memory.
- **No public leaderboards.** PISA found that the better your classmates do at
  maths, the **more anxious you feel**. Competitive features directly harm about
  a fifth of our users.

---

## 3. Practice must be spread out. Students will not do this for us.

### Spacing works. Retrieval practice does not (yet).

This one surprised us.

**Spacing** (returning to a topic after days or weeks) has solid evidence:
**g = 0.28** overall, and **g = 0.24** when measured inside real courses
(Murray et al., 2025).

**Retrieval practice** (testing yourself instead of reviewing) sounds even
better, and it is famous in learning science generally (g ≈ 0.70). But **in
maths specifically, the confidence interval crosses zero.** The authors were
honest: *"the current literature does not provide conclusive evidence."*

> **We should not build our product on testing-effect claims in maths. That
> evidence comes from other subjects and does not transfer.**

Rohrer and Taylor found spacers and massers scored the **same after one week**
and diverged sharply at **four weeks**. So a spaced practice system judged a
week after use will look useless, even though it is working.

Interleaving (mixing up problem types) also works, and its mechanism is exactly
what weak students need: it forces you to **notice which method applies**, not
just execute one you were shown.

### The critical fact

**A typical maths homework set is 20 problems on the same skill.** Blocked,
repetitive, all at once.

And **students systematically undervalue spacing and interleaving.** Research
shows they judge blocked practice as more effective even when it is measurably
worse (Hartwig et al., 2022).

> **So we cannot leave this choice to the student. We have to schedule it for
> them.**

### What we must build

A **scheduler**, not a "Next Question" button. It decides:

- Mix topics rather than drilling one
- Bring back old topics after days, not immediately
- Never repeat a question identically
- Target the **long term**, not this evening

Alcumus does this beautifully and for free: it flips a coin between your current
topic and reviewing topics you have already passed. Copy that idea.

---

## 4. Move from objects, to pictures, to symbols

**Concrete, Representational, Abstract (CRA)** is the sequence:

1. **Concrete** - real objects you can move. Base-ten blocks, counters.
2. **Representational** - drawings of those objects. Dots, bars, shapes.
3. **Abstract** - the written symbols. The actual maths.

It comes from Bruner (1965) and was formalised for teaching by Mercer and Miller
(1992).

### How strong is the evidence?

Remarkably strong. A 2025 meta-analysis of 30 studies found an overall effect
size of **Tau-BC 0.9965** (95% CI 0.9947-0.9983). Manipulatives measurably
improve conceptual understanding.

One finding is operationally very useful: **teaching the three stages
separately works better than mixing them.** Dedicated concrete lesson, then
dedicated pictorial lesson, then dedicated abstract lesson.

### Where it applies to us

**Our core Grade 10-11 topics are exactly where this works best:**
fractions, ratio, proportion, area, volume, surface area, trigonometry.

### Where it does not

- **It weakens with harder maths.** With quadratic equations or calculus, using
  blocks can be slower and more confusing than just the symbols.
- **There is very little research on CRA for secondary school maths** compared
  to primary.

> **Use CRA for numbers, geometry and measurement. Do not force it on
> everything.**

Brilliant is the reference implementation of this as interaction design. Its
signature move, dragging terms and drawing graphs, is CRA in software form. And
notice its pattern: excellent at visual topics, weaker at symbolic
manipulation. That is exactly what the research predicts.

---

## 5. Mastery means re-teaching differently, not more of the same

### Bloom's original idea

Bloom (1968) set out what mastery learning requires:

1. Teach in units of 1-2 weeks
2. Short test
3. **If not mastered (conventionally 80%+), the test becomes a diagnostic**
4. Teach again, **in a different style**
5. Test again
6. Students who passed first time get **enrichment**, immediately

Guskey identified two things that people always forget:

- **The corrective must teach differently.** More of the same is not corrective
  teaching. Almost no edtech does this. Khan Academy and Mathspace both give
  more practice of the same kind.
- **Give early finishers something real.** This is the difference between
  mastery learning and remedial drilling.
- **Budget 10-20% more time.** If you plan mastery as if it were free, it fails.

### What it actually achieves

Meta-analysis across 108 controlled studies (Kulik et al., 1990) found positive
effects on exam performance, strongest for weaker students, plus positive
effects on attitudes.

Bloom's famous 2 Sigma study (1984) found mastery plus tutoring produced gains
equivalent to **two standard deviations**, roughly a year ahead.

Modern tutoring research (Nickow et al., 2020) puts the real figure at
**0.37 SD** across hundreds of studies. Smaller than Bloom claimed, but still one
of the largest effects in education.

### The honest catch

**Mastery learning looks weak on standardised tests and strong on retention.**

- On criterion-referenced tests (its own measures): large effects
- On standardised tests: about **0.1-0.27**, often not statistically significant
- On **long-term retention**: **0.55-0.71**, consistently large

> **Do not judge a mastery product by a test taken straight after practice.
> Judge it by what students still know in three months.**

---

## 6. Give growth mindset carefully, or not at all

### What was claimed

Dweck: intelligence is not fixed. Tell students their brain grows with effort
and they will do better.

The big trial (Yeager et al., 2019, *Nature*) randomised **65 schools and 11,888
students**. Result: maths GPA 2.48 vs 2.42. A real but **small** effect, and it
showed up **only for lower-achieving students**.

### What the re-analysis found

Sisk et al. (2018) reviewed 273 studies. The relationship between growth mindset
and achievement is about **r = 0.10**. Barely anything.

Several replications failed outright. One German study found the association
ran **backwards**: more fixed mindset went with *higher* maths grades.

### Where it is still worth using

- **It works for struggling students specifically.** That was Yeager's actual
  finding.
- **It works on top of real teaching**, not instead of it.
- Effect is largest for students at risk.

> **Do not build a page about growth mindset. It does not work on its own.**

### What to do instead

Dweck's actual mechanism is **attribution** - what a student believes caused
their result.

So instead of telling them "you can improve", **show them the evidence**:

- "You got this wrong in March. Now you get it right."
- "You have mastered 14 skills this month."
- A mastery chart that fills up with things you now know.

> **Give the student evidence of their own progress. Let them draw the
> conclusion. That is Dweck, delivered properly.**

---

## 7. The biggest lesson: students will not practise on their own

This is the finding that should change everything.

Across Khan Academy, DreamBox and Mindspark the pattern is identical:
**under 10 minutes a week of usage produces nothing.**

- Khan Academy's PNAS study: **0.031 SD at 11 minutes a week**
- Khan Academy's Uttar Pradesh trial: usage went from **7.2 to 47.4 minutes a
  week**, with **0.33-0.47 SD gains**, when they added **people**, not software
- The Sri Lankan trial (Weeraratne & Chin, 2018): +0.20 SD, but only because
  Khan Academy was scheduled into **2-3 of 5 weekly maths periods**

Their own summary of the Uttar Pradesh study: the intervention was not "add
Khan Academy". It was **"add a person whose job is to make it happen."**

> **A product that depends on a student choosing to practise has a ceiling near
> zero.**

### What this means for us

We cannot rely on motivation. We need something external to the student:

- A **place in the timetable** - ideally through a school or teacher
- A **weekly report to a parent** by WhatsApp, because parents pay
- A **simple, small, daily habit** rather than a big weekly session

---

## Summary: what we must build

| Principle | What it means in practice |
| --- | --- |
| **Worked examples first** | Every topic: worked example, then completion, then independent |
| **Diagnose errors** | Never just "Incorrect". Say what they did and what to do instead |
| **Errors are information** | Warm, non-punitive language. No red crosses |
| **Never predict failure** | Only show questions the student is likely to get right |
| **Build real fluency** | The anxiety fix is real teaching, not calming words |
| **Schedule for the student** | Spaced and mixed. They will not do it themselves |
| **Show progress as evidence** | Mastery charts, not streaks or leaderboards |
| **Use objects, pictures, then symbols** | For numbers, geometry and measurement |
| **Re-teach differently** | The correct step must not look like the first one |
| **Do not rely on motivation** | Timetable slot, parent report, small daily habit |

---

## What we should not do

- Do not make a page about growth mindset
- Do not build leaderboards or public rankings
- Do not let students discover methods with no example first
- Do not drill one topic for an hour
- Do not tell students to just practise more
- Do not promise based on retrieval practice, which is unproven in maths
- Do not show a screenshot of an equation (see [accessibility notes](#accessibility))
- Do not use AI to mark work when we cannot guarantee it is right

---

## Accessibility is a teaching method, not an extra

One practical note that ties straight into the above.

**A screenshot of an equation is the single most common way maths websites fail
the people who need them most.**

The standard is **MathML**, which carries meaning, not just appearance, so a
screen reader can read an equation properly instead of saying "slash".

- **Use MathJax v4**, not v3. v4 adds `aria-label` so screen readers work
  whether or not they understand MathML.
- Add `intent` to ambiguous notation. For Grade 10+, `|x|` could be absolute
  value or a determinant, and a screen reader will not know.
- **Alt text on every diagram.** An unlabelled graph is unusable.
- Avoid PDF for anything interactive. Accessible PDF support is still immature.

We do not yet know how good Sinhala and Tamil screen readers are. Both are hard
languages for speech synthesis. **We should test this before claiming
accessibility in either language.**

---

## Key papers

If you want to read the originals:

- Worked examples: [Kirschner, Sweller & Clark (2006)](https://www.sfu.ca/~jcnesbit/EDUC220/ThinkPaper/KirschnerSweller2006.pdf) ·
  [Van Gog et al. (2011)](https://www.sciencedirect.com/science/article/pii/S0361476X1000055X)
- Fading: [Paas, Renkl & Sweller (2003)](https://www.uky.edu/~gmswan3/544/Cognitive_Load_&_ID.pdf)
- Maths anxiety: [Ashcraft & Moore (2009)](https://journals.sagepub.com/doi/10.1177/0734282908330580) ·
  [2026 meta-analysis](https://psycnet.apa.org/record/2026-72037-001)
- Spacing: [Murray et al. (2025)](https://eric.ed.gov/?id=EJ1478558) ·
  [Hartwig et al. (2022)](http://uweb.cas.usf.edu/~drohrer/pdfs/Hartwig_et_al_2022JEPA.pdf)
- Mastery: [Bloom (1968)](https://eric.ed.gov/?id=ED053419) ·
  [Guskey (2007)](https://files.eric.ed.gov/fulltext/EJ786608.pdf) ·
  [Kulik et al. (1990)](https://doi.org/10.3102/00346543060002265)
- Tutoring effect size: [Nickow et al. (2020)](https://www.nber.org/system/files/working_papers/w27476/w27476.pdf)
- Growth mindset: [Yeager et al. (2019)](https://doi.org/10.1038/s41586-019-1466-y) ·
  [Sisk et al. (2018)](https://journals.sagepub.com/doi/10.1177/0956797617739704)
- CRA: [Ebner et al. (2025)](https://eric.ed.gov/?id=EJ1469639) ·
  [Bouck (2017)](https://journals.sagepub.com/doi/10.1177/0741932517721712)
- **Sri Lanka:** [Weeraratne & Chin (2018)](https://eric.ed.gov/?id=EJ1201489)
