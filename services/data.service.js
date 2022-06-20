const { findByIdAndDelete } = require("../model/data");
const Data = require("../model/data");

class DataService {
  async createData(itemName, itemType, itemImage, itemCompanyName) {
    const data = new Data();
    data.itemName = itemName;
    data.itemType = itemType;
    data.itemImage = itemImage;
    data.itemCompanyName = itemCompanyName;
    return await data.save();
  }
  async reader() {
    return await Data.find();
  }
  async updater(id, itemName, itemType, itemImage, itemCompanyName) {
    return await Data.findByIdAndUpdate(id, {
      itemName: itemName,
      itemType: itemType,
      itemImage: itemImage,
      itemCompanyName: itemCompanyName,
    });
  }
  async delete(id){
    return await Data.deleteOne({id: id})
  }
}
module.exports = new DataService();
