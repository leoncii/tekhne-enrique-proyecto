exports.success = function(req, res, message, status) {
  res.status(status).send({
    error: 'false',
    body: message,
  })
}
exports.error = function(req, res, message, status) {
  // return
  console.log('[RESPONSE ERROR]', status)
  res.status(500)
  // .send({
  //   error: message,
  //   body: '',
  // })
}
