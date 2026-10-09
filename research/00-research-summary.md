# Research Summary

**Research date: 9 October 2026**

If you read one document in this folder, read this one.

---

## What we set out to do

Teach mathematics to Grade 6 to O-Level students in Sri Lanka, part-time, via a
website.

This document is what we found.

---

## The five findings that shape everything

### 1. Nobody is teaching. Everyone is just storing papers.

For Sri Lankan O-Level maths, almost everything online is an **archive** or a
**video**.

- Thousands of past papers, freely available
- Hundreds of excellent Sinhala YouTube channels
- A dozen tuition directories
- Some new AI tutors

**Not one of them diagnoses why a student got an answer wrong.**

The content exists. The teaching does not.

> **That is the entire opportunity. Not more content. The missing teaching
> layer.**

### 2. Sri Lanka cannot be reached by a normal online education product.

- Only **21.3% of households own a computer.** Rural 18.6%. Estates 5.2%.
- **80% of device use is smartphones.** Likely a shared family phone.
- Students spend **over LKR 2,000 a month on data.**
- There was a **nationwide blackout in February 2025.**
- Internet penetration is 59.7%, so **40% are offline entirely.**

The single most important technical decision we will make is therefore:
**static, mobile-first, low data, works offline.**

Not a preference. A requirement.

### 3. A wrong answer teaches the wrong thing. This is the whole game.

The research on what actually works is unusually clear, and it points somewhere
uncomfortable.

**Worked examples beat discovery for beginners.** Effect size d = 0.57. The
paper arguing discovery fails without scaffolding has over 1,400 citations.

But there is a catch nobody expects:

> **Immediate, emphatic error correction - the standard way edtech does mastery
> learning - is itself a documented cause of maths anxiety** (Ashcraft).

**About 1 in 6 students has maths anxiety.** It works by eating working memory,
which is why it damages carry operations and multi-step arithmetic specifically,
and why it hits hardest under exam time pressure.

And the intervention evidence is blunt:

> For **performance**, only skills-based teaching worked. Anxiety-only
> approaches improved feelings but **did not improve scores.**

So the fix for an anxious student is not reassurance. **It is teaching.**

> **Every product feature in this project reduces to one question: does this help
> a student actually get better at maths?**

### 4. Students will not practise on their own. This is the hard truth.

Across Khan Academy, DreamBox and Mindspark, the pattern is identical:

**Under 10 minutes a week of usage produces no measurable learning effect.**

- Khan Academy's PNAS study: 0.031 SD at 11 minutes a week
- Khan Academy's India trial: adding **people**, not software, moved usage from
  7 to 47 minutes a week and produced 0.33-0.47 SD gains
- The Sri Lankan trial: +0.20 SD, but **only because schools scheduled it into
  the timetable**

> **Any product that depends on a student choosing to practise has a ceiling
> near zero.**

This is why the weekly parent report is the highest-leverage idea we have. The
parent holds the money and sees the report card. And there is a reason parents
matter that is not commercial:

**Students systematically do not know what improves learning, and cannot
accurately predict their own progress.** A parent report supplies information
the child genuinely cannot supply. It is not nagging. It is data.

### 5. Tamil medium is the biggest gap in the country.

Out of roughly 1,066 indexed O-Level maths papers:

- **643 Sinhala**
- **412 English**
- **10 Tamil**

Against a system where **3,042 of roughly 9,000 schools are Tamil-medium.**

That is 1% of the content for 25% of the students.

Compounding it: the government has been pushing Mathematics to English-medium
instruction from Grade 6, so these students read English symbols while thinking in
Tamil, with access to roughly 10% of national English proficiency.

> **This is a genuine strategic decision, not a research finding.** Bigger
> mission, smaller revenue. It should be made deliberately.

---

## Corrections we had to make

Getting the syllabus from primary NIE documents and the actual exam paper
corrected several errors we had made from secondary sources:

| We had said | Actually |
| --- | --- |
| O/L exams run May-July | **December.** 2026 is 8-17 December |
| O/L has Pure, Applied and Combined Maths | **One subject, code 32.** Those are A-Level |
| The paper is worth 100 marks | **200 marks.** Two papers of 100 |
| MCQs are 1 mark each | **2 marks each** |
| Pass mark is 50 for a credit | **Unverified.** No official source. Do not publish it |
| Grade 6 is officially "Year 7" | **It is "Grade 6".** Year 7 is a UK mapping |
| Sinhala/Tamil students sit the English paper | **They sit it in their own language** |

> **The pattern is the lesson: every error came from a secondary source, and
> every correction came from a primary document.** For anything about the exam
> or syllabus, go to NIE and the Department of Examinations directly.

Two facts we only learned from the official 2025 paper:

- **Half of Paper I is not multiple choice.** 25 MCQs at 2 marks, then 5
  structured questions at 10 marks each. Students who revise only for MCQ are
  preparing for half the paper.
- **The syllabus gives equivalent fractions ONE 40-minute period.** It is the
  gateway to adding fractions, ratio, percentage and eventually algebra. That
  is a specific, official, defensible place for us to help.

---

## What the tutoring market tells us

**We are not competing with tutors, and we should not try to.**

- Tuition is a **parallel education system**, not an extra. 65% of urban and 61%
  of rural households use it.
- Families pay **LKR 1,500-3,000/month** for O/L maths.
- It works, it is trusted, and it runs on personal relationships and WhatsApp.

Our position should be: **the tutor's hour is 1-2 hours a week. Practice is the
other 160. We make the tutor more effective, and we are free.**

We should never claim to replace a human teacher. Nobody will believe it, and it
would be arrogant.

---

## What we should build

One sentence:

> **A free, mobile-first, trilingual practice engine that shows worked examples,
> diagnoses exactly what a student got wrong, reschedules their practice
> properly, and tells their parent it worked.**

| Priority | Feature | Why |
| --- | --- | --- |
| 1 | **Step-by-step worked examples** | The best-evidenced thing in this entire folder |
| 2 | **Diagnosis, not marking** | Novices cannot self-diagnose. Nobody else does this |
| 3 | **Fading ladder** | Worked, then completion, then independent |
| 4 | **A scheduler** | Spacing works. Students will not do it for us |
| 5 | **Fluency drill** | The real anxiety fix |
| 6 | **Weekly parent report** | Reaches the person who decides |
| 7 | **Phone, offline, low data** | Not optional |
| 8 | **Sinhala and Tamil** | Locks out 75% of students otherwise |
| 9 | **Printable worksheets** | The exam is on paper |

---

## What we should not build

| Idea | Why |
| --- | --- |
| Another past paper archive | Crowded, free, government already hosts them |
| Generic AI chatbot | Cannot guarantee correctness. Confidently wrong maths is the worst outcome |
| Video lessons | Expensive in data, dies on a bad connection, beaten by worked examples anyway |
| Leaderboards and streaks | Actively harms the ~20% with maths anxiety |
| A growth mindset page | r = 0.10. Barely works alone |
| Payments | Everyone else does bank transfer and manual receipt approval. Not where we win |
| A tutor marketplace | Every directory here has failed at it |
| An app | 21% of households have a computer. A link beats an install |
| Anything English-only | Locks out ~75% of students |

---

## Technology

**Astro, content in Markdown, static output, Cloudflare Pages.**

The reason is narrow and concrete: Astro ships almost no JavaScript by default.
A student on a slow phone with metered data gets a fast page. Most competing
sites send megabytes before showing anything.

Full reasoning in [11-technology.md](./11-technology.md).

**But:** the technology choice is not what determines whether this works. Choose
the boring fast thing, then spend the saved attention on explanations.

---

## Money

**Free. Deliberately.**

The market price is LKR 1,500-3,000/month, against a household education budget
averaging LKR 2,400. Our competitors are already cheaper than we could be.

> **Never charge a student for the teaching. Not even once, "just to test".**
> Charging turns a free tool that helps everyone into a business that competes
> with human tutors who are better at this.

If it ever makes money, it should be donations, sponsorship, or something for
parents. Never from the students using it.

---

## The risk

The risk is not building the wrong thing.

**The risk is building a good thing for nobody.**

Every assumption in this folder is a desk assumption. We have never met a
Sri Lankan student.

---

## What happens next

| Phase | Time | What |
| --- | --- | --- |
| **0** | 2 weeks | **Talk to 10 students and 10 parents** |
| 1 | 4-6 weeks | One Grade 6 topic, done properly |
| 2 | 3-4 weeks | Does a habit form? 20 students |
| 3 | 3-4 weeks | Does the parent report work? |
| 4 | Ongoing | More topics, then Sinhala, then Tamil |
| 5 | 3+ months | Distribution. One friendly teacher first |
| 6 | Maybe | Only if it works, and never from students |

**Phase 2 is where this usually fails.** Building one topic well is achievable
alone in a month. Getting a student to voluntarily return four times a week is
much harder, and it depends entirely on the teaching being good.

---

## Three things to do this week

1. **Talk to ten students and ten parents.** This is worth more than another
   month of research.
2. **Choose one Grade 6 topic.** Fractions, unless the conversations say
   otherwise.
3. **Write one worked example by hand, the way you would explain it to a stuck
   student sitting next to you.**

Step 3 costs an afternoon, and it is the part that decides whether this works.

If the explanation is not genuinely excellent when we write it carefully, we have
learned something important early, for free.

---

## Read next

| If you want to know about | Read |
| --- | --- |
| Who we are building for | [01-target-student.md](./01-target-student.md) |
| How Sri Lankan school works | [02-education-system.md](./02-education-system.md) |
| What teaching method works | [08-teaching-method.md](./08-teaching-method.md) |
| What everyone else is doing | [07-competitive-landscape.md](./07-competitive-landscape.md) |
| What to build | [09-website-ideas.md](./09-website-ideas.md) |
| What we still do not know | [14-open-questions.md](./14-open-questions.md) |
