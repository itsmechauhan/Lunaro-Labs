import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import "./css/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Reusable handler
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home → scroll up
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home
      navigate("/");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
    hover: {
      scale: 1.1,
      color: "#9a6bff",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      {/* 🌙 Logo → Home click */}
      <motion.div
        className="logo"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        whileHover={{ scale: 1.2, rotate: 10, color: "#9a6bff" }}
        onClick={handleHomeClick}   // ✅ same handler
        style={{ cursor: "pointer" }}
      >
        🌙 Lunaro Labs
      </motion.div>

      {/* Nav Links */}
      <motion.ul
        className="nav-links"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Home link */}
        <motion.li variants={linkVariants} whileHover="hover">
          <a href="/" onClick={handleHomeClick}>Home</a>
        </motion.li>

        {/* Other links */}
        {[
          { name: "About", path: "/about" },
          { name: "Internships", path: "/internships" },
          { name: "Contact", path: "/contact" },
          { name: "Policies", path: "/policies" },
        ].map((link, i) => (
          <motion.li key={i} variants={linkVariants} whileHover="hover">
            <Link to={link.path}>{link.name}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default Navbar;
