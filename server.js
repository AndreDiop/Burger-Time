const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => {
  console.log("server hitting on http://localhost:" + PORT);
});

// # Create a Fullstack App with Express, MySQL, and Handlebars
// ​
// ## Basic Setup
// 1. `touch server.js`
// 2. `npm init -y`
// 3. `npm install mysql express express-handlebars`
// 4. `npm install nodemon -D` - OPTIONAL
// 5. Build out the folder structure.
// ​
// /views/layouts/main.handlebars
// /views/index.handlebars
// ​
// 6. Boilerplate to the main.handlebars (include `{{{ body }}}`)
// ​
// ## Create your SQL Schema and Seeds
// 1. Drop database
// 2. Create database
// 3. Use database
// 4. Create tables
// 5. Insert seed data into tables.
// ​
// ## Build out My Server
// 1. Require the packages
//   a. express
//   b. expbhs
//   c. mysql
// 2. Create an instance of express
// 3. Add a PORT to listen on
// 4. Listen on the PORT
// 5. copy/paste the middleware
//   a. JSON body parser
//   b. Handlebars engine config
// 6. Create the MySQL connection
// 7. Connect to MySQL
// 8. Add the routes
// ​
// ## Building a Single View Route - GET Requests
// 1. Test with `res.send`
// 2. Build out the query in MySQL Workbench
// 3. Call `connection.query` inside the route to return the data.
// 4. Build the handlebars file you wish to render.
// 5. Call `res.render` with a) name of the file to render, b) an object that includes the data we want to display.
// ​
// 6. Rinse and repeat.
// ​
// ## Build API Route