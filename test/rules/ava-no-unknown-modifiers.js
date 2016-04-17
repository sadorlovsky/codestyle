/*eslint ava/max-asserts: ["error", 3]*/
import test from 'ava'
import { check } from './_helper'

test('using unknown modifiers is bad', t => {
  const code = `
import test from 'ava'
test('bad test', t => {
  t.foo()
  t.bar()
  t.lol()
})
`
  t.is(check(code).errors, 3)
})

test('usage only known modifiers is good', t => {
  const code = `
import test from 'ava'
test('good test', t => {
  t.is()
  t.true()
  t.false()
})
`
  t.is(check(code).errors, 0)
})
