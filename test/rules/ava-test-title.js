import test from 'ava'
import check from '../helpers/check'

test('single test without title', t => {
  const code = `
import test from 'ava'

test(t => {
  t.is(1, 1)
})
`
  t.is(check(code).errors, 0)
})

test('single test with title', t => {
  const code = `
import test from 'ava'

test('with title', t => {
  t.is(1, 1)
})
`
  t.is(check(code).errors, 0)
})

test('one of tests without title', t => {
  const code = `
import test from 'ava'

test(t => {
  t.is(1, 1)
})

test('with title', t => {
  t.is(1, 1)
})
`
  t.is(check(code).errors, 0)
})

test('without titles', t => {
  const code = `
import test from 'ava'

test(t => {
  t.is(1, 1)
})

test(t => {
  t.is(2, 2)
})
`
  t.is(check(code).errors, 2)
})
