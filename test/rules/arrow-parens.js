import test from 'ava'
import { cli } from './_helper'

test('no parens is good', t => {
  const code = 'export const double = x => x * 2\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('parens are bad', t => {
  const code = 'export const double = (x) => x * 2\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('arrow parens', t => {
  const code = 'export const multiply = (x, y) => x * y\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('arrow parens', t => {
  const code = 'export const multiply = x, y => x * y\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})
