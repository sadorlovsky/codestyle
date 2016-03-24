const eslint = require('eslint')

const CLIEngine = eslint.CLIEngine

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: '../../eslintrc.json'
})

const reporter = function (code) {
  const report = cli.executeOnText(code)
  const formatter = CLIEngine.getFormatter()
  return formatter(report.results)
}

module.exports = { cli, reporter }
