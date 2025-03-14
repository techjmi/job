import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    about: { type: String },
  },
  { timestamps: true }
);
export const Job_user= mongoose.model('Job_user', userSchema)

