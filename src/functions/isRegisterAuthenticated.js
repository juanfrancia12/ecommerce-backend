const { db_users_file } = require("../files/users.file");

//AUTENTICAR EXISTENCIA DE EMAIL - REGISTER
function isRegisterAuthenticated({ email }) {
  return db_users_file.findIndex((user) => user.email === email) !== -1;
}

exports.isRegisterAuthenticated = isRegisterAuthenticated;
