const { Op } = require('sequelize');
const bookModel = require('./book-model');
const Author = require('../author/author-model');

const save = async (book) => {
    return bookModel.create(book);
}

const findAll = async (query) => {
    const { authorId, title, author } = query;

    try {
        const res = await bookModel.findAll({
            include: Author,
            where: {
                ...(authorId) ? { authorId } : {},
                ...(title) ? { title: { [Op.iLike]: `${title}%` } } : {},
                ...(author && author.name) ? { '$Author.name$': { [Op.iLike]: `${author.name}%` } } : {},
            }
        });

        return res
    } catch (error) {
        console.log(error)
    }
}

const findById = async (id) => {
    return bookModel.findOne({
        include: [{
            model: Author,
            required: false
        }],
        where: {
            ...(id) ? { id } : {},
        }
    })
}

module.exports = {
    save,
    findAll,
    findById
}