import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "", about: "" });
  const navigate = useNavigate();

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

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-500">{user.about || "No about info added yet."}</p>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => navigate("/update-profile")}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update Profile
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
