const express = require("express")

const router = express.Router()
const {
    allUser,
    addPost,
    updatePost,
    deletePost
} = require("../Controller/addpost");
const {addnewUser,loginUser,userProfile,qrCode } = require("../Controller/adduser");
const {verifyToken} = require("../jwt")


//admin router
router.get("/",allUser);
router.route("/posting").post(addPost)
router.route("/update/:id").patch(updatePost)
router.route("/delete/:id").delete(deletePost)
// qrcode 
router.route("/qrcode/:id").get(qrCode)

//user router
router.route("/auth").post(addnewUser)
router.route("/login").post(loginUser)
router.route("/profile").get(verifyToken,userProfile)

module.exports = router