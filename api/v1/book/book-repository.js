const { Op } = require('sequelize');
const bookModel = require('./book-model');
const Author = require('../author/author-model');

const save = async (book) => {
    return bookModel.create(book);
}

const findAll = async (query) => {
    const { title, authorName } = query;

    return bookModel.findAll({
        include: [{
            model: Author,
            required: true //inner
        }],
        where: {
            ...(title) ? { title: { [Op.iLike]: `${title}%` } } : {},
            ...(authorName) ? { name: { [Op.iLike]: `${authorName}%` } } : {}
        }
    });
}

const findById = async (id) => {
    return bookModel.findOne({
        include: [{
            model: Author,
            required: true //left
        }],
        where: {
            id: id
        }
    })
}

module.exports = {
    save,
    findAll,
    findById
}