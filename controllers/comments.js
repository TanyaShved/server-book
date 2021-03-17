const Comments = require('../model/comments')
const { HttpCode } = require('../helpers/constants')

const getAll = async (_req, res, next) => {
  try {
    const comments = await Comments.listComments()
    return res.json({
      status: 'success',
      code: HttpCode.OK,
      data: {
        comments,
      }
    })
  } catch (error) {
    next(error)
  }
}

const createComment = async (req, res, next) => {
   try {
    const comment = await Comments.addComment(req.body)
    return res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: {
        comment,
      }
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
    getAll,
    createComment,
}