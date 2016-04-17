import test from 'ava'
import check from '../helpers/check'

test('omit braces when there is a single statement is good', t => {
  const code = 'export const foo = () => \'bar\'\n'
  t.is(check(code).errors, 0)
})

test('not omit braces when there is a single statement is good too', t => {
  const code = `export const foo = () => {
  return 'bar'
}
`
  t.is(check(code).errors, 0)
})

test('braces when there is a multiline statement are good', t => {
  const code = `export const foo = () => {
  const result = 'bar'
  return result
}
`
  t.is(check(code).errors, 0)
})
