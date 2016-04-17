import test from 'ava'
import check from '../helpers/check'

test('no arrow-parens is good', t => {
  const code = 'export const double = x => x * 2\n'
  t.is(check(code).errors, 0)
})

test('arrow-parens are bad', t => {
  const code = 'export const double = (x) => x * 2\n'
  t.is(check(code).errors, 1)
})

test('arrow-parens are good if more than one arg', t => {
  const code = 'export const multiply = (x, y) => x * y\n'
  t.is(check(code).errors, 0)
})

test('no arrow-parens is bad if more than one arg', t => {
  const code = 'export const multiply = x, y => x * y\n'
  t.is(check(code).errors, 1)
})
