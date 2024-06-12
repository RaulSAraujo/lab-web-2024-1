const Joi = require("joi");

const createSchema = {
    payload: Joi.object({
        title: Joi
            .string()
            .required(),
        authorId: Joi
            .string()
            .required(),
        publishedDate: Joi
            .string()
            .required(),
        isbn: Joi
            .string()
            .required(),
        summary: Joi
            .string()
            .required()
    })
};

const getAll = {
    query: Joi.object({
        title: Joi
            .string(),
        authorname: Joi
            .string()
    })
}

const getById = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
}


module.exports = {
    createSchema,
    getAll,
    getById
};