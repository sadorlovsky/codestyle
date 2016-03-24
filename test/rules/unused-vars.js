import test from 'ava'
import { cli } from './_helper'

test('unused var is bad', t => {
  const code = 'const a = 10\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('exported var is good', t => {
  const code = 'export const a = 10\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('exported var on the next line is good too', t => {
  const code = 'const a = 10\nexport { a }\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('logged var is good', t => {
  const code = 'const a = 10\nconsole.log(a)\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('unused function args are bad', t => {
  const code = 'export function foo (a, b) {\n  return a\n}\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('unused arrow function args are bad', t => {
  const code = 'export const foo = x => {}\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('unused arg with "_" name is ignoring', t => {
  const code = 'export const foo = _ => {}\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})
