const fs = require("fs");

let db_products_file = JSON.parse(
  fs.readFileSync("src/api/products.json", "utf-8")
);

exports.db_products_file = db_products_file;
