import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projectData = [
  // Ganti dengan data proyek Anda
  { title: "Project Alpha", description: "Platform manajemen tugas dengan fitur kolaborasi real-time, dibangun dengan MERN stack.", tags: ["React", "Node.js", "MongoDB"], githubUrl: "#", liveUrl: "#" },
  { title: "Project Beta", description: "Aplikasi e-commerce modern dengan sistem pembayaran terintegrasi dan panel admin.", tags: ["Next.js", "TypeScript", "PostgreSQL"], githubUrl: "#", liveUrl: "#" },
  { title: "Project Gamma", description: "API service untuk analisis data cuaca historis menggunakan Python (Flask) dan Docker.", tags: ["Python", "Flask", "Docker"], githubUrl: "#", liveUrl: "#" },
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
              {/* Ganti div ini dengan gambar/gif proyek Anda */}
              <div className="project-image-placeholder"></div>
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