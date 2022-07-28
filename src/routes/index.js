require("dotenv").config();
const { Router } = require("express");
const router = new Router();

//Raiz
router.get("/", (req, res) => {
  const data = {
    name: "Juan Francia",
    website: "https://juanfrancia12.github.io/portfolio",
    products: process.env.URL + "api/products",
    users: process.env.URL + "api/users",
  };

  res.json(data);
});

module.exports = router;
