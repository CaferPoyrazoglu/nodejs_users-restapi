const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },
  age: {
    type: Number,
    reuire: true,
  },
  job: {
    type: String,
    reuire: true,
  },
  role: {
    type: String,
    reuire: true,
  },
  pic: {
    type: String,
    reuire: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model("User", userSchema);
