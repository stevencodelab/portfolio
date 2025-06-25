import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h1 className="hero-name">Steven Morison</h1>
        {/* Anda bisa sesuaikan teks ini dengan keahlian Anda */}
        <TypeAnimation
          sequence={[
            'PHP Developer', 2000,
            'Fullstack Developer', 2000,
            'Odoo ERP Developer', 2000,
            'Python Enthusiast', 2000
          ]}
          wrapper="span"
          speed={50}
          className="hero-title"
          repeat={Infinity}
        />
        <p className="hero-description">
          Mengubah ide bisnis menjadi solusi ERP dan aplikasi web yang powerful.
        </p>
        <div className="hero-socials">
          {/* Ganti 'username' dengan username Anda */}
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
      <div className="scroll-down-indicator">
        <FiArrowDown />
      </div>
    </section>
  );
};

export default Hero;