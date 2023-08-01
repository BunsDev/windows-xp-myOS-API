const { Text } = require("../models");

const getAllTexts = async (req, res) => {
  try {
    const texts = await Text.findAll();
    res.send(texts);
  } catch (error) {
    console.log(error);
  }
};

const createText = async (req, res) => {
  try {
    const newText = await Text.create({
      textName: req.body.textName,
      content: req.body.content,
      userId: req.body.userId,
    });
    res.send(newText);
  } catch (error) {
    console.log(error);
  }
};

const updateText = async (req, res) => {
  try {
    const updatedText = await Text.update(
      { content: req.body.content },
      {
        where: {
          id: req.body.id,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteText = async (req, res) => {
  try {
    console.log(req.body);
    const deletedText = await Text.destroy({ where: { id: req.body.id } });
    res.send(deletedText);
  } catch (error) {
    console.log(error);
  }
};

const deleteAllTexts = async (req, res) => {
  try {
    const deletedTexts = await Text.destroy({ where: {}, truncate: true });
    res.send("all texts deleted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTexts,
  createText,
  deleteAllTexts,
  updateText,
  deleteText,
};
