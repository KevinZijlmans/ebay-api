const { Router } = require('express')
const Comment = require('./model')

const router = new Router()

  router.post('adverts/:id/comments', (req, res, next) => {
    const text = req.body.text
    const advertId = req.params.id
    Comment
      .create({text, advertId})
      .then(comment => {
        if (!comment) {
          return res.status(404).send({
            message: `comment does not exist`
          })
        }
        return res.status(201).send(comment)
      })
      .catch(error => next(error))
  })

  module.exports = router