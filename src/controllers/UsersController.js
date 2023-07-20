const User = require("../models/UserModel");

module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();

    res.send(users);
  },

  findOne: async (req, res) => {
    const id = req.params.id;

    try {
      const user = await User.findOne({ where: { id: id } });
      res.render("form", { response: JSON.stringify(user) });
    } catch (error) {
      res.json({ message: error });
    }
  },

  create: async (req, res) => {
    const { firstName, lastName, age } = req.body;
    //console.log(req.body);
    const user = { firstName, lastName, age };

    try {
      await User.create(user);
      res.render("index");
    } catch (error) {
      res.json({ message: error });
    }
  },

  update: async (req, res) => {
    const id = req.params.id;

    const { firstName, lastName, age } = req.body;

    try {
      const user = await User.findOne({ where: { id: id } });
      if (user) {
        const updatedUser = { firstName, lastName, age };
        await user.update(updatedUser);
        await user.save();
        res.render("index");
      }
    } catch (error) {
      res.json({ message: error });
    }
  },

  delete: async (req, res) => {
    const id = req.params.id;

    try {
      await User.destroy({
        where: { id: id },
      });
    } catch (error) {
      res.json({ message: error });
    }
  },
};
