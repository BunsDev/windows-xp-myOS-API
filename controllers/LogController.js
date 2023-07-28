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

const deleteAllLogs = async (req, res) => {
  try {
    const deletedUsers = await Log.destroy({ where: {}, truncate: true });
    res.send("all logs deleted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllLogs,
  createLog,
  deleteAllLogs,
};
