const {
  PutObjectCommand,
  CreateBucketCommand,
  ListBucketsCommand,
  ListObjectsCommand,
} = require("@aws-sdk/client-s3");
const { S3Client } = require("@aws-sdk/client-s3");
const REGION = "eu-central-1";
const s3Client = new S3Client({ region: REGION });
const path = require("path");
const fs = require("fs");

class awsService {
  async create_Bucket(bucketName) {
    const data = await s3Client.send(
      new CreateBucketCommand({ Bucket: bucketName })
    );
    console.log("Successfully created a bucket called ", data.Location);
    return data;
  }

  async bucketItemAdd(bucketName, file) {
    const fileStream = fs.createReadStream(file);
    const uploadParams = {
      Bucket: bucketName,
      Key: path.basename(file),
      Body: fileStream,
    };
    const fileName = file.split("/").pop();
    const stats = fs.statSync(file);
    const byte = stats.size;
    const mb = byte / (1024 * 1024 * 1024);
    const ext = file.split(".").pop();
    if ((mb <= 5 && ext == "png") || ext == "jpeg") {
      const data = await s3Client.send(new PutObjectCommand(uploadParams));
    const link ="https://yazilibucket304.s3.eu-central-1.amazonaws.com/"+fileName
      return link;
    }else{
      return "hata"
    }
  }

  async list() {
    const command = new ListBucketsCommand("");
    return await s3Client.send(command);
  }
  async bucketObjectList() {
    const bucketParams = { Bucket: "yazilibucket304" };
    return await s3Client.send(new ListObjectsCommand(bucketParams));
  }
}

module.exports = new awsService();
