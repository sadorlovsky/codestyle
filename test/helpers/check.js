const CLIEngine = require('eslint').CLIEngine

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: '../../index.js'
})

const formatter = CLIEngine.getFormatter()

const check = code => {
  const report = cli.executeOnText(code)
  return {
    errors: report.errorCount,
    warns: report.warningCount,
    linterMessage: formatter(report.results)
  }
}

module.exports = check
