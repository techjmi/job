import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from'path'
import { fileURLToPath } from 'url';
// import connectDB from "./config/db.js";
import { connectDB } from "./database/db.js";
import authRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../client/dist')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
