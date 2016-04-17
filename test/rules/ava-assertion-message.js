import test from 'ava'
import check from '../helpers/check'

test('no assertion message is good', t => {
  const code = `
import test from 'ava'
test('good test', t => {
  t.true(array.indexOf(value) !== -1)
})
`
  t.is(check(code).errors, 0)
})

test('assertion message is bad', t => {
  const code = `
import test from 'ava'
test('bad test', t => {
  t.true(array.indexOf(value) !== -1, 'value is not in array')
})
`
  t.is(check(code).errors, 1)
})
