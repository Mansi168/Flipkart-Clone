import express from "express";
import { userSignup } from "../controller/user-controller.js"; //callback function

const router = express.Router();

router.post('/signup', userSignup); //post api k end point agar signup hai to waha routing ho jaegi

export default router;