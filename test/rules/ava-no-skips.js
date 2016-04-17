/*eslint ava/max-asserts: ["error", 2]*/
import test from 'ava'
import { check } from './_helper'

test('skip asserts - it\'s ok', t => {
  const code = `
import test from 'ava'
test('test', t => {
  t.skip.is(1, 1)
})
`
  t.is(check(code).errors, 0)
  t.is(check(code).warns, 1)
})


test('skip tests - it\'s ok, but warning', t => {
  const code = `
import test from 'ava'
test.skip('ignored test', t => {
  t.pass()
})
`
  t.is(check(code).errors, 0)
  t.is(check(code).warns, 1)
})
