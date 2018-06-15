const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  User.create({ username, password })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err.message));
};

module.exports = {
  createUser
};
