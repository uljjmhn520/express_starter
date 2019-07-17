const log4js = require("log4js");
const path = require('path');

exports = module.exports = function (config) {
  log4js.configure({
    appenders: {
      console: {
        type: 'console'
      },
      log: {
        type: "dateFile",
        filename: path.join(config.logger.path,'log-'),
        pattern: "yyyy-MM-dd.log",
        alwaysIncludePattern: true
      },
      error: {
        type: "dateFile",
        filename: path.join(config.logger.path,'error-'),
        pattern: "yyyy-MM-dd.log",
        alwaysIncludePattern: true
      },
      errorFilter: {
        type: "logLevelFilter",
        appender: "error",
        level: "error"
      },
    },
    categories: {
      default: {
        appenders: [
          'console',
          'log',
          'errorFilter'
        ],
        level: config.logger.level
      },

    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID'
  });


  let logger  = log4js.getLogger("app");

  return logger;
};

exports['@singleton'] = true;
exports['@require'] = ['config'];
