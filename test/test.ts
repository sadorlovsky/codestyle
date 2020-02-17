import test from 'ava'
import { CLIEngine } from 'eslint'
import isPlainObj from 'is-plain-obj'
import config from '../index'
import configReact from '../react'
import configAva from '../ava'

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
  const formatter = cli.getFormatter()
  console.log(formatter(report.results))
  t.is(report.errorCount, 0)
})
