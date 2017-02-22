/*
 Created by zhangjing on 17/2/21
 */

const router = require("koa-router")();
const SearchController = require('../controller/SearchController');

//按基因名字首字母查询基因
router.get('/search/gene', SearchController.searchGene);

module.exports = router;