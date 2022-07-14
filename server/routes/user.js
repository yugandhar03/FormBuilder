import express from "express";
import { signin, signup,emailvalidate,profileUpdate} from "../controllers/user.js";
import {forgotpassword,verifylink,updatepassword} from "../controllers/ForgotResetPass.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/profileUpdate", profileUpdate);
router.post("/emailvalidate", emailvalidate);
router.post("/forgotpassword", forgotpassword);
router.post("/verifylink", verifylink);
router.post("/updatepassword",updatepassword)

export default router;