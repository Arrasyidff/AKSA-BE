const routes = require("express").Router()
const BookController = require("../controllers/BookController")
const AuthorController = require("../controllers/AuthorController")

routes.get("/api/v1/books/search", BookController.getSearchBook)
routes.get("/api/v1/books/:params?/:params2?", BookController.getAllBook)

routes.get("/api/v1/authors/:authorId/books/:params?/:params2?", AuthorController.getAllBook)
routes.get("/api/v1/authors/search", AuthorController.getSearchAuthor)

module.exports = routes
