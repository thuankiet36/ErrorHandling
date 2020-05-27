const Book = require("../models/book.model.js");

module.exports.index = async (request, response, next) => {
  try {
    var a;
    a.c();
    var books = await Book.find();
    var page = parseInt(request.query.page) || 1;
    var perPage = 5;
    var totalBooks = books.length;
    var pages = Math.ceil(totalBooks / perPage);
    var start = (page - 1) * perPage;
    var end = page * perPage;

    response.render("./books/index.pug", {
      books: books.slice(start, end),
      pages: pages,
      current: page,
    });
  } catch (err) {
    response.render("./errors/index.pug");
  }
};
