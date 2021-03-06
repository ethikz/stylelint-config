module.exports = {
  'extends': 'stylelint-config-sass-guidelines',
  'plugins': [
    'stylelint-a11y',
    'stylelint-declaration-strict-value',
    'stylelint-no-indistinguishable-colors',
    'stylelint-order',
    'stylelint-scss'
  ],
  'rules': {
    'a11y/media-prefers-reduced-motion': null,
    'a11y/no-outline-none': true,
    'a11y/selector-pseudo-class-focus': true,
    'a11y/font-size-is-readable': [
      true, {
        'severity': 'warning'
      }
    ],
    'a11y/no-obsolete-attribute': [
      true, {
        'severity': 'warning'
      }
    ],
    'a11y/no-obsolete-element': [
      true, {
        'severity': 'warning'
      }
    ],
    'a11y/no-text-align-justify': [
      true, {
        'severity': 'warning'
      }
    ],
    'at-rule-blacklist': null,
    'at-rule-empty-line-before': [
      'always', {
        'except': [
          'blockless-after-blockless',
          'first-nested',
          'inside-block'
        ],
        'ignore': [
          'after-comment'
        ],
        'ignoreAtRules': [
          'return',
          'media',
          'each',
          'for'
        ]
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always',
    'at-rule-no-unknown': [
      true, {
        'ignoreAtRules': [
          'at-root',
          'define-mixin',
          'each',
          'else',
          'elseif',
          'for',
          'function',
          'if',
          'mixin',
          'include',
          'return'
        ]
      }
    ],
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'at-rule-whitelist': null,
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': [
      'always', {
        'ignoreAtRules': [
          'if',
          'else',
          'elseif'
        ]
      }
    ],
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': null,
    'comment-no-empty': true,
    'comment-whitespace-inside': null,
    'comment-word-blacklist': null,
    'custom-media-pattern': null,
    'custom-property-empty-line-before': 'never',
    'custom-property-pattern': null,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': [
      true, {
        'ignore': [
          'consecutive-duplicates-with-different-values'
        ]
      }
    ],
    'declaration-block-no-redundant-longhand-properties': [
      true, {
        'ignoreShorthands': [
          'flex',
          'flex-flow',
          'grid',
          'grid-area',
          'grid-column',
          'grid-gap',
          'grid-row',
          'grid-template',
          'transition'
        ]
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'declaration-property-unit-blacklist': null,
    'declaration-property-unit-whitelist': null,
    'declaration-property-value-blacklist': null,
    'declaration-property-value-whitelist': null,
    'font-family-name-quotes': null,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': 'numeric',
    'function-blacklist': null,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': null,
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': null,
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': null,
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'function-url-scheme-blacklist': null,
    'function-url-scheme-whitelist': null,
    'function-whitelist': null,
    'function-whitespace-after': 'always',
    'indentation': 2,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'max-line-length': null,
    'max-nesting-depth': [
      4, {
        'ignore': [
          'blockless-at-rules'
        ]
      }
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-blacklist': null,
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-whitelist': null,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'always',
    'number-max-precision': 4,
    'number-no-trailing-zeros': true,
    'order/order': [
      {
        'type': 'at-rule',
        'name': 'apply'
      }, {
        'type': 'at-rule',
        'name': 'mixin'
      },
      'custom-properties',
      'declarations', {
        'type': 'at-rule',
        'name': 'media',
        'hasBlock': true
      },
      'rules'
    ],
    'order/properties-alphabetical-order': null,
    'plugin/stylelint-no-indistinguishable-colors': true,
    'property-blacklist': null,
    'property-case': 'lower',
    'property-no-unknown': [
      true, {
        'ignoreProperties': []
      }
    ],
    'property-no-vendor-prefix': [
      true, {
        'ignoreProperties': [
          '/margin/',
          '/padding/'
        ]
      }
    ],
    'property-whitelist': null,
    'rule-empty-line-before': [
      'always-multi-line', {
        'except': [
          'first-nested'
        ],
        'ignore': [
          'after-comment'
        ]
      }
    ],
    'scss/at-rule-no-unknown': [
      true, {
        'ignoreAtRules': [
          'elseif'
        ]
      }
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-blacklist': null,
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-operator-whitelist': null,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-id-pattern': 'app',
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-attribute': 4,
    'selector-max-class': 4,
    'selector-max-combinators': 4,
    'selector-max-compound-selectors': 4,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-specificity': [ '0,4,1', {
      'ignoreSelectors': [
        '#app'
      ]
    }],
    'selector-max-type': 4,
    'selector-max-universal': 4,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': [
      true, {
        'ignore': [
          'attribute',
          'class'
        ]
      }
    ],
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-blacklist': null,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': [
      true, {
        'ignorePseudoClasses': [
          'container',
          'enter'
        ]
      }
    ],
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-class-whitelist': null,
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-no-unknown': [
      true, {
        'ignorePseudoElements': [
          'ms-expand'
        ]
      }
    ],
    'selector-type-case': 'lower',
    'selector-type-no-unknown': null,
    'shorthand-property-no-redundant-values': true,
    'scale-unlimited/declaration-strict-value': [
      '/color/', {
        'ignoreKeywords': [
          'currentColor',
          'inherit',
          'initial',
          'transparent'
        ]
      }
    ],
    'string-no-newline': true,
    'string-quotes': 'single',
    'time-min-milliseconds': 100,
    'unit-blacklist': null,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'unit-whitelist': null,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': true
  }
};
