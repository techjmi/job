import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get("search") || "";
    const pageNumber = Number(params.get("page")) || 1;

    setPage(pageNumber);

    const fetchJobs = async () => {
      setLoading(true);
      try {
        const queryString = searchQuery
          ? `search=${searchQuery}&page=${pageNumber}`
          : `page=${pageNumber}`;

        const response = await fetch(`http://localhost:5000/api/jobs?${queryString}`);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [location.search]);

  const handleSearch = (search) => {
    navigate(`/?search=${search}&page=1`);
  };

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(location.search);
    params.set("page", newPage);
    navigate(`/?${params.toString()}`);
  };

  return (
    <div className="container mx-auto p-6">
  <h1 className="text-2xl font-bold text-center mb-4">Job Listings</h1>

  {/* Job List */}
  {loading ? (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="border p-4 rounded shadow animate-pulse">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4 mt-3"></div>
        </div>
      ))}
    </div>
  ) : jobs.length > 0 ? (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div key={job._id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{job.title}</h2>
          <p className="text-gray-700">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
          <p className="text-sm text-gray-500">
            Experience: {job.experience || "Not Specified"}
          </p>
          <a
            href={job.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-blue-600 hover:underline"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center">No jobs found.</p>
  )}

  {/* Pagination */}
  <div className="flex justify-center mt-6 gap-4">
    <button
      onClick={() => handlePageChange(page - 1)}
      disabled={page === 1}
      className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Previous
    </button>
    <button
      onClick={() => handlePageChange(page + 1)}
      className="px-4 py-2 bg-gray-300 rounded"
    >
      Next
    </button>
  </div>
</div>

  );
};

export default Jobs;
