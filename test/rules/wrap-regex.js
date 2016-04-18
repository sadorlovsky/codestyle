import test from 'ava'
import check from '../helpers/check'

test('not wrap regex is bad', t => {
  const code = 'export const x = () => /foo/.test(\'bar\')\n'
  t.is(check(code).errors, 1)
})

test('wrap regex is good', t => {
  const code = 'export const x = () => (/foo/).test(\'bar\')\n'
  t.is(check(code).errors, 0)
})
