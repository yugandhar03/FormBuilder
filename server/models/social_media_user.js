import mongoose from "mongoose";

const socialMediaUserSchema = mongoose.Schema({
   name:String,
   userId:String,
   provider:String
});

export default mongoose.model("SocialMediaUser", socialMediaUserSchema);
