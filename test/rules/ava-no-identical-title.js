import test from 'ava'
import { cli } from './_helper'

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
  t.is(cli.executeOnText(code).errorCount, 1)
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
  t.is(cli.executeOnText(code).errorCount, 0)
})
