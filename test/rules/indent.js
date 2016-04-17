import test from 'ava'
import check from '../helpers/check'

test('two whitespaces are good', t => {
  const code = 'export const hello = () => {\n  return \'hello\'\n}\n'
  t.is(check(code).errors, 0)
})

test('four whitespaces are bad', t => {
  const code = 'export const hello = () => {\n    return \'hello\'\n}\n'
  t.is(check(code).errors, 1)
})

test('tabs are horrible are bad', t => {
  const code = 'export const hello = () => {\n\treturn \'hello\'\n}\n'
  t.is(check(code).errors, 1)
})
