/**
 * Created by zhangjing on 17/2/21
 */
const Logger = require('../services/LogService').getLogger('SearchController');
const GeneDao = require('../dao/GeneDao');

const searchGene = (ctx) => {
  let queryObj = ctx.query;
  Logger.debug("searchGene in file SearchController.js: ",queryObj);
  let firstLetter = queryObj.letter || 'A';
  return GeneDao
    .searchGeneByFirstLetter(firstLetter)
    .then((arr) => {
      ctx.status = 200;
      return ctx.body = {
        statusCode: 200,
        error: "",
        data: arr
      };
    })
    .catch((error) => {
      Logger.error("searchGeneByFirstLetter: ", error);
      ctx.status = 200;
      return ctx.body = {
        statusCode: 200,
        error: "",
        data: []
      };
  });
};

module.exports = {
  searchGene: searchGene
};