import test from 'ava'
import cli from './_helper'

test('semi is bad', t => {
  const code = 'var foo = 1;\nvar bar = function () {}\nbar(foo)\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('no semi is good', t => {
  const code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})
