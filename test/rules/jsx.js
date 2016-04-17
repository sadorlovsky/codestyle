import test from 'ava'
import check from '../helpers/check'

test('jsx single quotes are good', t => {
  const code = '<a b=\'c\' />\n'
  t.is(check(code).errors, 0)
})

test('jsx double quotes are bad', t => {
  const code = '<a b="c" />\n'
  t.is(check(code).errors, 1)
})
