function time(req, res, next) {
  const nowDate = new Date()
  console.log(nowDate.toLocaleString() + ' | ' + req.method + ' from ' + req.url);
  next();
}

module.exports = time