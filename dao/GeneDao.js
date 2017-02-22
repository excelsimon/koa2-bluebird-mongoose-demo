/*
 Created by zhangjing on 17/2/21
 */

const logger = require('../services/LogService').getLogger("GeneDao");
const GeneDetail = require('../models/GeneDetail')
const Promise = require('bluebird');

const searchGeneByFirstLetter = (firstLetter) => {
  return GeneDetail.find({
    gene_abbreviation: eval("/^" + firstLetter + "/i")
  },"gene_id gene_abbreviation gene_fullname")
    .sort("gene_abbreviation")
    .exec()
    .then((arr) => {
      let returnArr = arr.map((it) => {
          return {
            type: "gene",
            title: it.gene_abbreviation,
            subtitle: it.gene_fullname.split(":")[1].trim(),
            label: it.gene_fullname,
            id: it.gene_id,
            version: 37
          };
      });
      return Promise.resolve(returnArr);
    })
    .catch((error) => {
      Logger.error("searchGeneByFirstLetter: ",error);
      return Promise.resolve([]);
    })
}

module.exports = {
  searchGeneByFirstLetter: searchGeneByFirstLetter
}
