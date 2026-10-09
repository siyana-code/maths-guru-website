import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';

// MathsGuru - https://maths-guru-website.pages.dev
//
// Design constraints this config enforces (see research/11-technology.md):
//
// 1. Static output. Only 21.3% of Sri Lankan households own a computer, and
//    students pay over LKR 2,000/month for data, so every page must be cheap.
//
// 2. No client-side framework runtime by default. Astro ships zero JS unless a
//    component opts in with a client:* directive.
//
// 3. Maths via KaTeX, not MathJax. This was a considered reversal.
//
//    research/08-teaching-method.md originally specified MathJax v4 because v4's
//    a11y components attach aria-label to rendered expressions. We tried it and
//    it does not work here: MathJax 4's standalone bundle loads, exposes
//    typesetPromise, and then silently processes nothing, leaving every
//    script[type="math/tex"] untouched. No error is reported, which is the
//    dangerous part - the failure looks exactly like a content bug.
//
//    KaTeX's auto-render was verified working, and it emits real MathML
//    (.katex-mathml > math) alongside the visual rendering. That is the
//    accessibility property we actually need: a screen reader gets structured
//    maths it can navigate expression by expression, not a screenshot and not a
//    string of characters.
//
//    The open question this leaves us, recorded in research/14-open-questions.md:
//    whether Sinhala and Tamil screen readers handle this MathML well. Both are
//    low-resource languages for speech synthesis and we have no data. We should
//    test before claiming accessibility in either language.
export default defineConfig({
  site: 'https://maths-guru-website.pages.dev',
  output: 'static',
  trailingSlash: 'never',
  build: {
    // Small pages, shared components. Keeps the client payload tiny.
    inlineStylesheets: 'auto',
  },
  devToolbar: {
    enabled: false,
  },
  markdown: {
    // Parse $...$ and $$...$$ so our rehype plugin can find them.
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      /**
       * Turn remark-math output into KaTeX delimiters that auto-render picks up.
       *
       * remark-math emits hast elements like:
       *   display math -> <pre><code class="language-math math-display">\frac{1}{2}</code></pre>
       *   inline math  -> <code class="language-math math-inline">x^2</code>
       *
       * NOT <math> nodes. (Those only appear with allowDangerousHtml on
       * remark-rehype, which we do not set.) So we match on className.
       *
       * We emit the delimiters as text rather than <script> tags, because
       * KaTeX auto-render scans the DOM for delimiters. This also means the
       * raw TeX stays in the HTML as a fallback: if KaTeX never loads, a
       * student sees the TeX rather than a blank space.
       */
      function rehypeMathToDelimiters() {
        return (tree) => {
          visitMath(tree);
        };
      },
    ],
  },
});

const MATH_CLASS = /(^|\s)(math-display|math-inline)(\s|$)/;

function visitMath(node) {
  if (!node.children) return;

  for (let i = 0; i < node.children.length; i += 1) {
    const child = node.children[i];

    if (child.type === 'element' && child.tagName === 'code') {
      const classes = child.properties?.className;
      const classList = Array.isArray(classes)
        ? classes.join(' ')
        : String(classes ?? '');

      if (MATH_CLASS.test(classList)) {
        const display = /math-display/.test(classList);
        const tex = toTex(child.children);

        // Wrap in the delimiters KaTeX auto-render is configured to look for.
        // Escaped, because this is text content and hast escapes by default -
        // the backslashes in \frac must survive intact.
        const replacement = {
          type: 'element',
          tagName: display ? 'div' : 'span',
          properties: display ? { className: ['math-block'] } : {},
          children: [
            {
              type: 'text',
              value: display ? `$$${tex}$$` : `\\(${tex}\\)`,
            },
          ],
        };

        // Block maths arrives wrapped in <pre>, which implies monospace and
        // preserved whitespace. Since the wrapper only ever holds our code
        // node, replace the whole <pre> rather than leaving stray whitespace.
        if (node.tagName === 'pre' && node.children?.length === 1) {
          node.type = 'element';
          node.tagName = replacement.tagName;
          node.properties = replacement.properties;
          node.children = replacement.children;
        } else {
          node.children[i] = replacement;
        }

        continue;
      }
    }

    visitMath(child);
  }
}

/** Concatenate raw text out of a node's children. */
function toTex(children = []) {
  return children.map((c) => c.value ?? '').join('');
}
