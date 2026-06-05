"use client";

import React from "react";
import { HugeiconsIcon } from '@hugeicons/react';
import { Linkedin02Icon, File01Icon } from '@hugeicons-pro/core-solid-rounded';

export default function Footer() {
  return (
    <section id="contact" className="section-contact">
      <h2 className="contact-headline">
        Interested in<br />
        <span className="font-playfair" style={{ fontWeight: 400, paddingLeft: '0.1em', fontStyle: 'italic' }}>Working Together?</span>
      </h2>

      <div className="contact-info">
        <a href="mailto:amokograce@gmail.com" className="email-link font-playfair" style={{ fontWeight: 400 }}>
          amokograce@gmail.com
        </a>
        <div className="social-links">
          <a href="https://linkedin.com/in/amoko-grace" target="_blank" rel="noopener noreferrer">
            <HugeiconsIcon icon={Linkedin02Icon} size={20} color="currentColor" />
            LinkedIn
          </a>
          <a href="/Grace_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
            <HugeiconsIcon icon={File01Icon} size={20} color="currentColor" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
