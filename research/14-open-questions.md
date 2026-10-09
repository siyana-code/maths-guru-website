# Questions We Still Cannot Answer

**Research date: 9 October 2026**

Everything in this research folder was done from a desk. Nobody has been
interviewed, nothing has been tested, and some of what is written here is
careful inference rather than fact.

This file exists so that we do not forget which is which.

---

## The gap that matters most

**We have never met a single Sri Lankan student.**

Everything we believe about what students struggle with, what they want, and
what would make them use this, is assumption.

> **Reading ten conversations with real students will change more of our
> thinking than another month of research.**

This is item one in [the roadmap](./13-roadmap.md) and it is not optional.

---

## Questions about students

### Do we have the right topic?

We chose Grade 6 fractions because the gap opens there and because everything
later depends on it.

**We do not know** whether that is the chapter students most struggle with,
whether it is the chapter they would most want help with, or whether they would
rather practise something they already half-know.

### Is Grade 6 really our best first segment?

Our reasoning: most to gain, nobody competing, cheapest content to build.

**We have not checked** whether Grade 6 students have the independence to use a
website unprompted, or whether we would be building for the segment least able
to help itself.

### Will they come back?

**This is the big one.**

The research says that under 10 minutes a week of usage produces no measurable
effect, and that motivation-driven products hit a ceiling near zero.

Nobody knows whether our content will be good enough to become a habit.

### What do they think is wrong with their maths?

We assume they do not know, and that the gap is in foundations.

**It might be entirely different.** They might know exactly where they are stuck
and just lack practice. Or they might have a completely mistaken mental model
that has survived years of passing exams.

### Do they want to be told they are bad at maths, or handled gently?

We have designed for dignity and non-punitive error messages.

**Nobody has asked a real student how they would rather be treated when they get
something wrong.** This is a genuinely open design question.

---

## Questions about parents

### Will they read a report?

Parents are the paying customer. We assume they want evidence.

**Unverified.** They may not open WhatsApp messages from a website, they may not
check a weekly summary, or they may find it confusing.

### Would they pay?

We have decided the teaching stays free. But:

- Would they pay for printable packs, for multiple children, for history?
- Is there any version of this they would pay for?

**We do not know, and we should not guess by asking.** Ask what they currently
pay for and why.

### What do they worry about?

We assume: wasted money, a struggling child, not knowing what is happening.

Parents may worry about things we have not considered, particularly around
safety, screen time, or whether online learning is adequate at all.

---

## Questions about the market

### How do families actually find tutors?

**There is no published data for Sri Lanka.** Our ranking (Facebook, then
WhatsApp, then YouTube, then Google) is an inference from platform sizes and how
the existing sites are built.

This should be validated before any marketing spend.

### What do tutors actually charge?

**There is no reliable rate data anywhere.** Everything we have comes from
advertised asking prices, which are reliably higher than what people agree to
pay.

The HIES household education figure (LKR 2,401/month) and the IPS tuition figures
(LKR 3,000-7,000 for low-income households) are **internally inconsistent**. We
have not reconciled them, and we should not build a market size estimate on top
of numbers that disagree with each other.

### How big is the opportunity?

Unknown. Roughly:

- 3.6 million students in Grades 1-11
- Maybe a third use private tuition
- We know nothing about how many would use a free website instead

**No defensible market size exists.** Any number we produce would be invented.

### Are the directories real?

Several of the main tuition platforms show signs of being built and abandoned.
Templated layouts, suspiciously clean numbers, implausibly tidy inventories.

**We should not assume they have real scale**, and we should not build a plan
that depends on their weakness.

---

## Questions about the pedagogy

### Does our diagnosis engine work?

The research says diagnosis is the differentiator, and that novices cannot
self-diagnose.

**But no one has checked** whether we can correctly identify the *reason* a
student got an answer wrong, in real time, across a syllabus we know well.

This is the most technically uncertain part of the project.

### Does the Content-Representational-Abstract approach work for our specific topics?

The evidence is strong for primary maths and weak for secondary. Fractions,
ratio and area are well covered. Trigonometry in Grade 11 is not.

**We have not mapped our syllabus chapters against where the evidence is
strong.**

### Will spaced practice survive contact with a real student?

The evidence for spacing in maths is solid but modest (g = 0.24 in real
courses), and students systematically undervalue it.

**We do not know** whether a scheduler feels helpful or like an algorithm
fighting the student. It may work on paper and annoy in practice.

### Does the anxiety design actually work?

We have a strong evidence base for what reduces maths anxiety.

**But we have not tested whether our error messages actually feel right to an
anxious student.** One student who is scared of maths is worth ten who are not.

---

## Questions about language

### Is English-first a defensible starting point?

English is the language of the symbols, and Maths is officially taught in
English from Grade 6.

**But only about 10% of students reach target English proficiency.** Starting in
English may exclude exactly the students with the biggest gaps.

Starting in Sinhala means the students who understand English words fastest get
the slower product.

### Should Tamil come first?

1% of indexed content for 25% of schools is a genuine and striking gap.

**But**: smaller revenue, harder user validation, and Tamil-medium parents
mostly want Tamil-medium tuition, which is a human relationship.

> **This is a genuine strategic decision, not a research finding.** Make it
> deliberately.

### Are we capable of writing good maths in three languages?

This is not a research question. It is the real constraint, and it is the one
most likely to limit us.

**Nobody on this project has yet written a single page of mathematics in Sinhala
or Tamil.** Before committing to trilingual, someone should try. If we cannot
write clearly in Tamil, we should not promise Tamil.

---

## Questions about technology

### Will static generation handle an adaptive engine?

The recommended stack optimises for content pages.

**The practice engine with real scheduling and diagnosis is dynamic.** How much
of that we can keep static, and where we need a server, is unresolved.

### Do we need accounts?

The recommendation is no accounts initially, with progress in the browser.

**But** that loses progress when a student changes phone, clears the browser, or
shares the family phone. We do not know how often that happens.

The parent report may force accounts. We do not yet know how.

---

## What is genuinely uncertain, ranked

| Question | How much it matters | How we find out |
| --- | --- | --- |
| Will students come back? | **Everything** | Phase 2. Build one topic, watch 20 students |
| Does the teaching work? | **Everything** | Phase 1. Watch five real students struggle |
| Is Grade 6 the right first segment? | High | Phase 0 conversations |
| Can we write good maths in Sinhala and Tamil? | High | Just try. One page |
| Does the diagnosis engine work? | High | Phase 1, deliberately |
| Will parents read a report? | High | Phase 3 |
| Do we have the right topic? | High | Phase 0 |
| Which channel brings students? | Medium | Measure from day one |
| Are competitors real? | Medium | They will show us by not responding |
| Is there money in this? | Low | Deliberately out of scope |
| How big is the market? | Low | Deliberately not estimated |

---

## The research we still need

In priority order:

1. **Ten student conversations.** More valuable than all of the above combined
2. **Ten parent conversations.** Same
3. **One real lesson, taught, watched.** See where they actually get stuck
4. **Re-verify the exam calendar.** Dates move, and we should check
5. **Actual search volume data.** Google Keyword Planner, which we do not have
   access to
6. **Sinhala and Tamil screen-reader testing.** Determines whether our
   accessibility work is real or theoretical
7. **A proper Colombo-versus-rural price survey.** Only if we ever need the
   number

---

## A closing note

The riskiest thing about this project is not that we build the wrong thing. It
is that we build a good thing for nobody.

**Every assumption in this folder is a hypothesis.** The plan in
[the roadmap](./13-roadmap.md) is designed to test them in the cheapest order
possible, starting with talking to people rather than writing code.

If we are wrong about something, we want to find out from a student in week one,
not from a year of work.

---

## Sources and confidence

Every claim in this folder is either:

- **Verified** against a source listed in [sources.md](./sources.md)
- **Inference** - our reasoning, marked as such
- **Unverified** - flagged in the document where it appears

**No figure in this folder should be quoted externally without checking its
source.** Several are asking prices rather than agreed prices, several are from
single data points, and several are inferences from a single source.

That is normal for early research. It is not acceptable for a public website.
