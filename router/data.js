const express = require("express")
const router = express.Router()
const {createItem,readItem,update,deleteData} = require("../controller/data.controller")


router.post("/",createItem) 
router.get("/",readItem)
router.put("/",update)
router.delete("/",deleteData)
module.exports = router