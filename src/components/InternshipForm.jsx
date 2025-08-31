import React from "react";
import { motion } from "framer-motion";
import "./css/InternshipForm.css";

const InternshipForm = () => {
  return (
    <motion.section
      className="internship-form-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="form-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Lunaro Labs Internships Form
      </motion.h2>

      <motion.p
        className="form-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Please fill out the form below carefully. Our team will reach out to you soon 🚀
      </motion.p>

      <motion.div
        className="form-container"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <iframe
          title="Lunaro Labs Internship Form"
          width="100%"
          height="900px"
          src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAADof8SJURVZDT0RJMUI0U1JUUktRTFpOTFpDRTIzQy4u&embed=true"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          style={{
            border: "2px solid #00d4ff",
            borderRadius: "12px",
            width: "100%",
            height: "900px",
          }}
          allowFullScreen
        ></iframe>
      </motion.div>

      <motion.p
        className="form-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        ✨ Applications open for September batch — Apply now!
      </motion.p>
    </motion.section>
  );
};

export default InternshipForm;
