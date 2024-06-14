const repository = require('./author-repository')

const create = async (book) => {
    return repository.save(book);
}

const list = async (query) => {
    return repository.findAll(query);
}

const findById = async (id) => {
    return repository.findById(id);
}

const deleteById = async (id) => {  
    const author = await repository.findById(id);

    if(author.books.length > 0) return

    repository.deleteById(id);
}

module.exports = {
    create,
    list,
    findById,
    deleteById
}