const path = require('path');
const jsonInfo = require('./package');
require('dotenv').config({path: path.resolve(__dirname, '.env')});

let envList = {
  "NPM_CONFIG_LOGLEVEL": "debug",
  "TZ": "Asia/Shanghai",
};
Object.assign(envList, process.env);

envList['NODE_ENV'] = 'development';

module.exports = {
  apps: [
    {
      name: jsonInfo.name,
      script: "src/bin/start.es6.js",
      exec_mode: "cluster_mode",
      instances: process.env.PM2_INSTANCE_COUNT || 2,
      log_date_format: "YYYY-MM-DD HH:mm:SS",
      log_file: false,
      error_file: false,
      pid_file: "logs/" + jsonInfo.name + ".pid",
      watch: ["src", '.env'],
      watch_delay: 1000,
      ignore_watch: [
        ".git",
        ".idea",
        "node_modules",
        "node_modules/**/node_modules"
      ],
      watch_options: {
        "followSymlinks": false
      },
      env: envList
    }
  ]
};