import test from 'ava'
import { CLIEngine } from 'eslint'
import isPlainObj from 'is-plain-obj'
import config from '../index'

test('config', t => {
  t.true(isPlainObj(config))
})

test('code', t => {
  const cli = new CLIEngine({
    useEslintrc: false,
    baseConfig: {
      extends: [
        '../index.js',
        '../ava.js',
        '../react.js'
      ]
    }
  })
  const report = cli.executeOnFiles(['fixtures/code.js', 'fixtures/react.js'])
  const formatter = CLIEngine.getFormatter()
  console.log(formatter(report.results))
  t.is(report.errorCount, 0)
})
