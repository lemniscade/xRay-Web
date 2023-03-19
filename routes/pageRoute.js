import express from 'express'
import * as pageController from '../controller/pageController.js'
const router=express.Router()
router.route("/").get(pageController.getIndexPage)
router.route("/about").get(pageController.getAboutPage)

export default router