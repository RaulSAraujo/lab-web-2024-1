const repository = require('./author-repository')

const create = async (author) => {
    return repository.save(author);
}

const list = async (query) => {
    return repository.findAll(query);
}

const findById = async (id) => {
    return repository.findById(id);
}

const deleteById = async (id) => {  
    const author = await repository.findById(id);

    if(author.Books.length > 0) throw new Error('Unable to delete author.')

    repository.deleteById(id);
}

module.exports = {
    create,
    list,
    findById,
    deleteById
}