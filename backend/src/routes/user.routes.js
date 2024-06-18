import { Router } from "express";
import { aboutDataa, classifiedDataa, contactUser, images, newsDataa, sender, b2bDataa } from "../controller/user.controller.js";


const router = Router();


router.route("/submit_form").post(contactUser)
router.route("/send_email").post(sender)
router.route("/about").get(aboutDataa)
router.route("/images").get(images)
router.route("/newsData").get(newsDataa)
router.route("/classifiedData").get(classifiedDataa)
router.route("/b2bDataa").get(b2bDataa)
// router.route("/login").post(loginUser)
// router.route("/submit_form").post(user)
// router.route("/fetch_data").get(fetchData)
// router.route("/update_data/:id").put(updateUser)
// router.route("/fetch_unique_data/:id").get(fetchIdData)
// router.route("/delete/:id").delete(deleteUser)
// router.route("/fetch/signup/:id").get(signup_fetch)
// router.route("/update/login/:id").post(updateLogin)



export default router