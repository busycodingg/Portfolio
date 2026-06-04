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

        {/* ── 01 — HOOK ── */}
        <section className="case-study-hero">
          <motion.div
            className="cs-hero-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div className="cs-hero-left" variants={staggerContainer}>
              <motion.h1 className="case-study-title" variants={fadeUp}>
                <span className="cs-title-line">Logistic App</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: '2rem' }}>
                Designing an inventory and facility management system for a nonprofit — replacing years of manual processes with a single seamless platform.
              </motion.p>

              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">Solo UX/UI Designer</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Platform</span>
                    <span className="meta-value">Web Application</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Tools</span>
                    <span className="meta-value">Figma, FigJam</span>
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
                    <span className="meta-value">8 Weeks (2024)</span>
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
                alt="Logistic App Mockup"
                className="case-study-hero-image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ── 02 — PROBLEM FRAMING ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">02 — Problem framing</span>
              <h2 className="cs-section-title">Years of manual processes. Zero visibility. Mounting costs.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                EGFM had been managing its facilities the same way for years — paper logs, spreadsheets, and human memory. The result was predictable: items went missing without anyone noticing, maintenance was delayed until damage was already done, internal staff had no way to track their requests, and members of the public had no formal channel to make requests at all.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                The cost wasn't just financial. Facility managers spent more time chasing paperwork than actually managing the facility. Staff submitted requests that disappeared into a black hole. And people outside the organisation who needed something had to rely entirely on knowing the right person to call — with no guarantee their request would ever be seen.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>No centralised system existed to manage inventory, maintenance schedules, generator usage, facility complaints, or item requests from both internal staff and the public — leading to undetected losses, excess costs, and operational blind spots.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>Facility managers had no single source of truth. Internal staff had no reliable way to request items. And members of the public had no formal channel to make requests at all — they relied entirely on knowing the right person to call.</p>
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
                  "How might we design a facility management system so intuitive that facility managers, internal staff, and complete strangers can all log, track, and manage every item and request in the ministry — without a single paper form?"
                </blockquote>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 03 — RESEARCH & DISCOVERY ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">03 — Research &amp; discovery</span>
              <h2 className="cs-section-title">Three users. One platform. Completely different needs.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                EGFM served three distinct user types with fundamentally different relationships to the platform. Facility managers needed to oversee and control everything. Internal staff needed a simple way to request items. And members of the public needed a way to make requests without any prior knowledge of how the organisation worked — or who to contact. Understanding all three before touching Figma was non-negotiable.
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
                  <span className="cs-research-stat">Where manual processes were breaking down most frequently</span>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Key insights</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>The biggest pain point for facility managers wasn't missing items — it was not knowing items were missing until it was too late. There was no trigger to alert anyone when something left and didn't come back.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>For internal staff requesters the frustration was invisibility — requests submitted verbally or on paper disappeared into a black hole with no confirmation, no status update, and no way to follow up without physically finding the facility manager.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>Members of the public had no formal request channel at all — they relied on personal connections or showing up in person. Requests that came in this way were unrecorded, untracked, and frequently lost entirely.</p>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Target User Archetypes</motion.h3>
              <motion.div variants={fadeUp} className="cs-personas-grid">
                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">🏢</div>
                    <div className="cs-persona-identity">
                      <h4>The Facility Manager</h4>
                      <span>Operations-focused &middot; Multi-responsibility</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>A single platform to oversee all facility assets, approve and fulfil item requests from both staff and the public, manage maintenance schedules, monitor generator usage, and resolve complaints.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>No visibility into item status, request history, maintenance records, or complaint resolution — everything existed in someone's head or a physical file.</p>
                  </div>
                </div>

                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">📥</div>
                    <div className="cs-persona-identity">
                      <h4>The Staff Requester</h4>
                      <span>Internal Staff &middot; Needs-focused</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>A simple, fast way to request items from the facility store — with real-time visibility into the status of their request without having to chase anyone down.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>The existing process was entirely verbal or paper-based — requests got lost, forgotten, or disputed with no record of what was asked for.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="cs-personas-grid" style={{ marginTop: 0 }}>
                <div className="cs-persona-card" style={{ gridColumn: 'span 2' }}>
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">🌍</div>
                    <div className="cs-persona-identity">
                      <h4>The Member of the Public</h4>
                      <span>External &middot; First-time User</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>A clear, welcoming way to request items from the organisation without needing to know anyone internally, navigate bureaucracy, or make a phone call.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>No formal channel existed for external requests — members of the public had to rely on personal connections or showing up in person.</p>
                  </div>
                </div>
              </motion.div>

              <motion.blockquote variants={fadeUp} className="cs-pull-quote">
                "I put in a request two weeks ago. I still don't know if anyone saw it."
                <cite>— Staff requester</cite>
              </motion.blockquote>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 04 — DESIGN PRINCIPLES ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">04 — Design principles</span>
              <h2 className="cs-section-title">Four rules that guided every decision</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                With three user types and six modules, I needed a clear set of principles to anchor every design decision — especially when the needs of facility managers, internal staff, and members of the public pulled in different directions.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>Logging should take seconds, not minutes</h4>
                    <p>If adding a record to the system takes longer than writing it on paper, staff will write it on paper. Every log entry had to be completable in the fewest possible steps.</p>
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
                    <h4>Visibility over everything</h4>
                    <p>The core problem was invisibility. Every module was designed to surface the most critical status information immediately, without requiring staff to dig for it.</p>
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
                    <h4>Build for low technical literacy</h4>
                    <p>Language had to be plain, actions self-explanatory, and error states had to guide users back on track without technical jargon.</p>

                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 04</span>
                  <div className="cs-principle-content">
                    <h4>Anyone should be able to request, not just insiders</h4>
                    <p>The request experience had to work for a complete stranger — no jargon, no assumed knowledge, no login barrier. Simple and fast submission.</p>

                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 05 — DESIGN & ITERATION ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">05 — Design &amp; iteration</span>
              <h2 className="cs-section-title">Building six modules that worked for three completely different users</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The challenge with EGFM wasn't designing one complex flow — it was designing six distinct modules that solved different problems for three different user types, while making the entire platform feel cohesive and consistent. Started with the Request Log and Inventory modules as the foundation — the two modules where all three user types intersected — then built the remaining four modules on top of the same component library and interaction patterns.
              </motion.p>

              <motion.div
                className="cs-full-breakout"
                variants={fadeUp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="cs-before-after">
                  <div className="cs-ba-card cs-ba-card--before">
                    <span className="cs-ba-label cs-ba-label--before">Manual State</span>
                    <div className="cs-mockup-card">
                      <div className="mock-v-line"></div>
                      <div className="mock-v-line"></div>
                    </div>
                    <h4>Item requesting — entirely manual</h4>
                    <p>Internal staff submitted requests verbally or on paper with no confirmation and no tracking. Members of the public had no channel at all.</p>
                  </div>
                  <div className="cs-ba-arrow">→</div>
                  <div className="cs-ba-card cs-ba-card--after">
                    <span className="cs-ba-label cs-ba-label--after">Digital State</span>
                    <div className="cs-mockup-card">
                      <div className="mock-v-btn-large"></div>
                      <div className="mock-v-tag-glow">Open Access</div>
                    </div>
                    <h4>Item requesting — open, digital, and trackable</h4>
                    <p>Requesters receive automatic status updates at every stage. Facility managers see all pending requests (internal and external) in one unified queue.</p>
                  </div>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Iteration & Refinement</motion.h3>
              <motion.div variants={fadeUp} className="cs-iterations">
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 1: Feedback</span>
                  <p>Staff requesters were submitting duplicate requests for the same item because they had no confirmation that their first request had been received. This created noise and confusion over fulfilment.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 2: Refinement</span>
                  <p>Added an immediate in-app confirmation screen after every request submission — showing the request details, a reference number, and the expected response time. Duplicate submissions dropped significantly after the change.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 06 — OUTCOME & IMPACT ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">06 — Outcome &amp; impact</span>
              <h2 className="cs-section-title">What shipped and what changed</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                EGFM shipped as a fully operational internal platform — replacing the organisation's entire manual facility management and item request process with a single digital system.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-outcome-grid cs-outcome-grid--full">
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value">6</span>
                  <span className="cs-outcome-delta">Modules designed and shipped</span>
                  <span className="cs-outcome-label">Complete Platform</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value">3</span>
                  <span className="cs-outcome-delta">User types served on one unified platform</span>
                  <span className="cs-outcome-label">User Diversity</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value">Open Access</span>
                  <span className="cs-outcome-delta">Public can submit requests directly</span>
                  <span className="cs-outcome-label">External Inclusion</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value" style={{ fontSize: '2rem' }}>Full visibility</span>
                  <span className="cs-outcome-delta">Into inventory, maintenance, and requests</span>
                  <span className="cs-outcome-label">For the first time</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 07 — REFLECTION ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">07 — Reflection</span>
              <h2 className="cs-section-title">What worked and what I'd change</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Designing the Request Log module as the intersection point between all three user types early in the process gave the rest of the platform a clear interaction model. The component library built for the request flow scaled cleanly across all six modules.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>What I'd do differently</h4>
                  <p>I'd invest more time testing the public-facing request flow with actual members of the public earlier. Designing for someone with zero context about the organisation is a fundamentally different challenge than designing for internal staff.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>Next steps / v2</h4>
                  <p>A mobile companion app focused on the request experience — for both internal staff and members of the public who need to submit and track item requests from their phone without accessing the full web platform.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 08 — DISCOVERY GRID (v4) ── */}
        <section className="cs-discovery">
          <div className="discovery-header">
            <h2 className="discovery-label">Selected Case Studies</h2>
          </div>
 
          <div className="discovery-grid DiscoveryGrid-2col">
            <Link href="/projects/waystream" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/waystream/thumbnail.png" alt="Waystream" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Waystream</h4>
                <span>Audio Streaming &amp; Fintech</span>
              </div>
            </Link>
 
            <Link href="/projects/drive45" className="discovery-card">
              <div className="discovery-image">
                <Image src="/drive45_mobility_mockup.png" alt="Drive45 Mobility" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Drive45 Mobility</h4>
                <span>Vehicle Subscription &amp; Mobility</span>
              </div>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
