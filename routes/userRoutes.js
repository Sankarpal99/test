// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);
router.post('/users/:id/delete', userController.deleteUser);
router.post('/users/:id/rename', userController.renameUser);

module.exports = router;
