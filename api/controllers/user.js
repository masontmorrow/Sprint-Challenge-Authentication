const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  if (!username) return res.json({ error: `Please insert a username`});
  if (password.length < 4) return res.json({ error: `Password should be at least 4 characters long.`});
  User.create({ username, password })
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err.message));
};

module.exports = {
  createUser
}; 
