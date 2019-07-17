const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '.env')});

let envList = {
  "NPM_CONFIG_LOGLEVEL": "error",
  "TZ": "Asia/Shanghai",
};
Object.assign(envList, process.env);

envList['NODE_ENV'] = 'production';

module.exports = {
  apps: [
    {
      name: "custom_kakou",
      script: "src/bin/www",
      exec_mode: "cluster_mode",
      instances: process.env.PM2_INSTANCE_COUNT || 2,
      log_date_format: "YYYY-MM-DD HH:mm:SS",
      log_file: "logs/custom_kakou.log",
      error_file: "logs/custom_kakou-err.log",
      pid_file: "logs/custom_kakou.pid",
      watch: ["src"],
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