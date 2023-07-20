const User = require("../models/UserModel");

module.exports = {
  index: (req, res) => {
    res.render("index");
  },
  users: async (req, res) => {
    const users = await User.findAll();

    if (users) {
      res.render("users", { response: JSON.stringify(users) });
      return;
    }

    res.render("users");
  },

  form: async (req, res) => {
    res.render("form", { message: false, response: false });
  },
};
