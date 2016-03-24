import test from 'ava'
import { cli } from './_helper'

test('regular equality operator is bad', t => {
  const code = 'if (x == 42) { }\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('type-safe equality operator is good', t => {
  const code = 'if (x === 42) { }\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})
