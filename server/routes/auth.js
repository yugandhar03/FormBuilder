import express from "express";
import passport from "../passport.js";

const router = express.Router();
const CLIENT_URL = "http://localhost:3000/signup";

router.get("/login/success", (req, res) => {
 console.log("s=",req)
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

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
  
);

router.get("/facebook", passport.authenticate("facebook", { scope: "email" }));

router.get("/facebook/callback",passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


router.get("/linkedin", passport.authenticate("linkedin", { scope: ['r_emailaddress', 'r_liteprofile'] }))

router.get("/linkedin/callback",
passport.authenticate("linkedin", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
// (req, res) => {
//   console.log("req+++++++", req.body)
// }
);

export default router