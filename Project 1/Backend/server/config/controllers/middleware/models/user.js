import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isFreelancer: Boolean,
});

export default mongoose.model("User", userSchema);
