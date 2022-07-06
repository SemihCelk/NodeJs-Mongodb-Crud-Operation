const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  imageURL: { 
    type: String,
    required: true,
  },
  itemCompanyID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref:"user",
    required: true,

  },
});

const Data = mongoose.model("Data",DataSchema)
module.exports=Data