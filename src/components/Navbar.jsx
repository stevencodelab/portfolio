import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down hide the navbar
      setShow(false);
    } else { // if scroll up show the navbar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${!show && 'hidden'}`}>
      <div className="navbar-logo">
        <Link to="hero" smooth={true} duration={500}>
          // SM
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="about" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Tentang</Link></li>
        <li><Link to="skills" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Keahlian</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Proyek</Link></li>
        <li><Link to="layanan" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Layanan</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-70} duration={500} activeClass="active">Kontak</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;