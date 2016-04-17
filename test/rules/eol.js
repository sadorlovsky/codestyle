import test from 'ava'
import check from '../helpers/check'

test('no EOL is bad', t => {
  const code = 'export const a = () => true'
  t.is(check(code).errors, 1)
})

test('EOL is good', t => {
  const code = 'export const a = () => true\n'
  t.is(check(code).errors, 0)
})
