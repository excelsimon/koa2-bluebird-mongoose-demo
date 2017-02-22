/**
 * pagination function
 */
exports.init = function (currentPage, pageSize) {
  currentPage = parseInt(currentPage, 10) || 1;
  pageSize = parseInt(pageSize, 10) || 10;
  var skip = (currentPage - 1) * pageSize;
  var query = this.find();
  query._exec = query.exec;
  query.exec = function (callback) {
    query.count(function (err, count) {
      if (err) {
        return callback(err);
      }

      query.find().skip(skip).limit(pageSize)._exec(function (err, roomArr) {
        if (err) {
          return callback(err, null);
        }
        var pageCount = Math.ceil(count / pageSize);
        callback(null, {
          page: currentPage,
          totalPages: pageCount,
          total: count,
          perPage: pageSize,
          results: roomArr
        });
      });
    });
  };
  return query;
};
