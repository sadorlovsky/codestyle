import test from 'ava'
import check from '../helpers/check'

test('two tests with identical names are bad', t => {
  const code = `
import test from 'ava'
test('pass', t => {
  t.pass()
})

test('pass', t => {
  t.pass()
})
`
  t.is(check(code).errors, 1)
})

test('two tests with different names are good', t => {
  const code = `
import test from 'ava'
test('pass', t => {
  t.pass()
})

test('pass too', t => {
  t.pass()
})
`
  t.is(check(code).errors, 0)
})
