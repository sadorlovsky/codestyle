module.exports = {
  'parser': 'babel-eslint',

  'parserOptions': {
    'ecmaVersion': 7,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },

  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },

  'plugins': [
    'ava',
    'import',
    'react'
  ],

  'rules': {
    'accessor-pairs': ['error', {
      'setWithoutGet': true,
      'getWithoutSet': false
    }],
    'array-bracket-spacing': ['error', 'never', {
      'singleValue': false,
      'objectsInArrays': false,
      'arraysInArrays': true
    }],
    'array-callback-return': 'error',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'block-scoped-var': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],
    'callback-return': 'error',
    'camelcase': 'off',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'comma-style': ['error', 'last'],
    'complexity': ['error', 3],
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'consistent-this': ['error', 'that'],
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-names': 'error',
    'func-style': ['error', 'declaration', {
      'allowArrowFunctions': true
    }],
    'generator-star-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'global-require': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': ['error', '^(err|error)$'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'init-declarations': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error', {
      'beforeColon': false,
      'afterColon': true,
      'mode': 'strict'
    }],
    'keyword-spacing': ['error', {
      'before': true,
      'after': true
    }],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'max-depth': ['warn', 4],
    'max-len': 'off',
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 5],
    'max-statements': 'off',
    'max-statements-per-line': ['error', {
      'max': 1
    }],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 3
    }],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-class-assign': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': ['error', {
      'allowParens': true
    }],
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'warn',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': 'warn',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-mixed-requires': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-path-concat': 'error',
    'no-plusplus': ['error', {
      'allowForLoopAfterthoughts': true
    }],
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-imports': ['error', 'underscore'],
    'no-restricted-modules': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'off',
    'no-sparse-arrays': 'error',
    'no-sync': 'off',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': ['error', {
      'skipBlankLines': true
    }],
    'no-undef': ['error', {
      'typeof': true
    }],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'all',
      'argsIgnorePattern': '_'
    }],
    'no-use-before-define': ['error', {
      'functions': true,
      'classes': true
    }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'never'],
    'prefer-arrow-callback': ['error', {
      'allowNamedFunctions': true
    }],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', 'avoid-escape'],
    'radix': 'off',
    'semi': ['error', 'never'],
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }],
    'space-before-function-paren': 'error',
    'space-in-parens': ['error', 'never'],
    'strict': 'off',
    'template-curly-spacing': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'wrap-iife': ['error', 'any'],
    'wrap-regex': 'error',
    'yield-star-spacing': ['error', 'after'],
    'yoda': 'error',

    'ava/assertion-message': ['error', 'never'],
    'ava/max-asserts': ['error', 1],
    'ava/no-cb-test': 'error',
    'ava/no-identical-title': 'error',
    'ava/no-ignored-test-files': 'off',
    'ava/no-invalid-end': 'error',
    'ava/no-only-test': 'warn',
    'ava/no-skip-assert': 'warn',
    'ava/no-skip-test': 'warn',
    'ava/no-statement-after-end': 'error',
    'ava/no-todo-test': 'warn',
    'ava/no-unknown-modifiers': 'error',
    'ava/prefer-power-assert': 'off',
    'ava/test-ended': 'error',
    'ava/test-title': ['error', 'if-multiple'],
    'ava/use-t': 'error',
    'ava/use-t-well': 'error',
    'ava/use-test': 'error',
    'ava/use-true-false': 'off',

    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/imports-first': 'error',
    'import/named': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/order': ['error', {
      'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
    }],

    'react/display-name': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-handler-names': ['error', {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on'
    }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', {
      'maximum': 3
    }],
    'react/jsx-no-bind': ['error', {
      'ignoreRefs': true,
      'allowArrowFunctions': true,
      'allowBind': false
    }],
    'react/jsx-no-duplicate-props': ['error', {
      'ignoreCase': true
    }],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-space-before-closing': ['error', 'always'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', {
      'ignoreStateless': true
    }],
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'warn',
    'react/require-extension': ['warn', {
      'extensions': ['.js', '.jsx']
    }],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',
    'react/wrap-multilines': 'error'
  }
}
