const { Book, Author } = require("../models")

class BookController {
  static async getSearchBook(req, res) {
    try {
      const { title } = req.query
      let data = await Book.findAll({ include: [Author] })

      const response = data.filter(el => {
        return title ? el.title === title : true
      })

      res.json({ books: response, total: data.length + " Books" })
    } catch (error) {
      console.log(error)
    }

    res.json(response)
  }

  static async getAllBook(req, res) {
    try {
      let data = await Book.findAll({ include: [Author] })

      let { params, params2 } = req.params
      let page = +params2
      let limit = 3
      let startIndex = (page - 1) * limit
      if (params === undefined) {
        throw { msg: "bad request" }
      } else if (data.length === 0) {
        throw { msg: "not found" }
      } else {
        switch (params) {
          case "Page":
            let dataPerPage = await Book.findAll({
              offset: startIndex,
              limit,
              include: [Author]
            })
            if (dataPerPage.length === 0) {
              throw { msg: "not found" }
            } else {
              res.status(200).json({ dataPerPage })
            }
            break
          case "Show":
            const resultPage = Math.ceil(data.length / limit)
            res.status(200).json({ resultPage })
            break
          case "SortBy":
            function compare(a, b) {
              if (a[params2] < b[params2]) {
                return -1
              }
              if (a[params2] > b[params2]) {
                return 1
              }
              return 0
            }
            data.sort(compare)
            res.status(200).json(data)
            break
          case "OrderBy":
            switch (params2) {
              case "ASC":
                function sortASC(a, b) {
                  if (a["createdAt"] < b["createdAt"]) {
                    return -1
                  }
                  if (a["createdAt"] > b["createdAt"]) {
                    return 1
                  }
                  return 0
                }
                data.sort(sortASC)
                res.status(200).json(data)
                break
              case "DESC":
                function sortDESC(a, b) {
                  if (a["title"] < b["title"]) {
                    return 1
                  }
                  if (a["title"] > b["title"]) {
                    return -1
                  }
                  return 0
                }
                data.sort(sortDESC)
                res.status(200).json(data)
                break
              default:
                throw { msg: "bad request" }
            }
            break
          default:
            throw { msg: "bad request" }
        }
      }
    } catch (error) {
      if (error.msg === "not found") {
        res.status(404).json({ msg: error.msg })
      } else if (error.msg === "bad request") {
        res.status(400).json({ msg: error.msg })
      }
    }
  }
}

module.exports = BookController
