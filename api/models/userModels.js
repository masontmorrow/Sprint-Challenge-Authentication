const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true,
    minlength: 4
  }
});

UserSchema.pre('save', function(next) {
  return bcrypt
    .hash(this.password, SALT_ROUNDS)
    .then(hash => {
      this.password = hash;
      return next();
    })
    .catch(err => next(err));
});

UserSchema.methods.checkPassword = function(plainTextPW, callback) {
  return bcrypt.compare(plainTextPW, this.password, callback);
};

module.exports = mongoose.model('User', UserSchema);
