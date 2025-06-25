import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Untuk tombol CTA
import { FaCogs, FaBullseye, FaBuilding, FaGlobe } from 'react-icons/fa'; // Ikon untuk setiap layanan
import './Layanan.css';

const services = [
  {
    icon: <FaCogs />,
    title: "Aplikasi Web",
    description: "Membangun aplikasi web kustom yang kompleks, interaktif, dan kaya fitur sesuai dengan kebutuhan bisnis Anda."
  },
  {
    icon: <FaBullseye />,
    title: "Landing Page",
    description: "Desain dan pengembangan landing page yang menarik, cepat, dan dioptimalkan untuk konversi."
  },
  {
    icon: <FaBuilding />,
    title: "Company Profile",
    description: "Membuat website company profile yang profesional dan elegan untuk meningkatkan citra brand Anda."
  },
  {
    icon: <FaGlobe />,
    title: "Website Lainnya",
    description: "Siap mengerjakan berbagai jenis website lainnya seperti blog pribadi, portofolio, atau toko online sederhana."
  }
];

const Layanan = () => {
  return (
    <motion.section
      id="layanan"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2>// Layanan Freelance</h2>
      <p className="layanan-intro">
        Terbuka untuk kesempatan freelance dan siap membantu mewujudkan ide Anda menjadi produk digital yang berkualitas.
      </p>
      <div className="layanan-grid">
        {services.map((service, index) => (
          <motion.div
            className="layanan-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="layanan-icon">{service.icon}</div>
            <h3 className="layanan-title">{service.title}</h3>
            <p className="layanan-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="layanan-cta">
        <Link to="contact" smooth={true} duration={500} className="cta-button">
          Diskusikan Proyek Anda
        </Link>
      </div>
    </motion.section>
  );
};

export default Layanan;