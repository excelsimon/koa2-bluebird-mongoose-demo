const global = require('../global');
const log4js = require('log4js');


const DEFAULT_LEVEL = global.logLevel || 'DEBUG';

log4js.configure({
  appenders: [
    {type: 'console'}
  ]
});

function getLogger(category, level) {
  let logger = log4js.getLogger(category);
  if (level)
    logger.setLevel(level);
  else
    logger.setLevel(DEFAULT_LEVEL);

  return logger;
}


module.exports = {
  getLogger: getLogger
};
