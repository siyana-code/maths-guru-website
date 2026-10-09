# The Roadmap

**Research date: 9 October 2026**

A deliberately small plan. The biggest risk to this project is that we build a
large amount that nobody uses.

---

## The governing rule

> **One topic, properly taught, beats thirty topics taught badly.**

Everything below is sequenced so that we prove one thing before building the
next. This is not timidity. The research is clear that content quality is the
entire product, and content quality is slow, hard work that cannot be
parallelised.

---

## Phase 0: Talk to people (before writing any code)

**Time: about 2 weeks. Cost: near zero.**

This is the most important phase and it involves no technology at all.

### What to do

Speak to **10 students and 10 parents**.

| Who to ask | What to find out |
| --- | --- |
| Grade 6 students | Which chapter do they hate? What do they think went wrong? What do they already use? |
| Grade 11 students | What do they do before the exam? How do they revise? What do they understand but get wrong? |
| Parents | What did tuition cost? Did it work? What would make them happy? What do they want to see? |
| Teachers | What actually gets taught? What fails every year? |

### Ask about failure, not success

The most valuable question is not "would you use this?" Everyone says yes.

It is:

- **What have you already tried and given up on?**
- **What did you think was your problem, and what turned out to be the problem?**
- **What would make you close the tab?**

### Why this is first

Everything in our research folder is a **desk assumption**. We have never met a
Sri Lankan student.

We may have the wrong topic. The wrong language. The wrong time of day. The
wrong assumption about what students struggle with.

> **Ten conversations will tell us more than another month of building.**

### Done when

- We have written up what we heard
- We have identified **one specific topic** where we can clearly do better
- We have a rough sense of what a "good session" looks like from the student's side

---

## Phase 1: One topic, done properly

**Time: 4-6 weeks.**

Pick **one Grade 6 topic**. Fractions is the obvious candidate because:

- It is where the gap between confident and struggling students opens
- Almost every later topic depends on it
- Fractions are the classic example of something taught badly everywhere
- It suits the Concrete-Representational-Abstract approach
- Parents remember struggling with fractions

### What to build

| Piece | What it must do |
| --- | --- |
| **Worked examples** | Every step explained, with the *why*, not just the *what*. Say why you chose that method, not only how to do it |
| **Fading ladder** | Worked example, then completion problem, then independent problem |
| **Practice with diagnosis** | Wrong answer identifies the specific misconception, not just "incorrect" |
| **Fluency drill** | The boring arithmetic underneath, to free up working memory |
| **Mastery view** | "You could not do this in March. Now you can." |
| **Mobile, offline-tolerant** | Works on a phone, on a bad connection, survives a power cut |

### Quality bar

Before moving on, the topic must be genuinely good:

- Every step makes sense to someone who is stuck and behind
- Every error diagnosis names the actual misconception
- Nothing assumes knowledge the student may not have
- Works on a cheap phone on a bad connection
- Tested on **at least five real students**, watched, not just sent

### Done when

- Five real students have completed a session
- At least three got something wrong and the diagnosis helped them self-correct
- At least one came back on their own

> **If no student comes back on their own, the teaching is wrong, and no amount
> of extra content will fix it.**

---

## Phase 2: Does a habit form?

**Time: 3-4 weeks.**

Run with 10-20 students. No new features. Just watch.

### What we measure

| Metric | Target | Why |
| --- | --- | --- |
| Practice days per week | 4+ | The habit. This is the real product |
| Return within 7 days | 50%+ | Do they want to come back? |
| Errors diagnosed correctly | 80%+ | Is our engine actually right? |
| Session length | Under 10 min | Fits their day |
| Self-reported understanding | "Better" | Sanity check on the numbers |

### The uncomfortable truth

Under **10 minutes a week** of usage produces no measurable learning effect.

So "they opened it once" is a failure, not a success.

### Done when

- 10-20 students with 4+ practice days a week
- Our diagnosis engine is reliable enough that students trust it

---

## Phase 3: Do parents notice?

**Time: 3-4 weeks.**

Add the **weekly parent report**. This is the highest-leverage single feature in
the project, and it is also a test of whether we have misunderstood our own
customer.

### What to build

One WhatsApp message a week, plain text, to a parent:

```
This week: 5 practice days
Mastered: Fractions, Ratio
Still working: Algebraic fractions
One note: He got stuck twice on the same step,
then solved it himself.
```

- Simple text, not a dashboard
- Honest, including bad weeks
- Low data cost
- In the parent's language

### What we measure

| Metric | What it tells us |
| --- | --- |
| Do parents reply? | Are they reading it? |
| Do they ask questions? | Do they see value? |
| Do students continue because of it? | Is it motivating or nagging? |
| Would they pay for it? | The honest revenue signal |

### Done when

- Parents reply with questions
- Students keep practising
- We know whether this is valued or ignored

---

## Phase 4: Only now, scale the content

**Time: ongoing.**

Everything up to here has been **one topic, English, one small group of
students**. Now, and only now, we expand.

### Order of expansion

1. **More Grade 6 topics** - same engine, same quality
2. **Grade 7-8** - when we are confident about prerequisite tracking
3. **Grade 9-11** - the O-Level audience, who need past papers too
4. **Sinhala** - this should come earlier than it does here, but we need to
   validate the model first
5. **Tamil** - the biggest untapped opportunity, and the biggest commitment

### The trap to avoid

Adding content is easy and feels like progress. It is also the thing most likely
to dilute quality.

> **If a chapter is not as good as the first one, we should delete it rather
> than ship it.**

### On Tamil-first

The research says Tamil is 1% of content for 25% of students, which suggests
going Tamil-first. But:

- Smaller revenue base
- Harder to validate with users
- Parents mostly want Tamil-medium *tuition*

> **Tamil is a mission decision, not a revenue one. Make it deliberately, with
> eyes open, rather than as an accident of running out of English work.**

---

## Phase 5: Find a distribution channel

**Time: 3 months.**

The research is unambiguous that **motivation alone produces nothing**.

The best result in the entire literature came from Khan Academy in Sri Lankan
schools, and it worked **only because schools scheduled it into the timetable**.
Adding *people*, not software, moved usage from 7 to 47 minutes a week.

### What to try, in order

| Approach | Why |
| --- | --- |
| **One friendly teacher** | Cheapest, most effective. A teacher assigning our worksheets is worth more than any marketing |
| **Facebook groups** | Where parents already ask maths questions. Be genuinely helpful |
| **YouTube in Sinhala** | Partner with good teachers rather than replace them |
| **Google long-tail** | Slow, but compounds. One page per chapter x medium |
| **A school pilot** | Slow and bureaucratic, but the only thing that really works |

### Note on SEO

It should be a **months-long compounding asset**, not a quick win. The
`hreflang` and structured content work is cheap and should start early, but
nobody should expect traffic in the first month.

---

## Phase 6: Only if it works, consider a business

**Time: only after Phase 5 shows real usage.**

If and only if there is real, repeated use:

- Donations button (add it early, expect little)
- Grant applications (for the work, not the ambition)
- Sponsored content (sponsor the platform, never the teaching)
- **Never charge students for the teaching**

See [10-making-money.md](./10-making-money.md).

---

## What we are deliberately not doing

| Not doing | Why |
| --- | --- |
| An app | 21% of households have a computer. A link beats an install |
| A CMS | We are the editors. Git gives review for free |
| Accounts | Friction and data cost. Add only when a feature needs it |
| Payments | Not our problem to solve |
| A marketplace | Every directory here has failed at it |
| Video lessons | Expensive in data. Worked examples beat video anyway |
| All three languages at once | We cannot tell whether a problem is teaching or language until we test |
| Hundreds of chapters | One good chapter is worth more than a hundred mediocre ones |

---

## The timeline, honestly

| Phase | Realistic time | Confidence |
| --- | --- | --- |
| 0. Talk to people | 2 weeks | High |
| 1. One topic | 4-6 weeks | Medium |
| 2. Does a habit form? | 3-4 weeks | Medium. **This is where it usually fails** |
| 3. Parents | 3-4 weeks | Medium |
| 4. More content | Ongoing | Low. Depends entirely on Phase 1 |
| 5. Distribution | 3+ months | Low |

**The honest risk is Phase 2.** Building one topic well is achievable alone in
a month. Getting a student to voluntarily come back four times a week is much
harder, and it depends on the teaching being genuinely good.

---

## The next three actions

Concretely, this week:

1. **Find ten students and ten parents to talk to.** Through our own network,
   tuition contacts, or a teacher we know.
2. **Choose one Grade 6 topic.** Fractions, unless the conversations say
   otherwise.
3. **Write one worked example by hand, the way we would explain it to a stuck
   student sitting next to us.** If that is not excellent, no framework will
   save it.

> Step 3 costs nothing and is the part that determines whether this works. If
> the explanation is not genuinely good when we write it carefully, we have
> learned something important early, for the price of an afternoon.
