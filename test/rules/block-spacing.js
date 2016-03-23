import test from 'ava'
import cli from './_helper'

test('block-spacing is good', t => {
  const code = 'function foo () { return true }\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('no block-spacing is bad', t => {
  const code = 'function foo () {return true}\n'
  t.is(cli.executeOnText(code).errorCount, 2)
})
