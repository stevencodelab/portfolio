import React from 'react';
import { motion } from 'framer-motion';
// Import ikon-ikon baru yang relevan
import { FaPhp, FaPython, FaGitAlt, FaLaravel } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiCodeigniter, SiOdoo } from 'react-icons/si';
import './Skills.css';

// Daftar keahlian yang baru
const skills = [
  { icon: <FaPhp />, name: 'PHP' },
  { icon: <FaLaravel />, name: 'Laravel' },
  { icon: <SiCodeigniter />, name: 'CodeIgniter' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <SiOdoo />, name: 'Odoo ERP' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <FaGitAlt />, name: 'Git' },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

const Skills = () => {
  return (
    <section id="skills">
      <h2>// Keahlian</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            // Sedikit penyesuaian delay jika jumlah item berubah
            transition={{ delay: index * 0.05 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;