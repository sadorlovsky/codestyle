import test from 'ava'
import check from '../helpers/check'

test('return is ok', t => {
  const code = `export const a = [1, 2, 3]
a.reduce((r, e) => {
  return r + e
}, 0)
`
  t.is(check(code).errors, 0)
})

test('need return', t => {
  const code = `export const a = [1, 2, 3]
a.reduce((r, e) => {
  r + e
}, 0)
`
  t.is(check(code).errors, 1)
})
