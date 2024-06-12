const Sequelize = require('sequelize');
const database = require('../../../config/db');
const Author = require('../author/author-model'); // alterar

const Book = database.sequelize.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'id' //nome do atributo do banco
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
        field: 'author_id',
        references: {
            model: 'author',
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'tb_book' //nome da tabela banco
});

Book.belongsTo(Author, { foreignKey: 'authorId' });

module.exports = Book;