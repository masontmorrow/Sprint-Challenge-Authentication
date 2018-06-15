const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid Username/Password' });
      return;
    }
    if (user === null) {
      res.status(422).json({ error: 'No user with that username in our DB' });
      return;
    }
    user.checkPassword(password, (err, match) => {
      if (err) {
        res.status(422).json({ error: 'Error processing request.' });
        return;
      }
      if (match) {
        const payload = {
          username: user.username
        };
        const token = jwt.sign(payload, mysecret);
        res.json({ token });
      } else {
        res.status(422).json({ error: 'passwords dont match' });
        return;
      }
    });
  });
};

module.exports = {
  login
};
