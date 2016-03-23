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
