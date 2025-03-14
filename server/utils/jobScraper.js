import axios from "axios";

const jobScraper = async () => {
  try {
    const url = "https://remotive.io/api/remote-jobs";
    const { data } = await axios.get(url);
    let jobs = [];

    data.jobs.forEach((job) => {
      jobs.push({
        title: job.title,
        company: job.company_name,
        location: job.candidate_required_location,
        experience: "Not Specified", 
        applyLink: job.url,
      });
    });

    return jobs;
  } catch (error) {
    console.error("Fetching jobs failed:", error);
    return [];
  }
};

export default jobScraper;
