const Comment = require('./schemas/comment')

const listComments = async () => {
  const results = await Comment.find({})
  return results
}

const addComment = async (body) => {
  const result = await Comment.create(body)
  return result
}

module.exports = {
    listComments,
    addComment
}