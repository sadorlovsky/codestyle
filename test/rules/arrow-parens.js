import test from 'ava'
import { cli } from './_helper'

test('no arrow-parens is good', t => {
  const code = 'export const double = x => x * 2\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('arrow-parens are bad', t => {
  const code = 'export const double = (x) => x * 2\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('arrow-parens are good if more than one arg', t => {
  const code = 'export const multiply = (x, y) => x * y\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('no arrow-parens is bad if more than one arg', t => {
  const code = 'export const multiply = x, y => x * y\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})
