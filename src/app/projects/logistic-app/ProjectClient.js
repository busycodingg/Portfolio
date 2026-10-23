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

export default function LogisticAppCaseStudy() {
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
                <span className="cs-title-line">Operations Management Platform</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: '2rem' }}>
                An inventory and facility management platform for a nonprofit, replacing years of manual processes with one system.
              </motion.p>

              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">Lead Product Designer</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Platform</span>
                    <span className="meta-value">Web Application</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Domain</span>
                    <span className="meta-value">Logistics &amp; Operations</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Status</span>
                    <span className="meta-value">Shipped &amp; Operational</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Timeline</span>
                    <span className="meta-value">Jun – Oct 2024</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">User Types</span>
                    <span className="meta-value">3 Key Roles</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="cs-hero-right" variants={staggerContainer}>
              <motion.img
                src="/projects/Logistic/hero.png"
                alt="Operations Management Platform Mockup"
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
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">02  Problem framing</span>
              <h2 className="cs-section-title">Years of manual processes. Zero visibility. Mounting costs.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                EGFM had managed its facilities the same way for years: paper logs, spreadsheets and memory. Items went missing unnoticed, maintenance waited until damage was done, staff couldn't track their requests, and members of the public had no formal way to make one.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                The cost wasn't only financial. Facility managers spent more time chasing paperwork than managing the facility. Staff requests disappeared without a trace. And people outside the organisation had to know the right person to call, with no guarantee their request would ever be seen.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>No central system existed for inventory, maintenance schedules, generator usage, facility complaints, or item requests from staff and the public. The result was undetected losses, extra costs and operational blind spots.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>Facility managers had no single source of truth. Staff had no reliable way to request items. And members of the public had no formal channel at all; they relied on knowing the right person to call.</p>
                </div>
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
                    src="/projects/Logistic/Section 2.png"
                    alt="Integrated Facility & Request Ecosystem Mapping"
                    style={{ width: "100%", maxWidth: "1310px", height: "auto", aspectRatio: "1310/896", objectFit: "cover", objectPosition: "top", borderRadius: "12px" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="cs-statement">
                <span className="cs-card-tag">Problem statement</span>
                <blockquote className="cs-blockquote">
                  "How might we design a facility management system so intuitive that facility managers, internal staff and complete strangers can all log, track and manage every item and request in the ministry, without a single paper form?"
                </blockquote>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 03  RESEARCH & DISCOVERY ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">03  Research &amp; discovery</span>
              <h2 className="cs-section-title">Three users. One platform. Very different needs.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                EGFM's platform had three user types with very different relationships to it. Facility managers needed to oversee everything. Staff needed a simple way to request items. And members of the public needed a way to make requests without knowing how the organisation worked or who to contact. Understanding all three before opening Figma was non-negotiable.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-research-grid">
                <div className="cs-research-card">
                  <span className="cs-research-type">Stakeholder interviews</span>
                  <span className="cs-research-stat">Facility managers and operations staff</span>
                </div>
                <div className="cs-research-card">
                  <span className="cs-research-type">Process mapping</span>
                  <span className="cs-research-stat">Existing manual workflows across all 6 modules</span>
                </div>
                <div className="cs-research-card">
                  <span className="cs-research-type">Competitive audit</span>
                  <span className="cs-research-stat">Enterprise facility management tools</span>
                </div>
                <div className="cs-research-card">
                  <span className="cs-research-type">Pain point analysis</span>
                  <span className="cs-research-stat">Where manual processes broke down most often</span>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Key insights</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>The biggest pain point for facility managers wasn't missing items. It was not knowing items were missing until it was too late. Nothing alerted anyone when something left and didn't come back.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>For staff, the frustration was invisibility. Requests made verbally or on paper vanished: no confirmation, no status update, and no way to follow up without finding the facility manager in person.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>Members of the public had no formal channel at all. They relied on personal connections or turning up in person, so their requests went unrecorded, untracked and often lost.</p>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Target user archetypes</motion.h3>
              <motion.div variants={fadeUp} className="cs-personas-grid">
                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">🏢</div>
                    <div className="cs-persona-identity">
                      <h4>The Facility Manager</h4>
                      <span>Operations-focused &middot; Many responsibilities</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core need</span>
                    <p>One platform to oversee all assets, approve and fulfil requests from staff and the public, manage maintenance schedules, monitor generator usage and resolve complaints.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary frustration</span>
                    <p>No visibility into item status, request history, maintenance records or complaints; everything lived in someone's head or a physical file.</p>
                  </div>
                </div>

                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">📥</div>
                    <div className="cs-persona-identity">
                      <h4>The Staff Requester</h4>
                      <span>Internal &middot; Needs-focused</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core need</span>
                    <p>A simple, fast way to request items from the store, with real-time status and no chasing.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary frustration</span>
                    <p>The process was verbal or on paper, so requests got lost, forgotten or disputed with no record.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="cs-personas-grid" style={{ marginTop: 0 }}>
                <div className="cs-persona-card cs-persona-card--full">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">🌍</div>
                    <div className="cs-persona-identity">
                      <h4>The Member of the Public</h4>
                      <span>External &middot; First-time user</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core need</span>
                    <p>A clear, welcoming way to request items without knowing anyone inside, navigating bureaucracy or making a phone call.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary frustration</span>
                    <p>No formal channel existed, only personal connections or turning up in person.</p>
                  </div>
                </div>
              </motion.div>

              <motion.blockquote variants={fadeUp} className="cs-pull-quote">
                "I put in a request two weeks ago. I still don't know if anyone saw it."
                <cite>Staff requester</cite>
              </motion.blockquote>
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
              <h2 className="cs-section-title">Four rules that guided every decision</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                With three user types and six modules, I set four principles to anchor every decision, especially when users' needs pulled in different directions.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>Logging should take seconds, not minutes.</h4>
                    <p>If adding a record takes longer than writing it on paper, staff will write it on paper. Every entry had to take as few steps as possible.</p>
                    <div className="cs-principle-mockup">
                      <motion.img
                        src="/projects/Logistic/Principle 1.png"
                        alt="Principle 01: Logging should take seconds, not minutes"
                        style={{ width: "100%", aspectRatio: "5640/2829", objectFit: "cover", objectPosition: "top", borderRadius: "12px" }}
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
                    <h4>Visibility over everything.</h4>
                    <p>The core problem was invisibility, so every module surfaces the most important status information immediately, with no digging.</p>
                    <div className="cs-principle-mockup">
                      <motion.img
                        src="/projects/Logistic/Principle 2.png"
                        alt="Principle 02: Visibility over everything"
                        style={{ width: "100%", aspectRatio: "5640/2829", objectFit: "cover", objectPosition: "top", borderRadius: "12px" }}
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
                    <h4>Build for low technical literacy.</h4>
                    <p>Plain language, self-explanatory actions, and error states that guide people back on track without jargon.</p>

                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 04</span>
                  <div className="cs-principle-content">
                    <h4>Anyone should be able to request, not just insiders.</h4>
                    <p>The request flow had to work for a complete stranger: no jargon, no assumed knowledge, no login. Simple, fast submission.</p>

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
              <h2 className="cs-section-title">Six modules, three very different users</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The challenge wasn't one complex flow. It was six modules solving different problems for three user types, while the whole platform still felt like one product. I started with the Request Log and Inventory modules, where all three user types meet, then built the other four on the same component library and interaction patterns.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Full-span Breakout (Single Image) */}
          <motion.div
            className="cs-full-breakout"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cs-mockup-full no-bg">
              <motion.img
                src="/projects/Logistic/Section 5.png"
                alt="EGFM Reports Module Dashboard Mockup"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>

          {/* Iteration Row */}
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="cs-section-left"></div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Iteration & Refinement</motion.h3>
              <motion.div variants={fadeUp} className="cs-iterations">
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 1 · Feedback</span>
                  <p>Staff were submitting duplicate requests for the same item because nothing confirmed their first request had arrived. It created noise and confusion over fulfilment.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 2 · Refinement</span>
                  <p>I added a confirmation screen after every request, showing the request details, a reference number and the expected response time. Duplicate submissions dropped significantly.</p>
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
              <h2 className="cs-section-title">What shipped and what changed</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                EGFM shipped as a fully operational internal platform, replacing the organisation's manual facility management and item request process with one digital system.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-outcome-grid cs-outcome-grid--full">
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value">6</span>
                  <span className="cs-outcome-delta">Modules designed and shipped</span>
                  <span className="cs-outcome-label">Complete Platform</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value">3</span>
                  <span className="cs-outcome-delta">User types served on one platform</span>
                  <span className="cs-outcome-label">User Diversity</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value">Open Access</span>
                  <span className="cs-outcome-delta">The public can submit requests directly</span>
                  <span className="cs-outcome-label">External Inclusion</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value cs-outcome-value--text">Full visibility</span>
                  <span className="cs-outcome-delta">Into inventory, maintenance and requests</span>
                  <span className="cs-outcome-label">For the first time</span>
                </div>
              </motion.div>
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
              <h2 className="cs-section-title">What worked and what I'd change</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Designing the Request Log early, as the point where all three user types meet, gave the rest of the platform a clear interaction model. The component library built for the request flow scaled cleanly across all six modules.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>What I'd do differently</h4>
                  <p>Test the public request flow with real members of the public earlier. Designing for someone with no context about the organisation is a very different challenge from designing for staff.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>Next steps</h4>
                  <p>A mobile companion app for the request experience, so staff and members of the public can submit and track requests from their phones without the full web platform.</p>
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
