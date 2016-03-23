const eslint = require('eslint')

const CLIEngine = eslint.CLIEngine

const cli = new CLIEngine({
  useEslintrc: false,
  configFile: '../../eslintrc.json'
})

module.exports = cli
