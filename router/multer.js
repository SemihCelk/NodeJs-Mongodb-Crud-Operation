const express = require("express");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5242880,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
}).single("file");

router.post("/profile", (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.json({
        succes:false,
        ErrorMessage:"Max file size 5MB allowed"
      });
    } else if (err) {
      return res.json({
        succes:false,
        ErrorMessage:err.message
      });
    } else if (!req.file) {
      return res.end("File is required");
    } else {
      res.json({
        succes: true,
        data: "succes data",
      });
    }
  });
});

module.exports = router;
