const test = require('ava')
const { CLIEngine } = require('eslint')
const isPlainObj = require('is-plain-obj')
const config = require('../index')
const configReact = require('../react')
const configAva = require('../ava')

test('config is a plain object', t => {
  t.true(isPlainObj(config))
  t.true(isPlainObj(configReact))
  t.true(isPlainObj(configAva))
})

test('lints', t => {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: {
      extends: [
        '../codestyle/index.js',
        '../codestyle/ava.js',
        '../codestyle/react.js'
      ]
    }
  })
  const report = cli.executeOnFiles([
    '../codestyle/test/fixtures'
  ])
  const formatter = CLIEngine.getFormatter()
  console.log(formatter(report.results))
  t.is(report.errorCount, 0)
})
