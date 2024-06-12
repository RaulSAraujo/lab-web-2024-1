const repository = require('./author-repository')

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
    const user = await repository.findById(id);

    if(user.books.length > 0) return

    repository.deleteById(id);
}

module.exports = {
    create,
    list,
    findById,
    deleteById
}