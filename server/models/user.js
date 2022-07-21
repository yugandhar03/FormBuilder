import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    fullname: { type: String, required: true },
    password: { type: String, required: false},
    id: { type: String },
   
    provider:[{
        isActive:{type:Boolean},
        name:{type:String},
        provider:{type:String},
        profileId:{type:String},
    }],
});


export default mongoose.model("User", userSchema);
