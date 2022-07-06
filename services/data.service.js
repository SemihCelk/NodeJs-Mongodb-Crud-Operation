const Data = require("../model/data");

class DataService {
  async createData(itemName, itemType, imageURL, itemCompanyID) {
    const data = new Data();
    data.itemName = itemName;
    data.itemType = itemType;
    data.imageURL = imageURL;
    data.itemCompanyID = itemCompanyID;
    return await data.save();
  }
  async reader() {
    return await Data.find();
  }
  async updater(id, itemName, itemType, imageURL, itemCompanyID) {
    return await Data.findByIdAndUpdate(id, {
      itemName: itemName,
      itemType: itemType,
      imageURL: imageURL,
      itemCompanyID: itemCompanyID,
    });
  }
  async delete(id){
    return await Data.deleteOne({itemCompanyName: id})
  }
}
module.exports = new DataService();
