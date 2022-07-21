import passport from "../controllers/passport.js";

const CLIENT_URL = "http://localhost:3000/home";


export const googleData=(req,res)=>{
  passport.authenticate('google', {scope: ['profile', 'email']})
  (req,res)
}
export const googleCallback=(req,res)=>{
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
      })(req,res)
}
export const facebookData=(req,res)=>{
    passport.authenticate("facebook", { scope: "email" })
    (req,res)
  }
export const facebookCallback=(req,res)=>{
    passport.authenticate("facebook", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
      })(req,res)
}
export const linkedinData=(req,res)=>{
    passport.authenticate("linkedin", { scope: ['r_emailaddress', 'r_liteprofile'] })
    (req,res)
  }
export const linkedinCallback=(req,res)=>{
    passport.authenticate("linkedin", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
      })(req,res)
}


 
