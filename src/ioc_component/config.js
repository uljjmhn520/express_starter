import config from '../config';

exports = module.exports = function () {
  return config;
};

exports['@singleton'] = true;
