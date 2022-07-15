import mongoose from "mongoose";

const socialMediaUserSchema = mongoose.Schema({
   username:String,
   email:String,
   userId:String,
   profileId:String,
   provider:String
});

export default mongoose.model("SocialMediaUser", socialMediaUserSchema);
