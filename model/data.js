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
  itemImage: { 
    type: String,
    required: true,
  },
  itemCompanyName: { 
    type: String,
    required: true,
  },
});

const Data = mongoose.model("Data",DataSchema)
module.exports=Data