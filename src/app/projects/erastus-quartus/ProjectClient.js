"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "../project.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  },
};

export default function ErastusQuartusCaseStudy() {
  return (
    <main className="case-study-container">
      <div className="layout-wrapper">
        <Navigation />

        {/* ── 01  HOOK ── */}
        <section className="case-study-hero">
          <motion.div
            className="cs-hero-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div className="cs-hero-left" variants={staggerContainer}>
              <motion.h1 className="case-study-title" variants={fadeUp}>
                <span className="cs-title-line">Erastus Quartus Projects</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: '2rem' }}>
                A corporate website for a Nigerian construction and structural engineering firm — built from a client-provided company profile into a structured site with its own information architecture and copy.
              </motion.p>

              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">UX/UI Designer &amp; Copywriter</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Platform</span>
                    <span className="meta-value">Website</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Domain</span>
                    <span className="meta-value">Construction &amp; Structural Engineering</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Status</span>
                    <span className="meta-value">Design Completed — Not Yet Live</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Source Material</span>
                    <span className="meta-value">Client Company Profile</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Scope</span>
                    <span className="meta-value">Structure, UX &amp; Copy</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="cs-hero-right" variants={staggerContainer}>
              <motion.img
                src="/projects/erastus-quartus/hero.png"
                alt="Erastus Quartus Projects Mockup"
                className="case-study-hero-image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ── 02  PROBLEM FRAMING ── */}
        <section className="cs-section">
          {/* Intro Row */}
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">02  Problem framing</span>
              <h2 className="cs-section-title">A firm with real credentials and nowhere online to show them.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Erastus Quartus Projects is a working construction and structural engineering firm with a track record of completed projects and a qualified team — documented in detail in an internal company profile, but with no website to put any of it in front of a prospective client.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                I was brought on to turn that raw company profile into a site: deciding what belongs on a homepage versus a services page, how to present past projects credibly, and writing every word of the on-page copy from scratch, since the source document was written as an internal profile, not website content.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>No digital presence existed to translate the firm's real project history and engineering credentials into something a prospective client could find and evaluate online.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>A prospective client researching a structural engineering partner had no way to review the firm's past work, team qualifications, or how to start a conversation, without contacting them directly first.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Full-span Breakout: Company Profile Document */}
          <motion.div
            className="cs-full-breakout"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cs-mockup-full no-bg">
              <motion.img
                src="/projects/erastus-quartus/section 2.png"
                alt="Erastus Quartus Company Profile Document"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Content Row */}
          <motion.div
            className="cs-section-grid cs-section-grid--centered"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-statement">
                <span className="cs-card-tag">Problem statement</span>
                <blockquote className="cs-blockquote">
                  "How might we take a dense internal company profile and turn it into a website that lets a prospective client trust this firm's credibility before they've spoken to anyone?"
                </blockquote>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 03  TRANSLATING THE COMPANY PROFILE ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">03  Translating the company profile</span>
              <h2 className="cs-section-title">The brief was a document, not a wireframe.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The client's company profile covered services, completed projects, and team bios — but as a dense internal document, not a website outline. The real design work started with pulling that document apart: what needed its own page, what was proof versus persuasion, and what a first-time visitor actually needed to see before they'd consider reaching out.
              </motion.p>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">What the profile revealed</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>Completed projects carried more credibility as structured facts — location, scope, structural system — than as prose. The profile listed them narratively; the site needed a scannable format.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>The team's qualifications were a genuine differentiator buried in the document's later pages. A construction client vetting an engineering partner needed that credibility surfaced, not buried.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>Construction clients are used to formal enquiry and RFQ processes — a generic contact form would under-collect the information the firm actually needs to respond usefully.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 04  DESIGN PRINCIPLES ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">04  Design principles</span>
              <h2 className="cs-section-title">Three rules for turning credibility into a website</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>Facts over adjectives</h4>
                    <p>Every completed project is presented through a consistent facts bar — location, scope, structural type, timeline — rather than descriptive copy alone, so credibility is scannable, not just claimed.</p>
                    <div className="cs-principle-mockup">
                      <motion.img
                        src="/projects/erastus-quartus/principle 1.png"
                        alt="Principle 01: Facts over adjectives"
                        style={{ borderRadius: "12px" }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 02</span>
                  <div className="cs-principle-content">
                    <h4>Credentials build trust before conversation</h4>
                    <p>A dedicated "Meet Our Experts" section gives each team member a name, title, and qualification — moving the firm's expertise from a buried paragraph to a visible, browsable part of the site.</p>
                    <div className="cs-principle-mockup">
                      <motion.img
                        src="/projects/erastus-quartus/principle 2.png"
                        alt="Principle 02: Credentials build trust before conversation"
                        style={{ borderRadius: "12px" }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 03</span>
                  <div className="cs-principle-content">
                    <h4>A structured enquiry, not a blank form</h4>
                    <p>A 3-step enquiry flow — project type, scope details, contact information — collects what the firm actually needs to respond meaningfully, instead of a single open text field.</p>
                    <div className="cs-principle-mockup">
                      <motion.img
                        src="/projects/erastus-quartus/principle 3.png"
                        alt="Principle 03: A structured enquiry, not a blank form"
                        style={{ borderRadius: "12px" }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 05  DESIGN & ITERATION ── */}
        <section className="cs-section">
          {/* Intro Row */}
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">05  Design &amp; iteration</span>
              <h2 className="cs-section-title">From document to site map to copy</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Started by restructuring the company profile's content into a site map — Home, Services, Projects, About/Team, Contact — before any visual design. Every project entry was rebuilt around the facts-bar format, and the team section was rebuilt around individual expert profiles rather than a single group bio.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                Because the source document wasn't written as website copy, I wrote every on-page word myself — headlines, service descriptions, project summaries, and calls to action — grounded in the facts from the profile but shaped for how a visitor actually reads a site, not a document.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Full-span Breakout: Site Map */}
          <motion.div
            className="cs-full-breakout"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cs-mockup-full no-bg">
              <motion.img
                src="/projects/erastus-quartus/erastus-quartus-sitemap.png"
                alt="Erastus Quartus Site Map"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Iteration Row */}
          <motion.div
            className="cs-section-grid cs-section-grid--centered"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Iteration &amp; Refinement</motion.h3>
              <motion.div variants={fadeUp} className="cs-iterations">
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 1: First pass</span>
                  <p>An early homepage draft tried to summarize every service and project on one page, mirroring the density of the source document. It read as overwhelming rather than credible.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 2: Refinement</span>
                  <p>Split the homepage down to a focused introduction and top project highlights, moving full service and project detail to their own pages — letting the facts-bar format do the credibility work instead of front-loading text.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 3: Enquiry flow</span>
                  <p>The initial contact section was a single form. Replaced it with the 3-step enquiry flow after recognizing that construction clients arrive already knowing their project type and scope, and expect to state it clearly.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 06  OUTCOME & IMPACT ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">06  Outcome &amp; impact</span>
              <h2 className="cs-section-title">A finished design, waiting on launch</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer} style={{ paddingTop: '39px' }}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The design is complete — full site structure, all page templates, and all on-page copy — and ready to hand off for development. It hasn't gone live yet.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="cs-full-breakout"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cs-mockup-full no-bg">
              <motion.img
                src="/projects/erastus-quartus/section 6 image.png"
                alt="Final Erastus Quartus Site Design"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} className="cs-outcome-grid cs-outcome-grid--full">
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">3-Step</span>
                <span className="cs-outcome-delta">Structured enquiry flow</span>
                <span className="cs-outcome-label">Contact Experience</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">100%</span>
                <span className="cs-outcome-delta">All on-page copy authored from source material</span>
                <span className="cs-outcome-label">Original Copywriting</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value cs-outcome-value--text">Design Complete</span>
                <span className="cs-outcome-delta">Structure, UX &amp; copy finished</span>
                <span className="cs-outcome-label">Status</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value cs-outcome-value--text">Profile → Website</span>
                <span className="cs-outcome-delta">Full IA rebuilt from a company profile document</span>
                <span className="cs-outcome-label">Source Transformation</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 07  REFLECTION ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">07  Reflection</span>
              <h2 className="cs-section-title">Designing and writing, together</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Rebuilding the site map before touching visuals. Restructuring the company profile into a proper information architecture first made every later decision — what goes where, what gets its own page — much clearer.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>What I'd do differently</h4>
                  <p>Loop the client in earlier on the copy, not just the layout — since I was writing content from their internal document rather than a brief, earlier review rounds would have caught tone mismatches sooner.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>Next steps</h4>
                  <p>Development handoff and launch, plus a lightweight CMS for the projects page so the firm can add new completed projects without needing a redesign each time.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 08  DISCOVERY GRID (v4) ── */}
        <section className="cs-discovery">
          <div className="discovery-header">
            <h3>More Case Studies</h3>
          </div>

          <div className="discovery-grid DiscoveryGrid-2col">
            <Link href="/projects/waystream" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/waystream/hero.png" alt="Waystream" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Waystream</h4>
                <span>Audio &amp; Creator Economy</span>
              </div>
            </Link>

            <Link href="/projects/drive45" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/drive45/hero.png" alt="Drive45 Mobility" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Drive45 Mobility</h4>
                <span>Fintech &amp; Mobility</span>
              </div>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
