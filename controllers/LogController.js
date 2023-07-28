const { Log, User } = require("../models");

const getAllLogs = async (req, res) => {
  try {
    const logs = await Log.findAll();
    res.send(logs);
  } catch (error) {
    console.log(error);
  }
};

const createLog = async (req, res) => {
  try {
    const newLog = await Log.create({
      content: req.body.content,
      userId: req.body.userId,
    });
    res.send(newLog);
  } catch (error) {
    console.log(error);
  }
};

// const deleteAllUsers = async (req, res) => {
//   try {
//     const deletedUsers = await User.destroy({ where: {}, truncate: true });
//     res.send("all users deleted");
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  getAllLogs,
  createLog,
  //   deleteAllUsers,
};
