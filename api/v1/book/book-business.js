const repository = require('./book-repository')

const create = async (book) => {

    //logica negocio
    return repository.save(book);
}

const list = async (query) => {
    return repository.findAll(query);
}

const findById = async (id) => {
    return repository.findById(id);
}

const deleteById = async (id) => {
    repository.deleteById(id);
}

module.exports = {
    create,
    list,
    findById,
    deleteById
}