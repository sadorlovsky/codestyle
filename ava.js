module.exports = {
  'plugins': ['ava'],

  'rules': {
    'ava/assertion-arguments': ['error', {
      'message': 'never'
    }],
    'ava/assertion-message': ['error', 'never'],
    'ava/max-asserts': 'off',
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
    'ava/use-true-false': 'off'
  }
}
