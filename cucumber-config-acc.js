const {resolve} = require('path')

module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [resolve('./step-definitions/acceptance/**/*.ts')],
    publishQuiet: true,
    format: [
      'summary',
      'html:reports/cucumber.html',
      'message:reports/cucumber-messages.json',
      'json:reports/cucumber-report.json'
    ]
  }
}
