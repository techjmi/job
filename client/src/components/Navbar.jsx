import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { FaLinkedin, FaLocationArrow, FaUserCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (searchQuery.trim()) queryParams.set("search", searchQuery);
    if (locationQuery.trim()) queryParams.set("location", locationQuery);
    queryParams.set("page", "1");

    navigate(`/?${queryParams.toString()}`);
    setSearchQuery('')
    setLocationQuery('')
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
   
  };

  return (
    <nav className="bg-white border-b sticky w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-blue-600 text-3xl">
            <FaLinkedin />
          </Link>
        </div>

        {/* Center: Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-4">
          {/* Job Title Input */}
          <div className="flex items-center">
            <FiSearch
              className="text-gray-500 mr-2 cursor-pointer"
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Job title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              className="bg-transparent outline-none"
            />
          </div>

          <span className="text-gray-400">|</span>

          {/* Location Input */}
          <div className="flex items-center">
            <IoLocationOutline
              className="text-gray-500 mr-2 cursor-pointer"
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Location..."
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              className="bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Right: Navigation & Profile */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/jobs" className="hover:text-blue-600">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/network" className="hover:text-blue-600">
              Network
            </Link>
          </li>
          <li>
            <Link to="/messages" className="hover:text-blue-600">
              Messages
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="hover:text-blue-600">
              Notifications
            </Link>
          </li>
        </ul>

        {/* Right: Profile & Hamburger */}
        <div className="flex items-center gap-4">
          {token ? (
            <FaUserCircle
              onClick={() => navigate("/profile")}
              className="cursor-pointer"
              size={30}
            />
          ) : (
            <button
              className="text-xl"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/jobs"
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/network"
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Network
              </Link>
            </li>
            <li>
              <Link
                to="/messages"
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Messages
              </Link>
            </li>
            <li>
              <Link
                to="/notifications"
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                Notifications
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
