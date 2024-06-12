const authorModel = require('./author-model');
const Book = require('../book/book-model');

const save = async (book) => {
    return authorModel.create(book);
}

const findAll = async () => {
    return authorModel.findAll({
        include: [{
            model: Book,
            required: true //inner
        }]
    });
}

const findById = async (id) => {
    return authorModel.findOne({
        include: [{
            model: Book,
            required: false //left
        }],
        where: {
            id: id
        }
    })
}

const deleteById = async (id) => {
    authorModel.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    save,
    findAll,
    findById,
    deleteById
}