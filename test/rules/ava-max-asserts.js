import test from 'ava'
import check from '../helpers/check'

test('only one assert is good', t => {
  const code = `
import test from 'ava'
test('good test', t => {
  t.true(array.indexOf(value) !== -1)
})
`
  t.is(check(code).errors, 0)
})

test('more than one asserts is bad', t => {
  const code = `
import test from 'ava'
test('bad test', t => {
  t.true(array.length === 5)
  t.true(array.indexOf(value) !== -1)
})
`
  t.is(check(code).errors, 1)
})
