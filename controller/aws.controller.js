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
  
  const bucketName = req.body.bucketName;
  const fileWay = req.body.x;
  try {
    const creater = await awsService.bucketItemAdd(bucketName,fileWay)
    const link ="https://yazilibucket304.s3.eu-central-1.amazonaws.com/"+creater
    res.status(200).json({
      succes: true,
      data: "Created new object.",
      link:link
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
const bucketItems=async(req,res,next)=>{
  const bucketList = await awsService.bucketObjectList()
  console.log(bucketList.Contents);
  res.status(200).json({
    succes:true,
    data:bucketList.Contents
  })
}

module.exports = { createBucket, creaditem, list ,bucketItems};
