const path = require('path');
const packageInfo = require('../package');

let envList = process.env;


module.exports = {
  app: {
    name: packageInfo.name,
    version:packageInfo.version,
    user: envList.RUNTIME_USER || "",
    group: envList.RUNTIME_GROUP || "",
    logDir: ''
  },
  logger: {
    level: envList.LOGGER_LEVEL || 'debug',
    path: envList.LOGGER_PATH || path.join(__dirname,'..','logs'),
    adapters: {
      log4js: {
        category:envList.LOGGER_LOG4JS_CATEGORY || 'default'
      }
    }
  },
  servers: {
    http: {
      bind: '0.0.0.0',
      port: process.env.SERVER_HTTP_PORT || 3000
    }
  }
};