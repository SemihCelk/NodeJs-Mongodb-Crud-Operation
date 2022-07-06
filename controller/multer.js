const multerService = require("../services/multer.service");
const multer = require("multer");

const test = async (req,res,next) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./images");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const data = await multerService.test()
 
};

module.exports = {test};
