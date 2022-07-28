//REQUIERE PARA ENCRIPTAR CONTRASEÑA

const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.TOKEN_CRYPTR);

const { db_users_file } = require("../files/users.file");

//AUTENTICAR EXISTENCIA DE DATOS - LOGIN
function isLoginAuthenticated({ email, password }) {
  return (
    db_users_file.findIndex(
      (user) =>
        user.email === email && user.password === cryptr.encrypt(password)
    ) !== -1
  );
}
exports.isLoginAuthenticated = isLoginAuthenticated;
