const { Book, Author } = require("../models")

class AuthorController {
  static async getSearchAuthor(req, res) {
    try {
      const { name } = req.query
      const data = await Author.findAll({ include: [Book] })
      const response = data.filter(el => {
        return name ? el.name === name : true
      })
      res.json({ Author: response, total: data.length + " Author" })
    } catch (error) {
      console.log(error)
    }
  }

  static async getAllBook(req, res) {
    try {
      let { authorId, params, params2 } = req.params
      let data = await Book.findAll({ where: { authorId }, include: [Author] })

      let page = +params2
      let limit = 20
      let startIndex = (page - 1) * limit
      let endIndex = page * limit
      if (params === undefined) {
        throw { msg: "bad request" }
      } else if (data.length === 0) {
        throw { msg: "not found" }
      } else {
        switch (params) {
          case "Page":
            let dataPerPage = [...data]
            dataPerPage = dataPerPage.slice(startIndex, endIndex)
            if (dataPerPage.length === 0) {
              throw { msg: "not found" }
            } else {
              res.status(200).json({
                Author: data[0].Author,
                Books: dataPerPage,
                Total: dataPerPage.length + " Books"
              })
            }
            break
          case "Show":
            const resultPage = Math.ceil(data.length / limit)
            res.status(200).json({ resultPage })
            break
          case "Page":
            res.status(200).json(data.length)
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
                  if (a["createdAt"] < b["createdAt"]) {
                    return 1
                  }
                  if (a["createdAt"] > b["createdAt"]) {
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

module.exports = AuthorController
