import React, { useState, useEffect, useRef, createRef } from 'react';
import { Link, Events } from 'react-scroll';
import { motion } from 'framer-motion';

import { FaHome, FaUser, FaCode, FaBriefcase, FaHandshake, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { to: "hero", text: "Home", icon: <FaHome /> },
  { to: "about", text: "Tentang", icon: <FaUser /> },
  { to: "skills", text: "Keahlian", icon: <FaCode /> },
  { to: "projects", text: "Proyek", icon: <FaBriefcase /> },
  { to: "layanan", text: "Layanan", icon: <FaHandshake /> },
  { to: "contact", text: "Kontak", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeLink, setActiveLink] = useState('hero');
  const [bubbleStyle, setBubbleStyle] = useState({});
  const linkRefs = useRef(navLinks.map(() => createRef()));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    Events.scrollEvent.register('begin', (to) => setActiveLink(to));
    return () => Events.scrollEvent.remove('begin');
  }, []);

  useEffect(() => {
    const calculateBubble = () => {
      const activeIndex = navLinks.findIndex(link => link.to === activeLink);
      const activeRef = linkRefs.current[activeIndex];
      if (activeRef && activeRef.current) {
        setBubbleStyle({
          x: activeRef.current.offsetLeft,
          width: activeRef.current.offsetWidth,
          height: activeRef.current.offsetHeight,
        });
      }
    };

    if (isMobile) {
      // Sedikit delay untuk memastikan DOM sudah siap saat pertama kali load
      const timeoutId = setTimeout(calculateBubble, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [activeLink, isMobile]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="hero" smooth={true} duration={500}>// Laksamana S Morison</Link>
        </div>
        {!isMobile && (
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      
      {isMobile && (
        <nav className="bottom-nav">
          {/* Container ini sekarang hanya untuk menampung bubble dan link */}
          <div className="bottom-nav-links-container">
            <motion.div
              className="bubble-indicator"
              animate={bubbleStyle}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                ref={linkRefs.current[index]}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`bottom-nav-link ${activeLink === link.to ? 'active' : ''}`}
                onSetActive={() => setActiveLink(link.to)}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
