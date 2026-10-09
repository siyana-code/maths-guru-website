# Where Do Students Find Us?

**Research date: 9 October 2026**

How would a student in Colombo, Matara or Batticaloa actually find this
website? And where should we spend our effort?

---

## First, the honest caveat

**Nobody has studied how Sri Lankan families search for education. No such data
exists.**

So this document is built from two things we can measure:

1. **Platform reach** - published user numbers
2. **What the existing platforms do** - observed from how they are built

Where we are guessing, we say so. Treat the ranking as a hypothesis to test,
not a finding.

---

## Platform reach in Sri Lanka

End of 2025, per DataReportal:

| Platform | Users | Growth |
| --- | --- | --- |
| **Facebook** | 9.0 million (52.5% of adults) | +14.6% |
| **YouTube** | 8.8 million (63.5% of internet users) | +8.5% |
| **TikTok** (18+) | 6.8 million (39.7% of adults) | **+25.5%** |
| **Messenger** | 4.05 million | +3.8% |
| **LinkedIn** | 2.90 million | +16.0% |
| **Instagram** | 2.25 million | +21.6% |
| **X** | 250,000 | -16.9% |
| **WhatsApp** | No published figure | - |

### The other half of the picture

- **Internet penetration is 59.7%** - so **40% of Sri Lankans are offline.**
- **80.3% of the population lives rurally.**
- Median mobile download speed is 45.6 Mbps, up 141% in a year.

**Speed is no longer the problem. Being online at all still is, and owning a
computer is still rare** (21.3% of households, 18.6% rural, 5.2% estates).

---

## Our ranking, and why

### 1. Facebook - the discovery layer

**The biggest audience, and the one that contains parents.**

Tutor hunting happens in Facebook groups. We found active ones with real rules -
[Sri Lanka Tuition Hub](https://www.facebook.com/groups/604464832290284/) requires
listings to specify "subject, grade, class format, location and WhatsApp/phone
contact details". That tells you what a listing looks like and who writes them.

The pattern is consistent: **Facebook finds, WhatsApp closes.**

We should not try to replace Facebook. We should show up inside it where maths
help is already being asked for.

### 2. WhatsApp - where decisions actually happen

Every single platform funnels here: patashala ("Talk directly on WhatsApp, no
middlemen"), findteachers.lk, slclasses.lk, panthi.lk, Paths.lk.

Even our online-maths competitors run **WhatsApp channels as their main
enrolment funnel.**

WhatsApp is also almost certainly how fees and homework get exchanged today.

> **We do not need to build a WhatsApp integration. We need to know that if we
> ever want to reach a parent, WhatsApp is the channel, not email.**

### 3. YouTube - where parents do their research

A Grade 11 parent will watch Sinhala maths videos before paying anyone. Every
serious tutor business maintains a channel.

Low direct conversion, high trust-building. And notice: this is mostly a Sinhala
video market, which means the people producing good Sinhala maths content are
already visible and trusted.

**They are potential collaborators, not competitors.**

### 4. TikTok - fastest growing, weakest evidence

+25.5% growth. But we found no evidence it converts to paid tuition.

There is also a reputational risk. The "tuition mafia" critique circulating in
Sri Lankan social discourse specifically accuses big tutors of using TikTok for
motivational content aimed at students, showing off success, rather than
delivering value.

**We should not copy that playbook.** A maths site built on hype content would be
judged by that standard from day one.

### 5. Google - small, high intent, and almost empty

This is the interesting one.

**Nobody in the Sri Lankan tuition market ranks on Google.** Local directory
sites are barely indexed.

But for *study content*, search is real, and the language opportunity is
measurable:

- **`english to sinhala translate` - around 1,000,000 searches a month** in
  Sri Lanka, with a low difficulty score (22) according to third-party keyword
  data
- `google translate english to sinhala` - around 823,000 a month

That single data point establishes two things:

1. Sinhala-language search is **mainstream and enormous**
2. **Low competition on specific Sinhala long-tail queries is real**

### What ranks in Sinhala maths search

We read the actual ranking pages. The winners are:

| Format | Example |
| --- | --- |
| Paper archives by grade and medium | mathspapers.info, govdoc.lk |
| One page per textbook lesson, with answers | pastpapers.wiki (organised by lesson number, Sinhala terms glossed in English) |
| Government lesson pages | e-thaksalawa (208 Grade 10 Sinhala lessons) |
| YouTube-led sites | Ganitha Ennatha |

**Not one of them teaches.** Every top result is an archive or a video.

### The long-tail opportunity

Here is the structural advantage that does not exist in the UK or US:

**The syllabus is a published, stable, named list of chapters per grade.**

We can enumerate the entire keyword surface before writing a single page:

```
13 grades x ~32 chapters x 3 media x ~5 query patterns
= roughly 6,000 addressable long-tail queries
```

Real examples of these queries:

- `grade 10 trigonometry sinhala medium`
- `ප්‍රස්ථාර ගණිතය` (geometry)
- `ප්‍රතිශත` (percentage)
- `සමීකරණ` (algebra)
- `ලඝුගණක` (logarithm)
- `grade 11 2nd term test paper 2025 sinhala medium western province`
- `how to find the area of a trapezium`

And school-specific ones, because parents search for **their own school's**
papers: Royal College, Ananda, Visakha, Musaeus, Richmond.

### A technical advantage nobody is using

Three languages with three distinct search intents, and almost certainly **no
existing site implements `hreflang` correctly** across `si-LK`, `ta-LK`, `en-LK`.

That is cheap to do and gives a durable structural advantage. Google currently
cannot tell these sites their content is the same in three languages.

### The competition is technically careless

One competitor still has the literal placeholder string `xxxxx` in its meta
description, live on the site. Another was flagged for repetitive keyword
density.

An archive site with correct titles, real descriptions, proper `hreflang` and
clean structured data would outrank most of them within months.

> **The lesson: we do not need to be the biggest. We need to be the correct one
> page, clearly, faster than everybody else.**

---

## What we should do

### Where we should not spend effort

- **X/Twitter** - 250,000 users and shrinking
- **Instagram** - wrong format for teaching maths
- **Paid ads** - no budget, and we do not yet know what converts
- **TikTok hype content** - fast growth, weak conversion, reputational risk

### Where we should

| Channel | Why | Effort |
| --- | --- | --- |
| **Google, Sinhala long-tail** | Low competition, real volume, high intent | Medium |
| **`hreflang` across three languages** | Cheap, durable, nobody does it | Low |
| **YouTube, in Sinhala** | Trusted, huge, works with teachers | High |
| **Facebook groups** | Where parents actually ask questions | Low |
| **WhatsApp for parents** | Where trust is confirmed | Low, later |
| **Tamil content** | 1% of supply, 25% of the market | High |

---

## The strategy that fits the evidence

### Lead with content that ranks

One page per **chapter x grade x medium**, written well, in the right language.
Free, fast, low data. That is the durable asset.

### Use YouTube to build trust, not to replace

Our best move with YouTube is not making videos. It is **sending students to
the Sinhala teachers they already trust, then giving them somewhere to
practise.**

That costs us nothing and costs them nothing. It is the honest position: we are
the practice partner for the excellent teachers already working.

### Let the site be findable by parents searching for their child's school

`royal college grade 10 maths term test` style queries have motivated parents
who are ready to act. That is our customer.

### Build the habit through WhatsApp, eventually

Not a full integration. A weekly message to a parent: what was practised, what
was mastered, what needs work.

Remember why this matters: **students do not know what improves learning, and
cannot predict their own progress.** A parent report is giving a family
information the child cannot supply. That is genuinely useful, not nagging.

---

## What to measure

We will not know which channel works until we measure it. From day one:

| Metric | Why it matters |
| --- | --- |
| Which pages get organic search traffic | Where the demand really is |
| Which language converts | Validates or kills the Tamil bet |
| Where new students actually come from | Tests our channel ranking |
| D7 and D30 retention | Whether ten minutes became a habit |
| Practice days per week | The habit metric parents care about |

> **Our channel ranking is a hypothesis. Measuring it honestly is how we find
> out whether it was wrong.**

---

## Open questions

- **No Google Keyword Planner data.** We could not access real search volumes
  for Sri Lanka. The "1 million monthly searches" figure comes from a
  third-party aggregator and should be re-verified.
- **No Sinhala Google Trends data.** This would materially improve the ranking.
- **We do not know our conversion rate** because we have no product.
- **We do not know what a Sri Lankan student searches for**, as opposed to what a
  parent searches for. Likely different.
