/**
 * Created by zhangjing on 17/2/21
 */
const global = require('../global');
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const logger = require('../services/LogService').getLogger('MongodbService');
const db = mongoose.connection;
const options = {promiseLibrary: bluebird,serber:{
  auto_reconnect: true
}};
/*const options = {promiseLibrary: bluebird,server: {
 auto_reconnect: true ,
 socketOptions: {socketTimeoutMS: 60 * 1000 * 5}
 }};*/
db.on('error', function (err) {
  logger.error('mongodb connect error, url: ' + global.mongodbUrl, err);
});
db.once('open', function () {
  logger.info('mongodb connection open, url: ' + global.mongodbUrl);
});
db.on('connected', function() {
  logger.info('mongodb connected , url: ' + global.mongodbUrl);
});
db.on('reconnected', function() {
  logger.info('mongodb reconnected , url: ' + global.mongodbUrl);
});
mongoose.Promise = bluebird;
mongoose.connect(global.mongodbUrl, options);

exports.mongoose = mongoose;