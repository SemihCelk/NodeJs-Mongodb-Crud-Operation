const serviceData = require("../services/data.service");

const createItem = async (req, res, next) => {
  const itemName = req.body.name;
  const itemType = req.body.itemType;
  const imageURL = req.body.imageURL;
  const itemCompanyID = req.body.itemCompanyID;
  try {
    const data = await serviceData.createData(
      itemName,
      itemType,
      imageURL,
      itemCompanyID
    );
    console.log(data)
    res.status(201).json({
      succes: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
const readItem = async (req, res, next) => {
  try {
    const list = await serviceData.reader();
    console.log(list[0].itemCompanyID)
    res.status(200).json({
      succes: true,
      data: list,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
const update = async (req, res, next) => {
  const id = req.body.id;
  const itemName = req.body.itemName;
  const itemType = req.body.itemType;
  const imageURL = req.body.imageURL;
  const companyName = req.body.companyName;
  try {
    const update = await serviceData.updater(
      id,
      itemName,
      itemType,
      companyName,
      imageURL
    );
    res.status(201).json({
      succes: true,
      data: update,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
const deleteData = async (req, res, next) => {
  const id = req.body.id;
  try {
    const deleter = await serviceData.delete(id);
    console.log(deleter);
  } catch (error) {
    console.log(error);
    next();
  }
};
module.exports = { createItem, readItem, update, deleteData };
