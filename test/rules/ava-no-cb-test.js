import test from 'ava'
import { cli } from './_helper'

test('test.cb() is bad', t => {
  const code = `
import test from 'ava'
test.cb('bad test', t => {
  t.pass()
  t.end()
})
`
  t.is(cli.executeOnText(code).errorCount, 1)
})
