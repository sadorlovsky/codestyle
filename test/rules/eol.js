import test from 'ava'
import { cli } from './_helper'

test('no EOL is bad', t => {
  const code = 'export const a = () => true'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('EOL is good', t => {
  const code = 'export const a = () => true\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})
