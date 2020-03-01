const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "tluben@gmail.com",
  user: "root",
  password: "*Josie102689",
  database: "employees"
});

connection.connect();

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;
