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
    try {
      const data = await s3Client.send(
        new CreateBucketCommand({ Bucket: bucketName })
      );
      console.log("Successfully created a bucket called ", data.Location);
      return await data; // For unit tests.
    } catch (error) {
      console.log("Error", error);
    }
  }

  async bucketItemAdd(bucketName, fileWay) {
    const file = "../projeler/projectphotos/login.png";
    const fileStream = fs.createReadStream(file);
    console.log(file);
    const uploadParams = {
      Bucket: "yazilibucket304",
      Key: path.basename(file),
      Body: fileStream,
    };
    try {
      const data = await s3Client.send(new PutObjectCommand(uploadParams));
      console.log("Success", data);
      return data; // For unit tests.
    } catch (err) {
      console.log("Error", err);
    }
  }

  async list() {
    const command = new ListBucketsCommand("");
    return await s3Client.send(command);
  }
}

module.exports = new awsService();
