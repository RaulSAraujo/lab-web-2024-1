const authorModel = require('./author-model');
const book = require('../book/book-model')

const save = async (author) => {
    return authorModel.create(author);
}

const findAll = async () => {
    try {
        const author = await authorModel.findAll({
            include: book,
        });

        return author
    } catch (error) {
        console.log(error)
    }
}

const findById = async (id) => {
    return authorModel.findOne({
        include: book,
        where: {
            ...(id) ? { id } : {},
        }
    })
}

const deleteById = async (id) => {
    authorModel.destroy({
        where: {
            ...(id) ? { id } : {},
        }
    });
}

module.exports = {
    save,
    findAll,
    findById,
    deleteById
}