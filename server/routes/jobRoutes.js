import express from "express";
import { fetchJobs, scrapeJobs } from "../controller/jobController.js";
// import { fetchJobs, scrapeJobs } from "../controllers/jobController.js";

const router = express.Router();

router.get("/", fetchJobs);
router.post("/scrape", scrapeJobs);

export default router;
