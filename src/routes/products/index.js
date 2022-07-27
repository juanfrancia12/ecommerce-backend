const { Router } = require("express");
const router = new Router();

const fs = require("fs");

let db_products = JSON.parse(fs.readFileSync("src/api/products.json", "utf-8"));

// TODO: VIEW PORTFOLIO
router.get("/", (req, res) => {
  res.json(db_products);
});

module.exports = router;
