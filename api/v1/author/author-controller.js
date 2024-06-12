const business = require('./author-business');

const getAuthor = async (request, h) => {
    const result = await business.list();
    return h.response(result).code(200);
}

const create = async (request, h) => {
    const { payload } = request;

    try {
        const result = await business.create(payload);

        return h.response(result).code(201);
    } catch (error) {
        console.log(error);
    }
}

const findById = async (request, h) => {

    const productId = request.params.id;

    return h.response(await business.findById(productId));
}

const deleteById = async (request, h) => {
    const authorId = request.params.id;

    try {
        await business.deleteById(authorId);

        return h.response({}).code(204);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAuthor,
    create,
    findById,
    deleteById
};