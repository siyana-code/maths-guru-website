/**
 * Question bank for NIE Grade 6 competency 3.2 - equivalent fractions.
 *
 * Structure mirrors research/09-website-ideas.md:
 *   worked        - the demonstration (delivered in the lesson page)
 *   completion    - we start it, they finish
 *   independent   - they do it alone
 *
 * Every question carries diagnoses. That is the product.
 *
 * WHY THE accept LISTS ARE LONGER THAN "ANSWER":
 * A student who writes 4/6 where 2/3 is the target has not made a mistake.
 * Marking that wrong is exactly the emphatic error correction that Ashcraft
 * (2002) identifies as a documented *cause* of maths anxiety. So wherever a
 * form is mathematically correct, we accept it.
 */

import type { Question } from '../../lib/types';

export const questions: Question[] = [
  // ---------------------------------------------------------------------
  // COMPLETION - we start, they finish
  // ---------------------------------------------------------------------
  {
    id: 'g6-3-2-c1',
    competencyId: '3.2',
    stage: 'completion',
    prompt: 'Finish this. What goes in the gap?',
    math: '\\frac{1}{2} = \\frac{\\square}{8}',
    completionStart: 'Multiply both numbers by the same amount. The bottom went from 2 to 8, which is multiplying by 4. Now do the same to the top.',
    accept: ['4', '4/8'],
    explain:
      '1 out of 2 and 4 out of 8 are both half. Multiplying the top and the bottom by the same number keeps the amount the same.',
    hints: [
      'The bottom number went from 2 to 8. What did we multiply by?',
      'Now multiply the top number, 1, by that same amount.',
    ],
    diagnoses: [
      {
        when: ['2', '8', '2/8'],
        say: 'The gap needs a single number, not a fraction.',
        because:
          'The answer goes in the empty box on top. 2/8 is the finished fraction, which is actually right as a whole - it is just not what the box is asking for.',
        instead: 'Look at the box on its own. What single number goes in it?',
      },
      {
        when: ['1', '1/8'],
        say: 'You kept the top number the same.',
        because:
          'When the bottom number changes, the top has to change by the same amount. If only the bottom moves, the fraction shows a different amount - and it is a smaller one.',
        instead: 'Bottom went from 2 to 8. Do the same to the top.',
      },
      {
        when: ['6', '3/4'],
        say: 'That is a different fraction entirely.',
        because: 'The box is asking for the top number only, and the denominator is already fixed at 8.',
        instead: 'Keep the 8. Change only the number on top.',
      },
    ],
  },
  {
    id: 'g6-3-2-c2',
    competencyId: '3.2',
    stage: 'completion',
    prompt: 'Finish this one.',
    math: '\\frac{2}{3} = \\frac{\\square}{12}',
    completionStart:
      'The bottom went from 3 to 12, so we multiplied by 4. The top was 2.',
    accept: ['8', '8/12'],
    explain:
      '2 out of 3 and 8 out of 12 are the same amount. Check by dividing both: 2÷2 and 3÷2 gives back 1 and 1.5, and 8÷4, 12÷4 also matches.',
    hints: [
      'How many times does 3 fit into 12?',
      'Multiply the top by that same number.',
    ],
    diagnoses: [
      {
        when: ['4', '4/12'],
        say: 'You multiplied by 2, but the bottom went to 12, not 6.',
        because:
          'Multiplying 3 by 2 gives 6, and 3 by 4 gives 12. We have to match the bottom number exactly.',
        instead: 'How many times does 3 fit into 12?',
      },
      {
        when: ['2', '2/12'],
        say: 'The top number stayed the same.',
        because:
          'The bottom number went up, so the top has to go up with it. Otherwise you have shrunk the fraction.',
        instead: 'Match the bottom first: 3 to 12. Then do the same to the top.',
      },
      {
        when: ['6', '6/12'],
        say: 'Close, but that halves the fraction instead of matching it.',
        because:
          '6 out of 12 is 1/2, which is smaller than 2/3. You have gone the wrong way - we need a fraction worth the same or more, not less.',
        instead: 'Work out what 3 has to be multiplied by to become 12.',
      },
    ],
  },

  // ---------------------------------------------------------------------
  // INDEPENDENT - they do it alone. These are what mastery is measured on.
  // ---------------------------------------------------------------------
  {
    id: 'g6-3-2-i1',
    competencyId: '3.2',
    stage: 'independent',
    prompt: 'Write 1/3 with a bottom number of 9.',
    accept: ['3', '3/9'],
    explain:
      'Multiplying both numbers by 3 gives 3/9. Check: 1÷3 and 3÷9 are both about 0.333.',
    hints: [
      'How many times does 3 fit into 9?',
      'Multiply the top by that same number.',
    ],
    diagnoses: [
      {
        when: ['2', '2/9'],
        say: 'You added 1 to the top instead of multiplying.',
        because:
          'Adding to the top and bottom separately changes the amount. That is the mistake this whole lesson is about.',
        instead: 'Work out what 3 was multiplied by to reach 9, then do that to the 1.',
      },
      {
        when: ['9', '1/9', '9/9'],
        say: 'The top number is not right.',
        because: 'The bottom number is 9. The top tells you how many of those 9 parts to take.',
        instead: 'Keep the bottom at 9. How many ninths make a third?',
      },
      {
        when: ['4', '4/9'],
        say: 'That is a bit more than a third.',
        because: '4 out of 9 is about 0.44. A third is about 0.33.',
        instead: 'How many times does 3 fit into 9? Multiply the top by that.',
      },
    ],
  },
  {
    id: 'g6-3-2-i2',
    competencyId: '3.2',
    stage: 'independent',
    prompt: 'Write 2/5 with a bottom number of 20.',
    accept: ['8', '8/20'],
    explain:
      'Multiplying both by 4 gives 8/20. Check by dividing both numbers by 4 to get back to 2 and 5.',
    hints: [
      'How many times does 5 fit into 20?',
      'Multiply the top, 2, by that same number.',
    ],
    diagnoses: [
      {
        when: ['17', '2/20', '3/20'],
        say: 'The bottom is right but the top is not.',
        because:
          'Once you have matched the bottom number, the top has to be multiplied by exactly the same amount. Changing only the top gives a different amount.',
        instead: 'Bottom went 5 to 20, so multiply by 4. Now multiply the top by 4 too.',
      },
      {
        when: ['10', '5/20', '10/20'],
        say: 'That is half, which is bigger than two fifths.',
        because: 'Two fifths is about 0.4. Half is 0.5. You have gone too far up.',
        instead: 'Check how many times 5 fits into 20. Use exactly that multiplier.',
      },
      {
        when: ['4', '4/20', '1/5'],
        say: 'That is smaller than 2/5.',
        because: 'One fifth is 0.2. Two fifths is 0.4, which is double.',
        instead: 'The bottom number went up, so the top number has to go up too.',
      },
    ],
  },
  {
    id: 'g6-3-2-i3',
    competencyId: '3.2',
    stage: 'independent',
    prompt: 'Which is bigger? 3/4 or 6/8',
    accept: ['theyarethesame', 'same', 'equal', 'boththe same', 'bothequal', 'none', 'neither'],
    explain:
      'They are exactly equal. Both are 0.75. Dividing both numbers of 6/8 by 2 gets you back to 3/4.',
    hints: [
      'Can you get from 6/8 back to 3/4 by dividing both numbers by the same amount?',
      '6 and 8 can both be divided by 2.',
    ],
    diagnoses: [
      {
        when: ['3/4', '6/8'],
        say: 'One of these is the answer, but there is only one correct answer here.',
        because:
          'The question asks which is bigger. If you think one is bigger, you are saying they are different amounts.',
        instead:
          'Try dividing both the 6 and the 8 by 2. What happens?',
      },
      {
        when: ['6/8'],
        say: 'That is not bigger than 3/4. They are the same amount.',
        because:
          'When the bottom number gets bigger, the top usually gets bigger too, by the same amount, and the fraction stays equal.',
        instead: 'Halve both numbers in 6/8. Do you get 3/4?',
      },
    ],
  },
  {
    id: 'g6-3-2-i4',
    competencyId: '3.2',
    stage: 'independent',
    prompt: 'Write 4/6 in its smallest form.',
    accept: ['2/3', '2/3.', '⅔'],
    explain:
      'Dividing both numbers by 2 gives 2/3, and you cannot go any smaller because 2 and 3 have no common factor. That is why it is the simplest form.',
    hints: [
      'Can you divide both numbers by the same number?',
      'Both 4 and 6 can be divided by 2.',
    ],
    diagnoses: [
      {
        when: ['4/6', '4/6.'],
        say: 'That is the fraction you started with.',
        because:
          'To put a fraction into its smallest form you need to make both numbers as small as possible while keeping the amount the same.',
        instead: 'Both 4 and 6 can be divided by 2. Try it.',
      },
      {
        when: ['1/2', '⅓'],
        say: 'That is a different amount.',
        because:
          'When you divide, you have to divide both numbers by the same amount, and by a number that divides both cleanly.',
        instead: 'Find a number that divides 4 and also divides 6.',
      },
      {
        when: ['2/4'],
        say: 'Closer, but there is still a common factor left.',
        because: '2 and 4 can both be divided by 2 again.',
        instead: 'Keep going until neither number can be divided by anything except 1.',
      },
    ],
  },
  {
    id: 'g6-3-2-i5',
    competencyId: '3.2',
    stage: 'independent',
    prompt: 'Write 3/4 with a bottom number of 12.',
    accept: ['9', '9/12'],
    explain:
      'Multiplying both numbers by 3 gives 9/12. Check: 9÷3 and 12÷3 both give 3 and 4, back where you started.',
    hints: [
      'How many times does 4 fit into 12?',
      'Multiply the top, 3, by that same number.',
    ],
    diagnoses: [
      {
        when: ['6', '6/12', '1/2'],
        say: 'You multiplied by 2, but the bottom needs to be 12.',
        because: '4 multiplied by 2 is 8, not 12. We have to reach exactly 12.',
        instead: 'How many times does 4 fit into 12?',
      },
      {
        when: ['3', '3/12', '1/4'],
        say: 'The top number stayed the same.',
        because:
          'That makes the fraction smaller. Once the bottom number goes up, the top has to go up by the same amount.',
        instead: 'Multiply the top by whatever turns 4 into 12.',
      },
      {
        when: ['8', '8/12'],
        say: 'That one is 2/3, not 3/4.',
        because:
          'You multiplied the top by a different amount than the bottom. 3 times 2 is 6, not 8.',
        instead: 'Match the bottom first. Then use that same number on the top.',
      },
    ],
  },
];

/** Questions a student can actually be marked on for mastery. */
export const independentQuestions = questions.filter(
  (q) => q.stage === 'independent',
);

/** Everything, for the lesson page's practice link. */
export const allQuestions = questions;
