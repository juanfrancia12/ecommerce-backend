const fs = require("fs");

let db_users_file = JSON.parse(fs.readFileSync("src/api/users.json", "utf-8"));

exports.db_users_file = db_users_file;
