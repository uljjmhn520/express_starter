import config from "../config";

import log4js from 'log4js';
import path from 'path';

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
  let logger = null;
  if (typeof configure.categories[cate]) {
    logger = log4js.getLogger(cate);
  }else{
    logger = log4js.getLogger();
  }

  logger.debug(config);
  return logger;

};

exports['@singleton'] = true;
exports['@require'] = ['config'];
