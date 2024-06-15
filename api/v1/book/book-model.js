const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Author = require('../author/author-model');

const Book = database.sequelize.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'codigo'
    },
    title: {
        type: Sequelize.STRING,
        field: 'title'
    },
    publishedDate: {
        type: Sequelize.STRING,
        field: 'published_date'
    },
    isbn: {
        type: Sequelize.STRING,
        field: 'isbn'
    },
    summary: {
        type: Sequelize.STRING,
        field: 'summary'
    },
    authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Author',
            key: 'id'
        },
        field: 'author_id'
    },
}, {
    timestamps: false,
    tableName: 'tb_book',
});

Author.hasMany(Book, {
    foreignKey: 'authorId'
});

Book.belongsTo(Author, {
    foreignKey: 'id'
});

module.exports = Book;