import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { Strategy as LinkedInStrategy } from "passport-linkedin-oauth2"
import { Strategy as FacebookStrategy } from "passport-facebook"
import passport from "passport";
import SocialMediaUser from "../models/social_media_user.js"
import UserModal from "../models/user.js";
import getUserData from "../models/user.js"

// const GOOGLE_CLIENT_ID = "287102966361-crgk8g1f7o547ct4cjbghvkrgtmjl34t.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";
const GOOGLE_CLIENT_ID ="584689706082-p2im3n6l9febv8gurictcnirsoujld8r.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const LINKEDIN_CLIENT_ID = "86zlyyjkf3gxsd";
const LINKEDIN_CLIENT_SECRET = "etBlRrprTn1j0yNH";

const FACEBOOK_APP_ID = "3262530104035433";
const FACEBOOK_APP_SECRET = "d4898ecbab92148e5d60d564181e6c8c";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      profileFields: ["email"],
      enableProof: true,
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      UserModal.findOne({ profileId: profile.id }).then((currentSocialMediaUser) => {
        if (!currentSocialMediaUser) {
          new UserModal({
            fullname: profile.displayName,
            profileId: profile.id,
            email:profile.emails[0].value,
            // userId:userData._id,
            provider: profile.provider,
            password:null,
          }).save().then((newSocialMediaUser) => {
            console.log("new user created:" + newSocialMediaUser)
          })
        } else {
          console.log("user alerady exsit")
        }
      })

    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      UserModal.findOne({ profileId: profile.id }).then((currentSocialMediaUser) => {
        if (!currentSocialMediaUser) {
          new UserModal({
            fullname: profile.displayName,
            profileId: profile.id,
            email:profile.emails[0].value,
            // userId:userData._id,
            provider: profile.provider,
            password:null,
          }).save().then((newSocialMediaUser) => {
            console.log("new user created:" + newSocialMediaUser)
          })
        } else {
          console.log("user alerady exsit")
        }
      })

    }
  )
);

passport.use(
  new LinkedInStrategy(
    {
      clientID: LINKEDIN_CLIENT_ID,
      clientSecret: LINKEDIN_CLIENT_SECRET,
      callbackURL: "/auth/linkedin/callback",
      scope: ['r_emailaddress', 'r_liteprofile']
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      UserModal.findOne({ profileId: profile.id }).then((currentSocialMediaUser) => {
        if (!currentSocialMediaUser) {
          new UserModal({
            fullname: profile.displayName,
            profileId: profile.id,
            email:profile.emails[0].value,
            // userId:userData._id,
            provider: profile.provider,
            password:null,
          }).save().then((newSocialMediaUser) => {
            console.log("new user created:" + newSocialMediaUser)
          })
        } else {
          console.log("user alerady exsit")
        }
      })

    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);

});

passport.deserializeUser((user, done) => {
  done(null, user);

});


export default passport