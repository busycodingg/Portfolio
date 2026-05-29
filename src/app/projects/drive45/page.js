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

export default function Drive45CaseStudy() {
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
            <motion.div className="cs-hero-left" variants={fadeUp}>
              <h1 className="case-study-title">
                <span className="cs-title-line">Drive45 Mobility</span>
              </h1>
            </motion.div>
            <motion.div className="cs-hero-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="case-study-body-text">
                Designing a rent-to-own vehicle subscription platform — from onboarding to ownership, across 5 distinct user types.
              </motion.p>
              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">Solo UX/UI Designer</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Platform</span>
                    <span className="meta-value">Web App</span>
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
                    <span className="meta-value">Shipped</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Timeline</span>
                    <span className="meta-value">8 weeks</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">User Types</span>
                    <span className="meta-value">5 Distinct Roles</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="case-study-hero-image"
            style={{ backgroundImage: "url('/drive45_mobility_mockup.png')" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          />
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
              <h2 className="cs-section-title">Vehicle ownership in Nigeria is broken — Drive45 set out to fix it.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                For most Nigerians, owning a vehicle outright is out of reach. Upfront costs are prohibitive, financing options are limited, and the few lease or hire-purchase arrangements that exist are opaque, paper-heavy, and entirely offline. Drive45 was built to change that — a subscription-based platform that puts people in a vehicle immediately and moves them toward full ownership over time.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                But building the platform meant solving two problems simultaneously: a consumer-facing experience simple enough for first-time subscribers, and a powerful internal toolset for the Drive45 team to manage users, vehicles, applications, and payments across the entire lifecycle.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>No digital platform existed to manage the full vehicle subscription lifecycle — from application and due diligence to payment tracking, asset management, and ownership transfer.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>Potential subscribers had no transparent, accessible way to apply for a vehicle subscription, track their payments, or understand their path to ownership.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="cs-mockup-wrapper">
                <div className="cs-mockup-full">Drive45 Subscription Lifecycle Mapping</div>
              </motion.div>

              <motion.div variants={fadeUp} className="cs-statement">
                <span className="cs-card-tag">Problem statement</span>
                <blockquote className="cs-blockquote">
                  "How might we design a subscription platform so clear and trustworthy that a first-time applicant in Nigeria can go from sign-up to vehicle pick-up without a single phone call to Drive45 staff?"
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
              <h2 className="cs-section-title">Five users. One platform. Completely different needs.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Drive45 was unique in its complexity — not one user type, but five, each with fundamentally different goals, mental models, and workflows. Understanding each one before touching Figma was non-negotiable.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-research-grid">
                <div className="cs-research-card">
                  <span className="cs-research-type">Stakeholder interviews</span>
                  <span className="cs-research-stat">Drive45 founders, operations leads</span>
                </div>
                <div className="cs-research-card">
                  <span className="cs-research-type">PRD analysis</span>
                  <span className="cs-research-stat">Product requirements deep-dive</span>
                </div>
                <div className="cs-research-card">
                  <span className="cs-research-type">Competitive audit</span>
                  <span className="cs-research-stat">Fleet management &amp; subscription platforms</span>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Key insights</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>The subscriber journey was the longest and most emotionally loaded — applicants needed constant reassurance at every stage that their application was progressing and their money was safe.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>Internal staff (Application Officers and Fleet Supervisors) needed completely different tools — one focused on reviewing and approving, the other on monitoring assets and sending notifications.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>The investor view was the simplest but the most high-stakes — one wrong data point visible to a financier could undermine trust in the entire business.</p>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Target User Archetypes</motion.h3>
              <motion.div variants={fadeUp} className="cs-personas-grid">
                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">📋</div>
                    <div className="cs-persona-identity">
                      <h4>The Subscriber</h4>
                      <span>Salaried / Gig Worker</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>A transparent, guided journey from application to vehicle pick-up — with clear visibility of payments, tenure, and path to ownership.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>Existing options were offline, opaque, and required endless back-and-forth with staff just to understand basics.</p>
                  </div>
                </div>

                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">✅</div>
                    <div className="cs-persona-identity">
                      <h4>The Application Officer</h4>
                      <span>Approval Focused</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>A clean, efficient interface to review applications, approve or reject them, and track analytics without switching tools.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>No centralised system — application reviews were manual, scattered, and time-consuming.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="cs-personas-grid" style={{ marginTop: 0 }}>
                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">🚗</div>
                    <div className="cs-persona-identity">
                      <h4>The Fleet Supervisor</h4>
                      <span>Operations Focused</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>Full visibility of all vehicles and subscribers — with the ability to assign assets, send notifications, and monitor transactions.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>Relied on spreadsheets and phone calls to track vehicle assignments and subscriber payment statuses.</p>
                  </div>
                </div>

                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">⚙️</div>
                    <div className="cs-persona-identity">
                      <h4>The Admin</h4>
                      <span>Super User</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>Full platform control — onboarding users, managing data, enabling/disabling accounts, and overseeing activity.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>No single dashboard to manage all user types and platform settings — everything was fragmented across tools.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="cs-personas-grid" style={{ marginTop: 0 }}>
                <div className="cs-persona-card" style={{ gridColumn: 'span 2' }}>
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">📊</div>
                    <div className="cs-persona-identity">
                      <h4>The Investor</h4>
                      <span>Financier &middot; Read-Only</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>A clean, trustworthy dashboard to view and export platform data — without being overwhelmed by operational detail.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>Previous reporting was done via manually assembled slide decks — no real-time access to platform health or financial metrics.</p>
                  </div>
                </div>
              </motion.div>

              <motion.blockquote variants={fadeUp} className="cs-pull-quote">
                "I just want to know my application is moving. Nobody tells me anything until something goes wrong."
                <cite>— Subscriber research participant</cite>
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
                With five user types and a complex operational workflow, I needed a clear set of principles to anchor every design decision — especially when the needs of different users pulled in opposite directions.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>Progressive disclosure for subscribers</h4>
                    <p>The subscriber journey is long and involves sensitive financial decisions. Show only what's needed at each step — never overwhelm with complexity upfront.</p>
                    <div className="cs-mockup-card">
                      <span className="mock-v-nav"></span>
                      <span className="mock-v-btn"></span>
                      <span className="mock-v-tag">Step-by-step onboarding</span>
                    </div>
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 02</span>
                  <div className="cs-principle-content">
                    <h4>Separation of concerns for internal tools</h4>
                    <p>Application Officers, Fleet Supervisors, and Admins have completely different jobs. Their interfaces reflect that — purpose-built dashboards with no overlap.</p>
                    <div className="cs-mockup-card">
                      <div className="mock-v-chart">
                        <div className="bar" style={{ height: '40%' }}></div>
                        <div className="bar" style={{ height: '70%' }}></div>
                        <div className="bar" style={{ height: '55%' }}></div>
                        <div className="bar" style={{ height: '85%' }}></div>
                      </div>
                      <span className="mock-v-tag">Role-specific dashboards</span>
                    </div>
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 03</span>
                  <div className="cs-principle-content">
                    <h4>Transparency builds trust</h4>
                    <p>For a platform handling money, clarity is everything. Payment breakdowns, application status, tenure progress — every piece of data must be legible.</p>
                    <div className="cs-mockup-card">
                      <div className="mock-v-badge">₦ Transparent</div>
                      <span className="mock-v-tag">Payment clarity engine</span>
                    </div>
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 04</span>
                  <div className="cs-principle-content">
                    <h4>The investor sees a business, not a backend</h4>
                    <p>The investor view had to feel like an executive dashboard — clean data, clear metrics, and export functionality. No operational clutter.</p>
                    <div className="cs-mockup-card">
                      <span className="mock-v-line"></span>
                      <span className="mock-v-line"></span>
                      <span className="mock-v-tag">Executive data view</span>
                    </div>
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
              <h2 className="cs-section-title">Building across five workflows</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Started with the subscriber onboarding flow — the longest and most critical journey on the platform. Mapped the full end-to-end flow in FigJam before a single screen was designed. Progressed to high-fidelity dark-mode screens with a strict modular grid designed to work across all five user roles.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-before-after">
                <div className="cs-ba-card">
                  <span className="cs-ba-label cs-ba-label--before">Current Market State</span>
                  <div className="cs-mockup-card">
                    <span className="mock-v-line"></span>
                    <span className="mock-v-line"></span>
                    <span className="mock-v-line"></span>
                    <span className="mock-v-line"></span>
                  </div>
                  <h4>Unguided application — high drop-off</h4>
                  <p>Applicants browsed vehicles without knowing eligibility, leading to high drop-off at the offer stage. No visibility into application status after submission.</p>
                </div>
                <div className="cs-ba-arrow">→</div>
                <div className="cs-ba-card cs-ba-card--after">
                  <span className="cs-ba-label cs-ba-label--after">Drive45 Solution</span>
                  <div className="cs-mockup-card">
                    <span className="mock-v-btn-large"></span>
                    <span className="mock-v-tag-glow">Pre-determined</span>
                  </div>
                  <h4>Pre-determination first — expectations set</h4>
                  <p>Short income profile surfaces filtered listings based on eligibility. Expectations set before commitment. Real-time status tracking throughout.</p>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Iteration & Refinement</motion.h3>
              <motion.div variants={fadeUp} className="cs-iterations">
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 1: Due Diligence Drop-off</span>
                  <p>Subscribers were abandoning the flow at the due diligence payment step — the jump felt abrupt and unexplained. Users didn't understand why they were being asked to pay before receiving a vehicle.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 2: The Explanation Screen</span>
                  <p>Added a dedicated due diligence explanation screen breaking down the fee (ID verification, credit check, background check). Framed as protection for the subscriber. Drop-off at this step reduced significantly.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 3: Internal Role Clarity</span>
                  <p>Early internal dashboards tried to share components across roles — Application Officers and Fleet Supervisors saw the same tables. After feedback, each role got purpose-built views with only the data they needed.</p>
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
              <h2 className="cs-section-title">A new model for vehicle access in Nigeria</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Drive45 launched as a fully operational vehicle subscription platform — the first of its kind in Nigeria to manage the complete lifecycle through a single digital interface.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-mockup-full">
                Final Modular Platform Dashboard Shipped
              </motion.div>

              <motion.div variants={fadeUp} className="cs-outcome-grid">
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value">5</span>
                  <span className="cs-outcome-delta">Distinct user roles served</span>
                  <span className="cs-outcome-label">User Types</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value">100%</span>
                  <span className="cs-outcome-delta">End-to-end digital</span>
                  <span className="cs-outcome-label">Lifecycle Coverage</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value">Live</span>
                  <span className="cs-outcome-delta">Shipped and operational</span>
                  <span className="cs-outcome-label">Platform Status</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="cs-outcome-value" style={{ fontSize: '2rem' }}>Onboarding → Ownership</span>
                  <span className="cs-outcome-delta">Full subscriber journey digitised</span>
                  <span className="cs-outcome-label">Complete lifecycle in one platform</span>
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
              <h2 className="cs-section-title">Lessons from complexity</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Mapping the full end-to-end flow in FigJam before designing a single screen. With five user types and dozens of conditional states, having a shared flow diagram was the single most important artifact of the project — it aligned stakeholders, revealed edge cases, and prevented scope creep during high-fidelity execution.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>What I'd do differently</h4>
                  <p>Push for usability testing with actual subscribers earlier in the process — specifically around the due diligence step. The drop-off at that stage could have been caught sooner with even a single round of prototype testing before development started.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>Next steps / v2</h4>
                  <p>A mobile companion app for subscribers — focused on payment tracking, maintenance notifications, and tenure progress. The web platform serves operations; mobile should serve the subscriber's day-to-day relationship with their vehicle.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 08 — DISCOVERY GRID ── */}
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
 
            <Link href="/projects/logistic-app" className="discovery-card">
              <div className="discovery-image">
                <Image src="/logistic_app_mockup.png" alt="Logistic App" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Logistic App</h4>
                <span>Facility Management</span>
              </div>
            </Link>
          </div>
 
        </section>
        <Footer />
      </div>
    </main>
  );
}
