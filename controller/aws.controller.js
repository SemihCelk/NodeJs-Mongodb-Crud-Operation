const awsService = require("../services/aws.service");
const FormData = require('form-data');
const form = new FormData();

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
  
  const bucketName = req.body.bucketName;
  const fileWay = req.body.x;
  try {
    const creater = await awsService.bucketItemAdd(bucketName,fileWay)
    console.log(creater);
    res.status(200).json({
      succes: true,
      data: "Created new object.",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};
const list = async (req, res, next) => {
  const lister = await awsService.list();
  console.log(lister.Buckets);
  res.status(200).json({
    succes: true,
    data: lister.Buckets,
  });
};
// const bucketItems=async(req,res,next)=>{
//   const bucketList = await awsService.bucketItems()
//   console.log(bucketList);
//   res.status(200).json({
//     succes:true,
//     data:bucketList
//   })
// }

module.exports = { createBucket, creaditem, list };
