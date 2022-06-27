const express = require("express");
const router = express.Router();
const {
  createBucket,
  creaditem,
  list,
  bucketItems
  //   bucketItems,
} = require("../controller/aws.controller");

const { S3Client } = require("@aws-sdk/client-s3");
const REGION = "eu-central-1";
const s3 = new S3Client({ region: REGION });
const multer = require("multer");
const multer_s3 = require("multer-s3");

router.post("/", createBucket);
router.post("/itempost", creaditem);
router.get("/", list);
router.get("/items", bucketItems);

const uploadAWS = multer({
  storage: multer_s3({
    s3: s3,
    bucket: "yazilibucket304",
    metadata: (_req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (_req, _file, cb) => {
      cb(null,"ali"+ Date.now().toString() + ".png");
    },
  }),
});

router.post("/aws", uploadAWS.array("file", 3), (req, res, next) => {
  console.log(uploadAWS);
  res.status(200).json({
    success: true,
  });
});

module.exports = router;
