import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./css/Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Title Animation */}
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Lunaro Labs Innovations
      </motion.h1>

      {/* Subtitle with TYPEWRITER effect */}
      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Typewriter
          words={[
            "Shaping the future of technology through innovative internship programs",
          ]}
          loop={false}       // runs once
          typeSpeed={50}     // typing speed
          deleteSpeed={30}   // if deleting is needed
          cursor
          cursorStyle="|"
        />
      </motion.p>

      {/* Description */}
      <motion.p
        className="hero-desc"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Join our visionary team and work on cutting-edge projects redefining
        what's possible in the tech industry. We're building the next generation of tech leaders.
      </motion.p>

      {/* Buttons */}
   <motion.div
  className="hero-buttons"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1 }}
>
  <motion.a
    href="/internships"   // Internships page ka link
    className="btn primary"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    Explore Internships
  </motion.a>

  <motion.a
    href="/about"         // About/Story page ka link
    className="btn secondary"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    Our Story
  </motion.a>
</motion.div>
    </section>
  );
};

export default Hero;
