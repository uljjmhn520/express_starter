const log4js = require("log4js");
const path = require('path');

exports = module.exports = function (config) {
  let configure = {
    appenders: {
      console: {
        type: 'console'
      },
      log: {
        type: "dateFile",
        filename: path.join(config.logger.path, 'log-'),
        pattern: "yyyy-MM-dd.log",
        alwaysIncludePattern: true
      },
      error: {
        type: "dateFile",
        filename: path.join(config.logger.path, 'error-'),
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
        ],
        level: config.logger.level
      },
      production: {
        appenders: [
          'log',
          'errorFilter'
        ],
        level: config.logger.level
      },

    },
    disableClustering: true,
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID'
  };
  log4js.configure(configure);

  //判断一下有没有cate，只在cate里面找

  let cate = config.logger.adapters.log4js.category;
  if (typeof configure.categories[cate]) {
    return log4js.getLogger(cate);
  }else{
    return log4js.getLogger();
  }


};

exports['@singleton'] = true;
exports['@require'] = ['config'];
