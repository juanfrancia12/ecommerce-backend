//REQUIERE PARA EL TOKEN DEL USUARIO

const jwt = require("jsonwebtoken");

//KEY SECRETO - JWT

const SECRET_KEY = process.env.TOKEN_JWT;

//TIEMPO DE EXPIRACIÓN - JWT

const expiresIn = "1h";

//CREAT TOKEN - jwt
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}
exports.createToken = createToken;
