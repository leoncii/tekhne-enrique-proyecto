

exports.success = (req, res, data, error) => {
  res.status(200).send({
    error: "No hay error",
    body: data
  })
}

exports.error = (req, res, error) => {
  res.status(500).send({
    error: status,
    body: error,
  })
}
