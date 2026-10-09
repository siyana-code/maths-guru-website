/**
 * Question bank for NIE Grade 6 competency 3.4 - adding and subtracting
 * fractions with equal and related denominators.
 *
 * Note the accept lists. A student who writes 4/6 where 2/3 is expected has not
 * made a mistake, and marking it wrong teaches anxiety rather than maths
 * (Ashcraft 2002). So wherever a form is mathematically correct, we accept it.
 *
 * The diagnoses focus on the three errors that account for nearly all wrong
 * answers here:
 *   1. Adding the bottoms as well as the tops
 *   2. Using the same multiplier for both fractions
 *   3. Simplifying the wrong part
 */

import type { Question } from '../../lib/types';

export const questions: Question[] = [
  // ---------------------------------------------------------------------
  // COMPLETION - we start, they finish
  // ---------------------------------------------------------------------
  {
    id: 'g6-3-4-c1',
    competencyId: '3.4',
    stage: 'completion',
    prompt: 'Finish this. What number goes in the gap?',
    math: '\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{\\square}{6}',
    completionStart:
      'We have already rewritten the first fraction as 3/6. Now do the same to the second one.',
    accept: ['2', '2/6'],
    explain:
      'The second fraction needed multiplying by 2 to turn its bottom from 3 into 6, so its top went from 1 to 2. Then 3 + 2 = 5, so the answer is 5/6.',
    hints: [
      'The bottom went from 3 to 6. What did we multiply by?',
      'Now multiply the top, which is 1, by that same number.',
    ],
    diagnoses: [
      {
        when: ['1', '1/6', '3', '3/6'],
        say: 'That top number is the same, so nothing changed.',
        because:
          'When the bottom number changes, the top has to change by the same amount. If only the bottom moves, the fraction shows a different amount.',
        instead:
          'Bottom went from 3 to 6. Multiply the top by that same amount.',
      },
      {
        when: ['6', '6/6', '18'],
        say: 'That is much too big.',
        because:
          '1/3 is smaller than 1/2, so the second fraction must be smaller than 3 out of 6. Your answer is bigger than the first fraction.',
        instead:
          'Think of it as thirds. How many thirds are there in one sixth? Half of one.',
      },
    ],
  },
  {
    id: 'g6-3-4-c2',
    competencyId: '3.4',
    stage: 'completion',
    prompt: 'Finish this. What is the whole answer?',
    math: '\\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{\\square}{12}',
    completionStart:
      'Both fractions have been rewritten with the bottom 12. Add the tops.',
    accept: ['5', '5/12'],
    explain:
      '3 + 2 = 5, so the answer is 5/12. Both 5 and 12 have no common factor, so it is already in its smallest form.',
    hints: ['Just add the two top numbers.', '3 plus 2.'],
    diagnoses: [
      {
        // Covers the classic error of adding 4+6=10 on the bottom too.
        when: ['5/24', '5/10', '5/8', '6', '24', '10'],
        say: 'You added the bottoms as well as the tops.',
        because:
          'Once the bottoms match, only the tops get added. The bottom number is the size of each piece, and that size does not change when you add pieces together.',
        instead:
          'Both fractions already have 12 on the bottom, so leave it alone and add 3 + 2 only.',
      },
      {
        when: ['4/12', '4', '1/12', '1'],
        say: 'That is the answer for subtracting instead of adding.',
        because:
          'We are adding here, so the top numbers go up. 3 minus 2 would give 1, and adding 3 plus 2 gives 5.',
        instead: 'Read the two signs in the question carefully, then do that operation.',
      },
    ],
  },

  // ---------------------------------------------------------------------
  // INDEPENDENT - mastery is measured only on these.
  // ---------------------------------------------------------------------
  {
    id: 'g6-3-4-i1',
    competencyId: '3.4',
    stage: 'independent',
    prompt: 'Calculate 1/2 + 1/3. Give your answer in its smallest form.',
    accept: ['5/6'],
    explain:
      'The smallest shared bottom is 6. 1/2 becomes 3/6 and 1/3 becomes 2/6, then 3 + 2 = 5, so 5/6.',
    hints: [
      'The bottoms 2 and 3 do not match. What is the smallest number that both 2 and 3 fit into exactly?',
      'Turn 1/2 into sixths, and 1/3 into sixths too. Then add.',
    ],
    diagnoses: [
      {
        when: ['2/5', '2', '3/5'],
        say: 'You added the tops and the bottoms together.',
        because:
          'Fractions do not work that way. The bottom number is the size of each piece, and the pieces are all the same size once the bottoms match. So only the tops get added.',
        instead:
          'Find a bottom number that both 2 and 3 can become, then add only the tops.',
      },
      {
        when: ['1/5', '1'],
        say: 'That does not match the two fractions you were given.',
        because:
          'Adding a half and a third gives something more than half but less than the whole. 1/5 is too small and 1 is too big.',
        instead:
          'Rewrite both fractions so the bottoms match, then add only the tops.',
      },
      {
        when: ['4/6', '2/3', '3/6+2/6', '5/12'],
        say: 'Close, but there is still a shared factor to remove.',
        because:
          '5/12 is right but 5 and 12 share no factor. If you have 4/6, both numbers can still be divided by 2.',
        instead: 'Rewrite both, add the tops, then simplify at the end.',
      },
    ],
  },
  {
    id: 'g6-3-4-i2',
    competencyId: '3.4',
    stage: 'independent',
    prompt: 'Calculate 1/4 + 1/6. Give your answer in its smallest form.',
    accept: ['5/12'],
    explain:
      'The smallest shared bottom is 12. 1/4 becomes 3/12 and 1/6 becomes 2/12, then 3 + 2 = 5, so 5/12.',
    hints: [
      'What is the smallest number that both 4 and 6 fit into exactly?',
      'Rewrite both fractions in twelfths, then add the tops.',
    ],
    diagnoses: [
      {
        when: ['2/10', '2/11', '1/10', '1/5'],
        say: 'That comes from adding the bottoms as well.',
        because:
          '2/10 would be the result of adding 1+1 on top and 4+6 on the bottom. Only the tops are ever added.',
        instead:
          'Find a bottom that both 4 and 6 fit into, rewrite both, then add only the tops.',
      },
      {
        when: ['3/12', '3', '2/12'],
        say: 'That is only one of the two fractions rewritten.',
        because:
          'Both fractions need the same bottom number, not just the first one. Once they match you can add them.',
        instead:
          'Rewrite the second fraction so it also has a bottom of 12.',
      },
    ],
  },
  {
    id: 'g6-3-4-i3',
    competencyId: '3.4',
    stage: 'independent',
    prompt: 'Calculate 5/7 - 2/7. Give your answer as a fraction.',
    accept: ['3/7'],
    explain:
      'The bottoms already match at 7, so subtract the tops only: 5 - 2 = 3. The bottom stays 7.',
    hints: ['Do the bottoms match?', 'Yes. So subtract the tops and leave the bottom alone.'],
    diagnoses: [
      {
        when: ['3/0', '3/14', '3', '7/14'],
        say: 'You changed the bottom number.',
        because:
          'Once the bottoms match they stay fixed. Subtracting the bottoms as well is not how fractions work, and a bottom of 0 is not a valid fraction.',
        instead:
          'Bottoms already match, so subtract only the tops and keep the 7.',
      },
      {
        when: ['5/9', '5/5', '5', '3/5'],
        say: 'That is adding the bottoms to the top.',
        because:
          'It looks like 5/7 - 2/7 became 5/(7-2). The bottom number is never part of the subtraction.',
        instead: 'Subtract the top numbers only.',
      },
    ],
  },
  {
    id: 'g6-3-4-i4',
    competencyId: '3.4',
    stage: 'independent',
    prompt: 'Calculate 2/3 + 1/6. Give your answer as a fraction.',
    accept: ['5/6'],
    explain:
      'The smallest shared bottom is 6. 2/3 becomes 4/6 and 1/6 stays 1/6, then 4 + 1 = 5, so 5/6.',
    hints: [
      'One bottom is 3 and one is 6. Six already works for three, so what does 2/3 become in sixths?',
      'Multiply the top and bottom of 2/3 by 2. Then add.',
    ],
    diagnoses: [
      {
        when: ['3/9', '2/9', '9/4', '9/2'],
        say: 'You added the bottoms instead of keeping them matched.',
        because:
          'Adding 3 and 6 to get 9 is not valid. The bottom number is the size of each piece, not something that gets added.',
        instead:
          'Check whether 6 already fits 3 exactly. It does, so rewrite 2/3 in sixths and leave 1/6 alone.',
      },
      {
        when: ['4/6', '4', '3/6', '3'],
        say: 'That is only the first fraction after rewriting, not the total.',
        because:
          '1/6 already has the right bottom, so you stopped before adding it. The answer is 4/6 plus 1/6, not 4/6 on its own.',
        instead: 'Rewrite 2/3 as 4/6, then add the 1/6 that is already there.',
      },
      {
        when: ['1/2', '2/6', '1/6', '3/12'],
        say: 'That is smaller than the answer has to be.',
        because:
          'Adding 1/6 to 2/3 must give something bigger than 2/3. Half is smaller than 2/3, so an answer that small cannot be right.',
        instead:
          'Rewrite both fractions so the bottoms match, then add the tops.',
      },
    ],
  },
  {
    id: 'g6-3-4-i5',
    competencyId: '3.4',
    stage: 'independent',
    prompt: 'Calculate 1/2 + 1/4. Give your answer as a fraction.',
    accept: ['3/4'],
    explain:
      'The smallest shared bottom is 4. 1/4 stays as it is and 1/2 becomes 2/4, then 2 + 1 = 3, so 3/4.',
    hints: [
      'One bottom is already 4. Can you rewrite the other one to have a bottom of 4?',
      'Multiply the top and bottom of 1/2 by 2. Then add.',
    ],
    diagnoses: [
      {
        // "1/6" is the fraction you were given, not a total.
        when: ['1/6', '5/12', '2/6'],
        say: 'That is one of the fractions you were given, not the total.',
        because:
          'A bottom of 4 already fits 2 exactly, so there was no need to carry on searching. Once 1/2 becomes 2/4, you still have to add the 1/4 on top of it.',
        instead:
          'Rewrite 1/2 as 2/4, then add the 1/4 that is already there.',
      },
      {
        when: ['2/8', '2', '1/8', '8/2'],
        say: 'You rewrote the fraction that did not need it.',
        because:
          '1/4 already has the bottom number you want. Only 1/2 needed rewriting, and it needed multiplying by 2 to reach a bottom of 4.',
        instead: 'Rewrite 1/2 so it has a bottom of 4, and leave 1/4 exactly as it is.',
      },
      {
        when: ['1/5', '1/3', '1/9', '2/5'],
        say: 'That is smaller than the answer has to be.',
        because:
          'Adding 1/4 to 1/2 must give something bigger than 1/2, because adding always makes a fraction bigger.',
        instead: 'Bottoms must match before you can add. Try using 4.',
      },
    ],
  },
  {
    id: 'g6-3-4-i6',
    competencyId: '3.4',
    stage: 'independent',
    prompt: 'Calculate 1/2 + 1/2 + 1/2. What do you get?',
    accept: ['3/2', '1 1/2', '1+1/2', '1½'],
    explain:
      'Each half is 1/2, so three halves is 3/2. That is one and a half, which is more than the whole. This is called an improper fraction and it is completely normal.',
    hints: [
      'The bottoms all match already at 2, so add the tops.',
      '1 plus 1 plus 1 on top. Keep the bottom at 2.',
    ],
    diagnoses: [
      {
        when: ['1/6', '3', '1', '6/2'],
        say: 'You added the bottoms as well.',
        because:
          'Three halves is 1.5. If you also added the bottoms you get a much smaller number, which cannot be right because adding should make it bigger.',
        instead:
          'Bottoms already match, so add only the tops: 1 + 1 + 1 = 3 on top of 2.',
      },
      {
        when: ['2/2', '2'],
        say: 'That would be the answer for adding only two halves.',
        because:
          'There are three halves here, not two. Add one more 1 to the top.',
        instead: 'Count how many times the top number appears, and add all of them.',
      },
    ],
  },
];
