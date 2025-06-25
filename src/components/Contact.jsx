import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className="contact-content">
        <h4 className="contact-pretitle">05. Apa Selanjutnya?</h4>
        <h2 className="contact-title">Mari Terhubung</h2>
        <p className="contact-description">
          Saat ini saya sedang mencari kesempatan baru. Jika Anda memiliki pertanyaan atau hanya ingin menyapa, pintu saya selalu terbuka.
        </p>
        <a href="mailto:stevencodelab@gmail.com" className="contact-button">
          Katakan Halo
        </a>
        <div className="contact-socials">
           <a href="https://github.com/stevencodelab" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
           <a href="https://glints.com/id/profile/public/ca0fd57e-b2e7-4ef7-a3a2-656c24d2a52d" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;