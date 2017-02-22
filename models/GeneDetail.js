const mongoose = require('../services/MongodbService').mongoose;
const Schema = mongoose.Schema;
const Page = require('./PageInit');

const geneDetailSchema = new Schema({
  gene_id:{
    type: String,
    index: true,
    default: ""
  },
  gene_abbreviation:{
    type: String,
    index: true,
    default: ""
  },
  gene_fullname:{
    type: String,
    default: ""
  },
  normal_function:{
    type: String,
    default: ""
  },
  createdAt: {
    type: Number,
    default: Date.now,
    index: true,
    label: '创建时间'
  },
  updatedAt: {
    type: Number,
    default: Date.now,
    index: true,
    label: '更新时间'
  }
},{collection: "chn_ghr_gene_detail"});

geneDetailSchema.statics.pages = Page.init;

module.exports = mongoose.model('GeneDetail', geneDetailSchema);