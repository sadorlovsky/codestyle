import test from 'ava'
import { cli } from './_helper'

test('jsx single quotes are good', t => {
  const code = '<a b=\'c\' />\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('jsx double quotes are bad', t => {
  const code = '<a b="c" />\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})
