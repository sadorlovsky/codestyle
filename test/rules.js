var test = require('tape')
var eslint = require('eslint')

var CLIEngine = eslint.CLIEngine

var cli = new CLIEngine({
  useEslintrc: false,
  configFile: 'eslintrc.json'
})

test('semi is bad', function (t) {
  var code = 'var foo = 1;\nvar bar = function () {}\nbar(foo)\n'
  t.equal(cli.executeOnText(code).errorCount, 1)
  t.end()
})

test('no semi is good', function (t) {
  var code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'
  t.equal(cli.executeOnText(code).errorCount, 0)
  t.end()
})

test('single quotes are good', function (t) {
  var code = 'var foo = \'hello\'\n'
  t.equal(cli.executeOnText(code).errorCount, 0)
  t.end()
})

test('double quotes are bad', function (t) {
  var code = 'var foo = "hello"\n'
  t.equal(cli.executeOnText(code).errorCount, 1)
  t.end()
})

test('arrow parens', function (t) {
  var code = 'var double = x => x * x\n'
  t.equal(cli.executeOnText(code).errorCount, 0)
  t.end()
})

test('arrow parens', function (t) {
  var code = 'var double = (x) => x * x\n'
  t.equal(cli.executeOnText(code).errorCount, 1)
  t.end()
})

test('arrow parens', function (t) {
  var code = 'var multiply = (x, y) => x * y\n'
  t.equal(cli.executeOnText(code).errorCount, 0)
  t.end()
})

test('arrow parens', function (t) {
  var code = 'var multiply = x, y => x * y\n'
  t.equal(cli.executeOnText(code).errorCount, 1)
  t.end()
})

test('two whitespaces are good', function (t) {
  var code = 'var hello = () => {\n  return \'hello\'\n}\n'
  t.equal(cli.executeOnText(code).errorCount, 0)
  t.end()
})

test('four whitespaces are bad', function (t) {
  var code = 'var hello = () => {\n    return \'hello\'\n}\n'
  t.equal(cli.executeOnText(code).errorCount, 1)
  t.end()
})
