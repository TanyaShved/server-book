const Joi = require("joi");
const { HttpCode } = require('../../helpers/constants')

const schemaCreateComment = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    comment: Joi.string().min(1).max(250).required(),
})

const validate = (schema, obj, next) => {
    const { error } = schema.validate(obj)
    if (error) {
        const [{ message }] = error.details
        return next({
            status: HttpCode.BAD_REQUEST,
            message: `Filed: ${message.replace(/"/g, "")}`,
        })
    }
    next() 
}

module.exports.addComment = (req, _res, next) => {
    return validate(schemaCreateComment, req.body, next)
}