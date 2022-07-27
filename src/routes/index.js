const { Router } = require("express");
const router = new Router();

//Raiz
router.get("/", (req, res) => {
  const data = {
    name: "Juan Francia",
    website: "https://juanfrancia12.github.io/portfolio",
  };

  res.json(data);
});

module.exports = router;
