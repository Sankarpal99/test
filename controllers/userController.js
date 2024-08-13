// controllers/userController.js
const User = require("../models/userModel");

const userController = {
  getAllUsers: (req, res) => {
    User.getAll((err, users) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.render("users", { users });
    });
  },

  createUser: (req, res) => {
    const { name, age } = req.body;
    User.create({ name, age }, (err, userId) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res
        .status(201)
        .redirect("/users");
    });
  },
  deleteUser: (req, res) => {
    const { id } = req.params;
    User.delete(id, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.redirect('/users');
    });
  },

  renameUser: (req, res) => {
    const { id } = req.params;
    const { newName } = req.body;
    User.rename(id, newName, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.redirect('/users');
    });
  },
};

module.exports = userController;
