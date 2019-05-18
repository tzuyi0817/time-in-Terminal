function time(req, res, next) {
  const start = new Date()
  console.log(start.toLocaleString() + ' | ' + req.method + ' from ' + req.url)

  const end = new Date().valueOf()
  const timeout = end - start.valueOf()
  console.log(start.toLocaleString() + ' | ' + req.method + ' from ' + req.url + ' | total time: ' + timeout + 'ms')
  next()
}

module.exports = time