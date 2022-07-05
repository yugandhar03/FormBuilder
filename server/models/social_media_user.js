import mongoose from "mongoose";

const socialMediaUserSchema = mongoose.Schema({
   username:String,
   profileId:String,
   provider:String
});

export default mongoose.model("SocialMediaUser", socialMediaUserSchema);
