import test from 'ava'
import check from '../helpers/check'

test('using var outside of block is bad', t => {
  const code = `
/*eslint no-constant-condition: "off"*/
export function foo () {
  if (true) {
    const a = 5
  }
  return a
}
`
  t.is(check(code).errors, 2)
})

test('not using var outside of block is good', t => {
  const code = `
/*eslint no-constant-condition: "off"*/
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
