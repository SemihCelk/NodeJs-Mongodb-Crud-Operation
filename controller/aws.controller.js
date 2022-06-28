const awsService = require("../services/aws.service");

const createBucket = async (req, res, next) => {
  const bucketName = req.body.bucketName;
  try {
    const add = await awsService.create_Bucket(bucketName);
    console.log(add);
    res.status(200).json({
      succes: true,
      data: add,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

const creaditem = async (req, res, next) => {
  const file = "../projeler/projectphotos/userpage.png";
  const bucketName = "yazilibucket304";
  try {
    const creater = await awsService.bucketItemAdd(bucketName, file);
    if (creater!=="hata") {
      res.status(200).json({
        succes: true,
        data: "Created new object.",
        link: creater,
      });
    } else {
      res.status(200).json({
        succes: false,
        data: "invalid file.",
      });
    }
  } catch (error) {
    console.log(error);
    next();
  }
};
const list = async (req, res, next) => {
  try {
    const lister = await awsService.list();
    console.log(lister.Buckets);
    res.status(200).json({
      succes: true,
      data: lister.Buckets,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
const bucketObjects = async (req, res, next) => {
  try {
    const bucketList = await awsService.bucketObjectList();
    console.log(bucketList.Contents);
    res.status(200).json({
      succes: true,
      data: bucketList.Contents,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

module.exports = { createBucket, creaditem, list, bucketObjects };
