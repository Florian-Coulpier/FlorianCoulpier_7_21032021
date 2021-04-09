const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//const auth = require("../middleware/auth"); 
//const multer = require("../middleware/multer-config"); 

router.post("/signup", userCtrl.signup);
router.post("/", userCtrl.login);
//router.delete("/delete", auth, userCtrl.delete);
//router.get("/:id/profile", auth, userCtrl.profile);
//router.put("/modify", auth, multer, userCtrl.modify);

module.exports = router;