import test from 'ava'
import check from '../helpers/check'

test('use t is good', t => {
  const code = `
import test from 'ava'
test('good', t => {
  t.is(1, 1)
})
`
  t.is(check(code).errors, 0)
})

test('not use t is bad', t => {
  const code = `
  import test from 'ava'
  test('good', x => {
    x.is(1, 1)
  })
`
  t.is(check(code).errors, 1)
})
