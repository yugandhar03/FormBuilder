import mongoose from "mongoose";
// const Schema = mongoose.Schema;

const tokenSchema = mongoose.Schema({
	userId: {
		type: mongoose.Types.ObjectId, 
		required: true,
		ref: "user",
		unique: true,
	},
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires:'60s' },
});
export default mongoose.model("token", tokenSchema);