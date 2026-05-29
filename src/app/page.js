"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { HugeiconsIcon } from '@hugeicons/react';
import { Linkedin02Icon, File01Icon } from '@hugeicons-pro/core-solid-rounded';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WordSpan = ({ word, scrollYProgress, start, end, isHighlight }) => {
    const targetColor = isHighlight ? "rgba(250, 204, 21, 1)" : "rgba(255, 255, 255, 1)";
    const color = useTransform(
        scrollYProgress,
        [start, end],
        ["rgba(255, 255, 255, 0.15)", targetColor]
    );
    return (
        <motion.span style={{ color, display: 'inline' }}>
            {word}
        </motion.span>
    );
};

const ScrollRevealNarrative = ({ paragraphs, highlightPhrases = [] }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "end 0.2"]
    });

    // Flatten all paragraphs into a single word-by-word sequence with metadata
    const processedParagraphs = paragraphs.map(p => {
        const text = p.trim();
        const words = text.split(/\s+/);
        
        return words.map(word => {
            // Check if this word is part of any highlight phrase
            // We do a simple case-insensitive check against the phrase list
            const isHighlight = highlightPhrases.some(phrase => {
                const phraseWords = phrase.toLowerCase().split(/\s+/);
                return phraseWords.includes(word.toLowerCase().replace(/[.,!?;:]/g, ""));
            });
            
            return { text: word, isHighlight };
        });
    });

    const totalWords = processedParagraphs.reduce((acc, curr) => acc + curr.length, 0);
    let globalWordIndex = 0;

    return (
        <div ref={ref} className="about-narrative-container">
            {processedParagraphs.map((words, pIndex) => (
                <div key={pIndex} className="n-line">
                    <h3 className="n-text n-hook" style={{ lineHeight: 1.3 }}>
                        {words.map((wordObj, wIndex) => {
                            const start = globalWordIndex / totalWords;
                            const end = (globalWordIndex + 1) / totalWords;
                            globalWordIndex++;
                            return (
                                <React.Fragment key={wIndex}>
                                    <WordSpan
                                        word={wordObj.text}
                                        isHighlight={wordObj.isHighlight}
                                        scrollYProgress={scrollYProgress}
                                        start={start}
                                        end={end}
                                    />
                                    {' '}
                                </React.Fragment>
                            );
                        })}
                    </h3>
                </div>
            ))}
        </div>
    );
};


export default function Home() {
    return (
        <>
            <div className="bg-reflections">
                <div className="reflection-left"></div>
            </div>

            <div className="layout-wrapper">
                <div className="above-the-fold">
                    <div className="grid-overlay"></div>
                    <Navigation />

                    <main className="hero">
                        <h1 className="headline">
                            <div className="headline-row">
                                I'm Omoológò,
                            </div>
                            <div className="headline-row">
                                {/* <span className="pill image-pill headshot"></span>  */}
                                a Creative
                            </div>
                            <div className="headline-row">
                                Product Designer
                            </div>
                            {/* <div className="headline-row">
                                based in
                                <span className="pill image-pill city">NIGERIA</span>
                            </div> */}
                        </h1>

                        {/* <p className="sub-header">Bringing ideas to life through design.</p> */}

                        <div className="cta-buttons">
                            <a href="#contact" className="btn btn-primary">Let's work together</a>
                            <a href="#work" className="btn btn-secondary">Explore my work</a>
                        </div>
                    </main>
                </div>

                <section id="work" className="section-projects">
                    <h2 className="projects-section-title"> Some of my latest work</h2>
                    
                    <div className="projects-grid">
                        <Link href="/projects/waystream" className="project-card" style={{ textDecoration: 'none' }}>
                            <div className="project-image-wrapper">
                                <div className="project-image" style={{ backgroundImage: "url('/projects/waystream/thumbnail.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                            </div>
                            <h3 className="project-title">Waystream</h3>
                            <p className="project-desc">Audio Streaming</p>
                        </Link>
                        <Link href="/projects/drive45" className="project-card" style={{ textDecoration: 'none' }}>
                            <div className="project-image-wrapper">
                                <div className="project-image" style={{ backgroundImage: "url('/drive45_mobility_mockup.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                            </div>
                            <h3 className="project-title">Drive45 Mobility</h3>
                            <p className="project-desc">Fintech & Mobility</p>
                        </Link>
                        <Link href="/projects/logistic-app" className="project-card" style={{ textDecoration: 'none' }}>
                            <div className="project-image-wrapper">
                                <div className="project-image" style={{ backgroundImage: "url('/logistic_app_mockup.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                            </div>
                            <h3 className="project-title">Logistic App</h3>
                            <p className="project-desc">Facility Management</p>
                        </Link>
                    </div>
                </section>

                <section id="about" className="section-about">
                    <div className="about-narrative">
                        <ScrollRevealNarrative
                            paragraphs={[
                                "I'm a product designer who believes good design starts with understanding people, not pixels.",
                                "I work at the intersection of research and craft — turning messy problems into experiences that feel effortless to use."
                            ]}
                            highlightPhrases={["understanding people", "experiences that feel effortless to use"]}
                        />
                    </div>
                </section>

                {/* <section id="testimonials" className="section-testimonials">
                    <h2 className="testimonials-headline">
                        TESTIMONIALS
                    </h2>
                    <div className="testimonials-container">

                        <div className="testimonial-featured">
                            <div className="featured-top-bar">
                                <div className="featured-badge"><span className="dot" style={{ backgroundColor: 'white' }}></span> FEATURED</div>
                                <div className="mute-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                                </div>
                            </div>
                            <div className="featured-info">
                                <h4>Nuseir Yassin</h4>
                                <p>CEO, Nas Daily</p>
                            </div>
                        </div>

                        <div className="testimonials-grid">
                            <div className="testimonial-col">
                                <div className="testimonial-card">
                                    <div className="t-header">
                                        <div className="t-avatar"></div>
                                        <div className="t-meta">
                                            <h4>Rohit Banga</h4>
                                            <p>CTO, Kitsa.ai</p>
                                        </div>
                                    </div>
                                    <p className="t-body">I had the pleasure of working with Ajay as our UX designer and would recommend him without hesitation. He has a sharp product mindset, quickly understands complex journeys, and turns them into clear, intuitive experiences. His Figma skills are excellent; he's calm and collaborative to work with, and his work consistently elevates the final design. Any team would be lucky to have him.</p>
                                </div>
                                <div className="testimonial-card">
                                    <div className="t-header">
                                        <div className="t-avatar"></div>
                                        <div className="t-meta">
                                            <h4>Mridul Kathuria</h4>
                                            <p>Senior Specialist - Growth, Hevo Data</p>
                                        </div>
                                    </div>
                                    <p className="t-body">I had the chance to work closely with Ajay, and he truly stands out as a hardworking and thoughtful product designer. He has a sharp eye for user journeys, always designing with the end-user in mind, which led to consistently responsive and intuitive experiences. What really adds to his edge is his analytical approach — he backs his design decisions with data, ensuring they're both creative and effective. A great mix of user-first thinking and data-driven execution.</p>
                                </div>
                            </div>

                            <div className="testimonial-col">
                                <div className="testimonial-card">
                                    <div className="t-header">
                                        <div className="t-avatar"></div>
                                        <div className="t-meta">
                                            <h4>Ramraj Ronil Sharma</h4>
                                            <p>CEO, Freshway Mega Mart Pvt. Ltd.</p>
                                        </div>
                                    </div>
                                    <p className="t-body">Ajay has worked with our company for a year. Throughout his stay with our company, his dedication to complete delegated task in an extremely creative way always impressed me. He was always willing to learn new things, and find innovative way to solve the given tasks. His sheer curiosity to explore new ways and designs to incorporate in the branding tools for our company was something I still remember of him. I truly believe any person with such zeal to learn and perseverance to make his task as fine as possible can do wonders, at any place he works. I wish Ajay the best.</p>
                                </div>
                                <div className="testimonial-card">
                                    <div className="t-header">
                                        <div className="t-avatar"></div>
                                        <div className="t-meta">
                                            <h4>Sabin Subedi</h4>
                                            <p>CTO, Freshway Mega Mart Pvt. Ltd.</p>
                                        </div>
                                    </div>
                                    <p className="t-body">Amazing hardworking guy. He is a perfectionist and really cares about details. Throughout his time at Freshway he was an amazing designer and he later learnt UI/UX working at our app project. Recommended as a designer and overall a very genuine guy. Wish you all the best.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section> */}

                <Footer />
            </div>
        </>
    );
}
