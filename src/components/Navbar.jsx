import React, { useState, useEffect, useRef } from 'react';
import { Link, Events, scrollSpy, scroller } from 'react-scroll';
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
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Setup scroll spy events
    Events.scrollEvent.register('begin', (to, element) => {
      setIsScrolling(true);
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    });

    Events.scrollEvent.register('end', (to, element) => {
      // Set timeout untuk menandai scroll selesai
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        scrollSpy.update();
      }, 100);
    });

    // Manual scroll detection
    const handleScroll = () => {
      if (!isScrolling) {
        // User melakukan scroll manual, bukan dari klik
        // Update scroll spy untuk memastikan deteksi yang akurat
        scrollSpy.update();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial scroll spy update
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

  // Handle active section changes
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  // Handle bottom nav click
  const handleBottomNavClick = (to) => {
    setActiveSection(to);
    setIsScrolling(true);
    
    // Gunakan scroller untuk kontrol yang lebih baik
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -70,
    });

    // Reset setelah scroll selesai
    setTimeout(() => {
      setIsScrolling(false);
      scrollSpy.update();
    }, 600);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="hero" smooth={true} duration={500}>// YP</Link>
        </div>
        {!isMobile && (
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link 
                  to={link.to} 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500} 
                  activeClass="active"
                  ignoreCancelEvents={false}
                  onSetActive={handleSetActive}
                  isDynamic={true}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      
      {isMobile && (
        <nav className="bottom-nav">
          <div className="bottom-nav-links-container">
            {navLinks.map((link) => (
              <div
                key={link.to}
                className={`bottom-nav-link ${activeSection === link.to ? 'active' : ''}`}
                onClick={() => handleBottomNavClick(link.to)}
              >
                {link.icon}
                {/* Hidden Link untuk spy functionality */}
                <Link
                  to={link.to}
                  spy={true}
                  smooth={false}
                  offset={-70}
                  onSetActive={handleSetActive}
                  activeClass="hidden-active"
                  style={{ display: 'none' }}
                  isDynamic={true}
                />
              </div>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;