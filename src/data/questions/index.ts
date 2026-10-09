/**
 * Question bank registry.
 *
 * Adding a competency means adding one file to this map. Nothing else changes.
 * That matters because the roadmap's biggest risk is quietly drifting into
 * thin content, and a registry with a single obvious insertion point makes
 * "which competencies have questions?" answerable by reading one file.
 */

import type { Question } from '../../lib/types';
import { questions as g6_3_2 } from './g6-3-2';
import { questions as g6_3_4 } from './g6-3-4';

/** Competency ids we have questions for. */
export const QUESTION_BANKS: Record<string, Question[]> = {
  '3.2': g6_3_2,
  '3.4': g6_3_4,
};

/**
 * Competency ids that have content but no practice questions yet.
 *
 * Kept explicit so the gap is visible rather than implied by absence.
 */
export const MISSING_QUESTION_BANKS = ['1.6', '3.1', '3.3', '4.1'] as const;

/** Questions for a competency, or an empty array if we have none yet. */
export function bankFor(competencyId: string): Question[] {
  return QUESTION_BANKS[competencyId] ?? [];
}

/** Independent questions, which are the only ones mastery is measured on. */
export function independentFor(competencyId: string): Question[] {
  return bankFor(competencyId).filter((q) => q.stage === 'independent');
}
