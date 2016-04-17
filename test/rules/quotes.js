import test from 'ava'
import check from '../helpers/check'

test('single quotes are good', t => {
  const code = 'export const foo = \'hello\'\n'
  t.is(check(code).errors, 0)
})

test('double quotes are bad', t => {
  const code = 'export const foo = "hello"\n'
  t.is(check(code).errors, 1)
})
