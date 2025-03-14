import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [user, setUser] = useState({ name: "", email: "", about: "" });
const navigate= useNavigate()
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get("/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch profile");
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put("/api/auth/profile", user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Profile updated successfully!");
      navigate('/profile')
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg">
    <h2 className="text-2xl font-semibold text-center mb-6">Update Profile</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-600 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-gray-600 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-gray-600 mb-1">About</label>
        <textarea
          name="about"
          value={user.about}
          onChange={handleChange}
          placeholder="Write about yourself"
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Update
      </button>
    </form>
  </div>
  );
};

export default UpdateProfile;
