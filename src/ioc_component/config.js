const config = require("../config");



exports = module.exports = function () {

  console.log('---------------load config---------------');
  console.log(config);
  return config;
};

exports['@singleton'] = true;