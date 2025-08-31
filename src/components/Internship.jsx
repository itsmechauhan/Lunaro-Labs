import React from "react";
import { motion } from "framer-motion";
import "./css/Internship.css";
import { Link } from "react-router-dom";
import Software_Development from "../assets/mobile.png";
import Data_Science from "../assets/data-science.png";
import AI from "../assets/ai.png";
import Machine_Learning from "../assets/ml.png";
import HR from "../assets/hr.png";
import luna from "../assets/luna.png";

const Internship = () => {
  const internships = [
    {
      id: 1,
      title: "Software Development",
      description:
        "Work on real-world projects with mentorship from industry experts.",
      image:
        "{Software_Development}",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Learn design thinking and create user-friendly digital products.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Data Science",
      description:
        "Dive into big data, analytics, and machine learning solutions.",
      image:
        "{luna}",
    },
    {
      id: 4,
      title: "Cybersecurity",
      description:
        "Gain hands-on experience in protecting systems from cyber threats.",
      image:
        "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 5,
      title: "Web Development",
      description:
        "Build responsive and modern websites using latest frameworks.",
      image:
        "https://images.unsplash.com/photo-1502880195258-4b3e1b1d8d6d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 6,
      title: "Mobile App Development",
      description:
        "Develop Android & iOS apps with React Native and Flutter.",
      image:
        "https://images.unsplash.com/photo-1599305445671-9a4e3d3e3c3b?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 7,
      title: "Cloud Computing",
      description:
        "Learn AWS, Azure, and Google Cloud deployment practices.",
      image:
        "https://images.unsplash.com/photo-1581090700227-4c4a3bb44f2e?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 8,
      title: "Blockchain",
      description:
        "Explore decentralized apps and blockchain smart contracts.",
      image:
        "https://images.unsplash.com/photo-1649972904342-8e6c3e9e9b9f?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 9,
      title: "Artificial Intelligence",
      description:
        "Work on NLP, computer vision, and generative AI solutions.",
      image:
        "https://images.unsplash.com/photo-1683303250246-f3443e3b5a98?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 10,
      title: "Machine Learning",
      description:
        "Train ML models and deploy them into production systems.",
      image:
        "https://images.unsplash.com/photo-1647694042363-3e32b1fcd4e3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 11,
      title: "Human Resources (HR)",
      description:
        "Understand recruitment, employee engagement, and HR tools.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 12,
      title: "Digital Marketing",
      description:
        "Hands-on with SEO, SEM, Social Media, and Content Marketing.",
      image:
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 13,
      title: "Finance & Accounting",
      description:
        "Learn budgeting, forecasting, and financial analysis.",
      image:
        "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 14,
      title: "Product Management",
      description:
        "Learn how to manage product lifecycles and agile workflows.",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437d0?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 15,
      title: "Content Writing",
      description:
        "Enhance skills in blogs, technical writing, and storytelling.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // 👇 Replace with your Google Form / Microsoft Form link
  const formLink = "https://forms.gle/your-google-form-link";

  return (
    <section id="internships" className="internship-section">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Internship Opportunities
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We believe in nurturing young talent and providing hands-on experience 
        in cutting-edge technologies. Explore our wide range of internship programs below.
      </motion.p>

      <div className="internship-grid">
        {internships.map((internship, index) => (
          <motion.div
            key={internship.id}
            className="internship-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={internship.image} alt={internship.title} />
            <h3>{internship.title}</h3>
            <p>{internship.description}</p>

            {/* ✅ Button linked to Google Form */}
            
<motion.button
  className="apply-btn"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  <Link to="/apply" style={{ textDecoration: "none", color: "inherit" }}>
    Apply Now
  </Link>
</motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internship;
