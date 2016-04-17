import test from 'ava'
import check from '../helpers/check'

test('semi is bad', t => {
  const code = 'const foo = 1;\nconst bar = function (arg) { return arg }\nbar(foo)\n'
  t.is(check(code).errors, 1)
})

test('no semi is good', t => {
  const code = 'const foo = 1\nconst bar = function (arg) { return arg }\nbar(foo)\n'
  t.is(check(code).errors, 0)
})
