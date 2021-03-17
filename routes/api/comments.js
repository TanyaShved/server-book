const express = require('express')
const router = express.Router()
const validation = require('./validation')
const commentsControllers = require('../../controllers/comments')

router
.get('/', commentsControllers.getAll)
.post('/', validation.addComment, commentsControllers.createComment)

module.exports = router