"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from '@hugeicons/react';
import { Linkedin02Icon, File01Icon } from '@hugeicons-pro/core-solid-rounded';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
};

const staggerGrid = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

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
    const words = ["invisible", "effortless", "human"];
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 3000); // changes word every 3 seconds
        return () => clearInterval(interval);
    }, []);

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
                                I'm Grace,
                            </div>
                            <div className="headline-row">
                                {/* <span className="pill image-pill headshot"></span>  */}
                                 a Product Designer
                            </div>
                            <div className="headline-row">
                                I make complexity
                            </div>
                            <div className="headline-row">
                                feel{" "}
                                <span className="rotating-word-container">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={words[wordIndex]}
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className="rotating-word"
                                        >
                                            {words[wordIndex]}.
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
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
                    <p className="section-eyebrow">{"// Work"}</p>
                    <h2 className="projects-section-title"> Some of my latest work</h2>

                    <motion.div
                        className="projects-grid"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <motion.div variants={fadeUp}>
                            <Link href="/projects/contraktek" className="project-card" style={{ textDecoration: 'none' }}>
                                <div className="project-image-wrapper">
                                    <div className="project-image" style={{ position: 'relative' }}>
                                        <Image
                                            src="/projects/contraktek/hero.png"
                                            alt="Contraktek Case Study"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        />
                                        <span className="project-view-pill">VIEW</span>
                                    </div>
                                </div>
                                <div className="project-card-footer">
                                    <div>
                                        <h3 className="project-title">Contraktek</h3>
                                        <p className="project-desc">Construction &amp; Procurement</p>
                                    </div>
                                    <span className="project-arrow" aria-hidden="true">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <Link href="/projects/erastus-quartus" className="project-card" style={{ textDecoration: 'none' }}>
                                <div className="project-image-wrapper">
                                    <div className="project-image" style={{ position: 'relative' }}>
                                        <Image
                                            src="/projects/erastus-quartus/hero.png"
                                            alt="Erastus Quartus Projects Case Study"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        />
                                        <span className="project-view-pill">VIEW</span>
                                    </div>
                                </div>
                                <div className="project-card-footer">
                                    <div>
                                        <h3 className="project-title">Erastus Quartus Projects</h3>
                                        <p className="project-desc">Construction &amp; Structural Engineering</p>
                                    </div>
                                    <span className="project-arrow" aria-hidden="true">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <Link href="/projects/waystream" className="project-card" style={{ textDecoration: 'none' }}>
                                <div className="project-image-wrapper">
                                    <div className="project-image" style={{ position: 'relative' }}>
                                        <Image
                                            src="/projects/waystream/hero.png"
                                            alt="Waystream Case Study"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        />
                                        <span className="project-view-pill">VIEW</span>
                                    </div>
                                </div>
                                <div className="project-card-footer">
                                    <div>
                                        <h3 className="project-title">Waystream</h3>
                                        <p className="project-desc">Audio &amp; Creator Economy</p>
                                    </div>
                                    <span className="project-arrow" aria-hidden="true">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <Link href="/projects/drive45" className="project-card" style={{ textDecoration: 'none' }}>
                                <div className="project-image-wrapper" style={{ aspectRatio: '5760 / 3567' }}>
                                    <div className="project-image" style={{ position: 'relative' }}>
                                        <Image
                                            src="/projects/drive45/hero.png"
                                            alt="Drive45 Mobility Case Study"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <span className="project-view-pill">VIEW</span>
                                    </div>
                                </div>
                                <div className="project-card-footer">
                                    <div>
                                        <h3 className="project-title">Drive45 Mobility</h3>
                                        <p className="project-desc">Fintech &amp; Mobility</p>
                                    </div>
                                    <span className="project-arrow" aria-hidden="true">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <Link href="/projects/logistic-app" className="project-card" style={{ textDecoration: 'none' }}>
                                <div className="project-image-wrapper">
                                    <div className="project-image" style={{ position: 'relative' }}>
                                        <Image
                                            src="/projects/Logistic/hero.png"
                                            alt="Operations Management Platform Case Study"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        />
                                        <span className="project-view-pill">VIEW</span>
                                    </div>
                                </div>
                                <div className="project-card-footer">
                                    <div>
                                        <h3 className="project-title">Operations Management Platform</h3>
                                        <p className="project-desc">Logistics &amp; Operations</p>
                                    </div>
                                    <span className="project-arrow" aria-hidden="true">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>

                <section id="about" className="section-about">
                    <div className="about-narrative">
                        <p className="section-eyebrow">{"// About"}</p>
                        <ScrollRevealNarrative
                            paragraphs={[
                                "I'm a product designer who believes good design starts with understanding people, not pixels.",
                                "I work at the intersection of research and craft  turning messy problems into experiences that feel effortless to use."
                            ]}
                            highlightPhrases={["understanding people", "experiences that feel effortless to use"]}
                        />
                    </div>
                </section>

                {/*
                  Testimonials section intentionally omitted: the previous markup here
                  quoted real named people (e.g. the CEO of Nas Daily) praising a
                  different designer ("Ajay"), copied from a template. The CSS system
                  for it still exists (.section-testimonials, .testimonial-card, etc.
                  in globals.css) and is ready to use once real client/colleague quotes
                  for Grace are available.
                */}

                <Footer />
            </div>
        </>
    );
}
