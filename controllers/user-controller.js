const userModel = require("../models/user-model");

const getUser = (req, res) => {
  try {
    const user = userModel.getUser();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const getUserByIndex = (req, res) => {
  try {
    const user = userModel.getUserByIndex(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, getUserByIndex };
