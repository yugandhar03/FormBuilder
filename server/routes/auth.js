import express from "express";
import passport from "../controllers/passport.js";
import {googleData,googleCallback,facebookData,facebookCallback, linkedinCallback, linkedinData} from "./socialMedia.js";

const router = express.Router();
const CLIENT_URL = "http://localhost:3000/home";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });

  }
});

router.get("/login/failed", (req, res) => {

  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get('/google', googleData);

router.get("/google/callback",googleCallback);

router.get("/facebook", facebookData);

router.get("/facebook/callback",facebookCallback);

router.get("/linkedin",linkedinData)

router.get("/linkedin/callback",linkedinCallback);

export default router