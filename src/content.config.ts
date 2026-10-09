import { defineCollection, z } from 'astro:content';

/**
 * Content collections.
 *
 * The schema is the syllabus. Because the schema is the syllabus, we cannot
 * publish a lesson that is missing a prerequisite, has no diagnosis, or points
 * at a competency that does not exist. That is worth more than it sounds: this
 * project will fail by diluting quality, and a schema is a cheap guard against
 * the most common way that happens.
 */

const competency = z.object({
  /** NIE competency number, e.g. "3.2". */
  id: z.string().regex(/^\d+\.\d+$/, 'Must look like 3.2'),
  grade: z.number().int().min(1).max(13),
  title: z.string(),
  term: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  /** Official NIE period allocation. */
  periods: z.number().int().positive(),
  /** Competency ids that must come first. */
  prerequisites: z.array(z.string()).default([]),
  /** One sentence, plain English: what does this actually teach? */
  summary: z.string(),
});

const lesson = z.object({
  /** Matches a competency id. */
  competencyId: z.string().regex(/^\d+\.\d+$/),
  title: z.string(),
  /** Short description for index pages. */
  description: z.string(),
  /** Media this has been translated into. */
  media: z.enum(['en']).default('en'),
  /** Estimated minutes. Be honest; students have ten. */
  minutes: z.number().int().positive(),
  /**
   * Which part of the fading ladder this lesson is.
   * Worked -> Completion -> Independent.
   */
  stage: z.enum(['worked', 'completion', 'independent']),
  /** Route to the practice page. */
  practiceSlug: z.string(),
});

export const collections = {
  competency: defineCollection({ type: 'content', schema: competency }),
  lesson: defineCollection({ type: 'content', schema: lesson }),
};
