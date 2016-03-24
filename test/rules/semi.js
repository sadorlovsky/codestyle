import test from 'ava'
import { cli } from './_helper'

test('semi is bad', t => {
  const code = 'const foo = 1;\nconst bar = function (arg) { return arg }\nbar(foo)\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('no semi is good', t => {
  const code = 'const foo = 1\nconst bar = function (arg) { return arg }\nbar(foo)\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})
