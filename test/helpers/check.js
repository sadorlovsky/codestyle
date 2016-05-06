/* eslint import/no-commonjs: "off" */
const path = require('path')
const CLIEngine = require('eslint').CLIEngine

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: path.join(__dirname, '..', '..', 'index.js')
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
