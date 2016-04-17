const eslint = require('eslint')

const CLIEngine = eslint.CLIEngine

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: '../../index.js'
})

const reporter = function (code) {
  const report = cli.executeOnText(code)
  const formatter = CLIEngine.getFormatter()
  return formatter(report.results)
}

const check = function (code) {
  const result = cli.executeOnText(code)
  return {
    errors: result.errorCount,
    warns: result.warningCount,
    linterMessage: reporter(code)
  }
}

module.exports = { cli, reporter, check }
