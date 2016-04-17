import test from 'ava'
import { cli } from './_helper'

test('no assertion message is good', t => {
  const code = `
import test from 'ava'
test('good test', t => {
  t.true(array.indexOf(value) !== -1)
})
`
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('assertion message is bad', t => {
  const code = `
import test from 'ava'
test('bad test', t => {
  t.true(array.indexOf(value) !== -1, 'value is not in array')
})
`
  t.is(cli.executeOnText(code).errorCount, 1)
})
