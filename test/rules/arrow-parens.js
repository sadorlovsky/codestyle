import test from 'ava'
import cli from './_helper'

test('arrow parens', t => {
  var code = 'var double = x => x * x\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('arrow parens', t => {
  var code = 'var double = (x) => x * x\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('arrow parens', t => {
  var code = 'var multiply = (x, y) => x * y\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('arrow parens', t => {
  var code = 'var multiply = x, y => x * y\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})
