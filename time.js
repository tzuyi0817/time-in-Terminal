function time(req, res, next) {
  const start = new Date()

  if (req.url !== '/favicon.ico') {
    res.on('finish', () => {
      const end = new Date().valueOf()
      const timeout = end - start.valueOf()
      console.log(start.toLocaleString() + ' | ' + req.method + ' from ' + req.url + ' | total time: ' + timeout + 'ms')
    })
  }
  next()
}

module.exports = time