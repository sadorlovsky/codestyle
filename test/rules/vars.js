import test from 'ava'
import { cli } from './_helper'

test('vars are bad', t => {
  const code = 'var a = 1\nconsole.log(a)\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('lets are bad if they are not reassigned', t => {
  const code = 'let a = 1\nconsole.log(a)\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('lets are good if they are reassigned', t => {
  const code = 'let a = 1\na = 2\nconsole.log(a)\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('consts are good', t => {
  const code = 'const a = 1\nconsole.log(a)\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})
