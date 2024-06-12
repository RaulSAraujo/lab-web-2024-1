const { getBooks, create, findById } = require('./book-controller');
const schema = require('./book-schema');

const plugin = {
    name: 'book-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    description: 'List of books',
                    handler: getBooks,
                    validate: schema.getAll
                }
            },
            {
                method: "GET",
                path: "/v1/books/{id}",
                options: {
                    tags: ['api'],
                    description: 'Create a books',
                    handler: findById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/v1/books",
                options: {
                    tags: ['api'],
                    handler: create,
                    validate: schema.createSchema
                }
            }
        ])
    }
};

module.exports = plugin;