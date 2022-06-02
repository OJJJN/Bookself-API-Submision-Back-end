const { addBookHndlr,
  getAllBooksHndlr,
  getBookByIdHndlr,
  editBookByIdHndlr,
  deleteBookByIdHndlr,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHndlr,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHndlr,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHndlr,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHndlr,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHndlr,
  },
];

module.exports = routes;
