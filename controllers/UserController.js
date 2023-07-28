const { User } = require("../models");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.send(newUser);
    console.log(error);
  } catch (error) {}
};

const deleteAllUsers = async (req, res) => {
  try {
    const deletedUsers = await User.destroy({ where: {}, truncate: true });
    res.send("all users deleted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteAllUsers,
};
