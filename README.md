# AKSA-BE

This time I got a project to create a simple API

- Features
  - Show => total books that will show in the page
  - Page => total page are available
  - SortBy => sorting books by their field
  - OrderBy => ordering book by ASC or DESC

## How to using

For this API, I haven't had the chance to deploy it, for some reason. For how to try it, you just clone this repo and try it on your postman or something similar.

<br />
And to run it you just need to run the command below 
<br />

To install an existing package

```bash
npm install
```

create database
<br />

```bash
sequelize db:create
```

migrate all
<br />

```bash
sequelize db:migrate
```

seed all data
<br />

```bash
sequelize db:seed:all
```

To running server
<br />

```bash
nodemon app.js
```

## Using API

- http://localhost:3000/api/v1/books/search?title=title_book

  - you can get book by title

- http://localhost:3000/api/v1/books/:params?/:params2?

  - you can get book by params, but params 2 optional
    - params/params2
    * Page/1 = you can get 20 book per page
    * Show = you can get total page of book
    * SortBy/field = you can sort book by field
    * OrderBy/ASC or DESC = you can get book and shor this by createdAt

  - If data not found will showing not found message
  - If bad request will showing bad request message

<br />
For Author API same with the book API