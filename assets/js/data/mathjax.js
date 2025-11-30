MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    tags: 'ams',
    packages: {
      '[+]': ['textmacros', 'base']
    },
    macros: {
      bm: ['\\boldsymbol{#1}', 1]
    }
  },
  options: {
    enableAssistiveMml: false
  },
  chtml: {
    scale: 1.0
  },
  startup: {
    typeset: true
  }
};
