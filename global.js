/**
 * Created by zhangjing on 17/2/21
 */
const logLevel = process.env.LOGLEVEL || 'DEBUG';
const port = process.env.PORT || 3000;
const mongodbUrl =process.env.MONGODBURL || 'mongodb://localhost/hsGHRData';

module.exports = {
  port: port,
  logLevel: logLevel,
  mongodbUrl: mongodbUrl
}