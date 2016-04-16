import test from 'ava'
import { cli } from './_helper'

test('return is ok', t => {
  const code = `export const a = [1, 2, 3]
a.reduce((r, e) => {
  return r + e
}, 0)
`
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('need return', t => {
  const code = `export const a = [1, 2, 3]
a.reduce((r, e) => {
  r + e
}, 0)
`
  t.is(cli.executeOnText(code).errorCount, 1)
})
