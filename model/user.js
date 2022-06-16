const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: { 
    type: Number,
    required: true,
  },
});

const User = mongoose.model("user",UserSchema)
module.exports=User