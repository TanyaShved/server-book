const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Set name for comment'],
    },
    comment: {
      type: String,
      required: [true, 'Set comment'],
    },
}, { versionKey: false, timestamps: true })
  
const Comment = model('comment', commentSchema)
  
module.exports = Comment