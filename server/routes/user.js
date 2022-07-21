import express from "express";
import { signin, signup,emailvalidate,profileUpdate} from "../controllers/user.js";
import {forgotpassword,verifylink,updatepassword,deleteAccount} from "../controllers/ForgotResetPass.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/profileUpdate", profileUpdate);
router.post("/emailvalidate", emailvalidate);
router.post("/forgotpassword", forgotpassword);
router.post("/verifylink", verifylink);
router.post("/updatepassword",updatepassword);
router.post("/deleteAccount",deleteAccount);

export default router;