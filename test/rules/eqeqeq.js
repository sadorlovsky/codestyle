import test from 'ava'
import check from '../helpers/check'

test('regular equality operator is bad', t => {
  const code = `
/*eslint no-undef: "off"*/
if (x == 42) {
  // empty
}
`
  t.is(check(code).errors, 1)
})

test('type-safe equality operator is good', t => {
  const code = `
/*eslint no-undef: "off"*/
if (x === 42) {
  // empty
}
`
  t.is(check(code).errors, 0)
})
