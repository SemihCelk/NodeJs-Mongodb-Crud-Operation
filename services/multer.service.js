const multer = require("multer");
class multerService {
  async test() {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "./images");
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname);
        },
      });

    const upload = multer({ storage: storage }).single("image");
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.log(err);
      } else if (err) {
        console.log(err);
      }
      console.log(res.file);
    });
  }
}

module.exports = new multerService();
