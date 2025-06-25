import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

// 1. Impor gambar dari folder assets
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>// Tentang Saya</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Halo! Steven Morison, seorang programmer yang bersemangat dalam menciptakan aplikasi web yang efisien dan menarik. Dengan pengalaman di bidang <span className="highlight">frontend</span> dan <span className="highlight">backend</span>, saya suka mengubah ide-ide kompleks menjadi kenyataan digital yang fungsional.
          </p>
          <p>
            Di luar coding, saya suka menjelajahi teknologi baru, berkontribusi pada proyek open-source, dan menikmati secangkir kopi sambil memecahkan masalah.
          </p>
        </div>
        <div className="about-image">
          {/* 2. Ganti div placeholder dengan tag <img> */}
          <img 
            src={profileImage} 
            alt="Foto profil Steven Morison" 
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;