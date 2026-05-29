"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="site-header">
        <div className="logo">
            <Link href="/" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
              <span className="logo-ajay">Omoológò<span className="logo-dot">.</span></span>
            </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
            <ul>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>

        {/* Hamburger Icon */}
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div 
                        className="mobile-nav-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    />
                    <motion.div 
                        className="mobile-nav-overlay"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    >
                        <nav className="mobile-nav">
                            <ul>
                                {navLinks.map((link, index) => (
                                    <motion.li 
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                    >
                                        <Link href={link.href} onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                        
                        <div className="mobile-nav-footer">
                            <p className="footer-label">Get in touch</p>
                            <a href="mailto:amokograce@gmail.com" className="footer-email">amokograce@gmail.com</a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </header>
  );
}
