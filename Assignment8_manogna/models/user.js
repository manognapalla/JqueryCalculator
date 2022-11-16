const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "fullName is required"],
    unique: [true, "fullName already exists in the database"],
    validate: [
      (element) => validator.isAlpha(element, "en-US", { ignore: " " }),
      "Usernames must be alphanumeric",
    ],
    minLength: [1, "Password should be at least four characters"],
  },
  email: {
    type: String,
    require: [true, "Enter an email address."],
    unique: [true, "That email address is taken."],
    lowercase: true,
    validate: [validator.isEmail, "Enter a valid email address."],
  },
  password: {
    type: String,
    required: [true, "Enter a password."],
    minLength: [4, "Password should be at least four characters"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 12);
  next();
});

module.exports = mongoose.model("Users", UserSchema);
