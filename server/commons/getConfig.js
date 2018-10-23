const _ = require('lodash')
let config = require('../config')
let configDev = require('../configdev')
let configPro = require('../configpro')

module.exports = _.defaultsDeep(config, (process.argv[2] === '--dev') ? configDev : configPro)