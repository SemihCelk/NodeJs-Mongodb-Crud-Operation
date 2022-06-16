const express = require("express");
const router = express.Router();
const {createUser,lister,deleter,updater} = require("../controller/user.controller")

router.post("/",createUser);
router.get("/",lister);
router.delete("/",deleter)
router.put("/",updater);
module.exports = router
