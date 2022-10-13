const express = require('express')
const bookRouter = express.Router()

const BookController = require('../controllers/BookController')
bookRouter
  .route('/book')
  .get(BookController.index)
  .post(BookController.createBook)

bookRouter
  .route('/book/:id')
  .get(BookController.showSingleBook)
  .patch(BookController.updateBook)
  .delete(BookController.deleteBook)

module.exports = bookRouter
