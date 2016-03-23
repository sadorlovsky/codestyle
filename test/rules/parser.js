import test from 'ava'
import cli from './_helper'

test('async-await works', t => {
  const code = 'async function load () {\n  await fetch(\'/feed\')\n}\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})
