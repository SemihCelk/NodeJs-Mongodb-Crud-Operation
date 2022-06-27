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
    const file = "../projeler/projectphotos/admin-deleteuser.png";
    const fileStream = fs.createReadStream(file);
    const uploadParams = {
      Bucket: "yazilibucket304",
      Key: path.basename(file),
      Body: fileStream,
    };
    const fileName = file.split("/").pop();
    const stats = fs.statSync(file);
    const byte = stats.size;
    const mb = byte / (1024 * 1024 * 1024);
    const ext = file.split(".").pop();
    if ((mb <= 5 && ext == "png") || ext == "jpeg") {
      try {
        const data = await s3Client.send(new PutObjectCommand(uploadParams));
        return fileName;
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      return "Hatalı veri tipi girdiniz.";
    }
  }

  async list() {
    const command = new ListBucketsCommand("");
    return await s3Client.send(command);
  }
  async bucketObjectList() {
    const bucketParams = { Bucket: "yazilibucket304" };
    try {
      return await s3Client.send(new ListObjectsCommand(bucketParams));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new awsService();
