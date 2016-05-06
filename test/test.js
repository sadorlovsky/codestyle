import path from 'path'
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
    configFile: path.join(__dirname, '..', 'index.js')
  })
  const report = cli.executeOnFiles(['fixtures/code.js'])
  const formatter = CLIEngine.getFormatter()
  console.log(formatter(report.results))
  t.is(report.errorCount, 0)
})
