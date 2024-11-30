const express = require("express")
const controllers = require('../controller/authenticate')
const passport = require('passport')
const router  = express.Router()


router.post("/add-top-fav",controllers.addToFav)
router.get("/list",controllers.getAllFav)


module.exports = router