const { Router } = require("express");
const router = new Router();

const fs = require("fs");

let db_users = JSON.parse(fs.readFileSync("src/api/users.json", "utf-8"));

// TODO: VIEW PORTFOLIO
router.get("/", (req, res) => {
  res.json(db_users);
});

module.exports = router;
