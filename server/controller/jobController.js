import Job from "../models/Job.js";
import jobScraper from "../utils/jobScraper.js";

export const fetchJobs = async (req, res) => {
  try {
    const { search, location, experience, page = 1, limit = 10 } = req.query;
    let query = {};

    if (search) query.title = new RegExp(search, "i");
    if (location) query.location = new RegExp(location, "i");
    if (experience) query.experience = new RegExp(experience, "i");

    const jobs = await Job.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
};

export const scrapeJobs = async (req, res) => {
    console.log('func called')
  try {
    const jobs = await jobScraper();
    await Job.deleteMany();
    await Job.insertMany(jobs);

    res.json({ message: "Jobs updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Scraping failed", error });
  }
};
