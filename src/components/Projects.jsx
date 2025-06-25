import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

import imageAlpha from '../assets/hero.png';
import imageBeta from '../assets/home.png';
import imageGamma from '../assets/cctv.png';

const projectData = [
  {
    title: "Sistem Absensi Dengan QR Code",
    description: "Web App Absensi Guru dan Murid modern dengan sistem terintegrasi qr code untuk analisis data absensi.",
    tags: ["PHP", "Node.js", "MySQL", "CodeIgniter"],
    githubUrl: "#",
    liveUrl: "#",
    image: imageAlpha 
  },
  {
    title: "Sistem Perpustakaan Dengan QR Code",
    description: "Web App Perpustakaan modern dengan sistem transaksi terintegrasi qr code dan panel admin.",
    tags: ["PHP", "CodeIgniter", "MySQL"],
    githubUrl: "#",
    liveUrl: "#",
    image: imageBeta
  },
  {
    title: "Air Traffic Control System (ATCS)",
    description: "Platform monitoring cctv secara real-time dengan admin dashboard, dibangun dengan Laravel stack.",
    tags: ["PHP", "Laravel", "Node.js", "MySQL"],
    githubUrl: "#",
    liveUrl: "#",
    image: imageGamma 
  }
];

const Projects = () => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top } = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - top}px`);
  };

  return (
    <section id="projects">
      <h2>// Proyek Unggulan</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="project-card-border"></div>
            <div className="project-content">
              <div 
                className="project-image" 
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><FaExternalLinkAlt /></a>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;