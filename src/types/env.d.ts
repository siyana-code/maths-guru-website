/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/**
 * KaTeX auto-render publishes this global. See astro.config.mjs for why we use
 * KaTeX rather than MathJax.
 */
declare global {
  interface Window {
    renderMathInElement?: (
      element: HTMLElement,
      options: Record<string, unknown>,
    ) => void;
  }
}

export {};
