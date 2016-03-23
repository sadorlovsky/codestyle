import test from 'ava'
import cli from './_helper'

test('async/await', t => {
  const code = 'async function load () {\n  await fetch(\'/feed\')\n}\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('decorator', t => {
  const code = '@bind\nclass Doge {\n\n}\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})
