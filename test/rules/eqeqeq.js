import test from 'ava'
import check from '../helpers/check'

test('regular equality operator is bad', t => {
  const code = 'if (x == 42) { }\n'
  t.is(check(code).errors, 1)
})

test('type-safe equality operator is good', t => {
  const code = 'if (x === 42) { }\n'
  t.is(check(code).errors, 0)
})
