import test from 'ava'
import cli from './_helper'

test('two whitespaces are good', t => {
  var code = 'var hello = () => {\n  return \'hello\'\n}\n'
  t.is(cli.executeOnText(code).errorCount, 0)
})

test('four whitespaces are bad', t => {
  var code = 'var hello = () => {\n    return \'hello\'\n}\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})

test('tabs are horrible are bad', t => {
  var code = 'var hello = () => {\n\treturn \'hello\'\n}\n'
  t.is(cli.executeOnText(code).errorCount, 1)
})
