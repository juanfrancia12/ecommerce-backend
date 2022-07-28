const { Router } = require("express");
const router = new Router();

const fs = require("fs");

let db_products = JSON.parse(fs.readFileSync("src/api/products.json", "utf-8"));
let db_products_category = JSON.parse(
  fs.readFileSync("src/api/products.category.json", "utf-8")
);

// PRUEBA UNIR DOS JSON

const prueba = db_products.map((product) => {
  const newPrice = product.price - product.price * (product.discount / 100);

  let filterr = product.category.map((item) => db_products_category[item - 1]);

  let nuevoObjeto = filterr.map((el) => Object.values(el));

  return { ...product, newPrice, categoryName: [...nuevoObjeto.flat()] };
});

// TODO: VIEW ALL PRODUCTS
router.get("/", (req, res) => {
  res.json(prueba);
});

// TODO: VIEW ONE PRODUCT
router.get("/:name", (req, res) => {
  const { name } = req.params;
  const product = db_products.filter(
    (project) =>
      project.name.toLowerCase() === name.replace("-", " ").toLowerCase()
  );

  if (product.length < 1) {
    res.status(404).send("No se encuentra el producto");
    return;
  }

  res.json(product);
});

// TODO: SAVE PRODUCT

router.post("/add", (req, res) => {
  const { name, description, image, category, stock, price, discount, rate } =
    req.body;

  if (!name || !description || !image || !stock || !price) {
    res.status(404).send("Complete la información del producto");
    return;
  }

  const id = db_products.length ? db_products.length + 1 : 1;
  const newProduct = { id, ...req.body };

  db_products.push(newProduct);

  const json_projects = JSON.stringify(db_products, null, 2);
  fs.writeFileSync("src/api/products.json", json_projects, "utf-8");

  res.json(db_products);
});

// TODO: UPDATE PROJECT

router.get("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, image, category, stock, price, discount, rate } =
    req.body;

  if (!name || !description || !image || !stock || !price) {
    res.status(404).send("Complete la información del producto");
    return;
  }

  const findProduct = db_products.findIndex((item) => item.id == id);
  let copiaDBproducts = [...db_products];

  copiaDBproducts[findProduct] = {
    ...copiaDBproducts[findProduct],
    ...req.body,
  };

  db_products = copiaDBproducts;

  const json_projects = JSON.stringify(db_products, null, 2);
  fs.writeFileSync("src/api/products.json", json_projects, "utf-8");

  res.send(db_products);
});

// TODO: DELETE PRODUCT

router.get("/delete/:id", (req, res) => {
  db_products = db_products.filter((project) => project.id != req.params.id);

  const json_projects = JSON.stringify(db_products, null, 2);
  fs.writeFileSync("src/api/products.json", json_projects, "utf-8");

  res.send(db_products);
});

module.exports = router;
