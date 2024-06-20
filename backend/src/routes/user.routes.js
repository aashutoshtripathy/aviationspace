import { Router } from "express";
import { aboutDataa, classifiedDataa, contactUser, images, newsDataa, sender, b2bDataa, seniorr } from "../controller/user.controller.js";


const router = Router();


router.route("/submit_form").post(contactUser)
router.route("/send_email").post(sender)
router.route("/about").get(aboutDataa)
router.route("/images").get(images)
router.route("/newsData").get(newsDataa)
router.route("/classifiedData").get(classifiedDataa)
router.route("/b2bDataa").get(b2bDataa)
router.route("/seniorr").get(seniorr)




export default router