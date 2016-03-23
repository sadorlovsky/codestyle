import test from 'ava'
import cli from './_helper'

test('single quotes are good', t => {
  const code = 'var foo = \'hello\'\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('double quotes are bad', t => {
  const code = 'var foo = "hello"\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})