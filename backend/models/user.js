const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  mail: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
