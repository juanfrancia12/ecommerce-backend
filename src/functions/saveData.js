const { db_users_file } = require("../files/users.file");
const { db_products_file } = require("../files/products.file");

const DB_FILES = {
  user: db_users_file,
  product: db_products_file,
};

function saveRegister({ file, newData }) {
  const saveDataDB = DB_FILES[file];

  return fs.writeFileSync(saveDataDB, newData, "utf-8");
}

exports.saveRegister = saveRegister;
