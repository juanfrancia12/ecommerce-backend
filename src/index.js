const express = require("express");
const app = express();
const morgan = require("morgan");

//Configuraciones
app.set("port", process.env.PORT || 5000);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require("./routes/index"));
app.use("/api/products", require("./routes/products"));
// app.use("/api/projects", require("./routes/projects"));

//Starting the server...
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
