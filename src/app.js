const express = require("express");
const database = require("./config/database");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// controllers
const UsersController = require("./controllers/UsersController");
const FormController = require("./controllers/FormController");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("views"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// rotas api
app.get("/users", UsersController.index);
app.post("/users", UsersController.create);
app.post("/users/:id", UsersController.update);
app.get("/users/:id", UsersController.findOne);
app.delete("/users/:id", UsersController.delete);

// rotas views
app.get("/", FormController.index);
app.get("/users.ejs", FormController.users);
app.get("/form.ejs", FormController.form);

try {
  app.listen(8080, async () => {
    await database.sync();
    console.log("Running on http://localhost:8080");
    console.log("Connection has been established successfully.");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
