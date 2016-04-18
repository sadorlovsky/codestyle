import test from 'ava'
import check from '../helpers/check'

test('using var outside of block is bad', t => {
  const code = `
export function foo () {
  if (true) {
    const a = 5
  }
  return a
}
`
  t.is(check(code).errors, 1)
})

test('not using var outside of block is good', t => {
  const code = `
export function foo () {
  let a
  if (true) {
    a = 5
  }
  return a
}
`
  t.is(check(code).errors, 0)
})
