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

export default function ContraktekCaseStudy() {
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
                <span className="cs-title-line">Contraktek</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: '2rem' }}>
                A procurement trust platform for Nigeria's construction industry — giving clients certainty over their money and materials, and giving the Super Admin one system to manage every order, vendor, and driver from placement to payout.
              </motion.p>

              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">Founding Product Designer</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Platform</span>
                    <span className="meta-value">Web</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Domain</span>
                    <span className="meta-value">Construction &amp; Procurement</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Status</span>
                    <span className="meta-value">Design &amp; Prototype Complete — Not Yet Live</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Timeline</span>
                    <span className="meta-value">June — August 2026</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">User Types</span>
                    <span className="meta-value">2 Interactive Roles</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="cs-hero-right" variants={staggerContainer}>
              <motion.img
                src="/projects/contraktek/hero.png"
                alt="Contraktek Mockup"
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
              <h2 className="cs-section-title">Construction procurement in Nigeria runs on trust nobody can verify.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Procuring materials for a construction project in Nigeria typically means sending money to a vendor and hoping the right items arrive, in the right quantity, on time — with little visibility in between. Contraktek was conceived by its founder to close that gap: a platform where payment is held in escrow, delivery is confirmed directly by the client, and the Super Admin has one system that tracks every order, vendor, and driver from placement to payout.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                I joined Contraktek as its founding — and sole — product designer during its formative stage, translating the founder's documented business rules into a usable, coherent product for the platform's two real user roles — plus the vendor and driver directory the Super Admin manages behind the scenes.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>No shared system existed for tracking procurement money and materials end-to-end — clients, vendors, and logistics ran on separate, disconnected channels (calls, transfers, paper receipts).</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>Clients had no reliable way to confirm their money was safe or their order was progressing, and the operations team had no single system tracking vendor and driver assignment, delivery status, and disputes — everything lived in phone calls and spreadsheets.</p>
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
                    src="/projects/contraktek/contraktek-order-escrow-flow_1.png"
                    alt="Contraktek Order & Escrow Flow Mapping"
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
                  "How might we make a construction client — often sending a significant sum to a vendor they've never met — feel certain their money and materials are accounted for at every step?"
                </blockquote>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 03  UNDERSTANDING THE OPERATING MODEL ── */}
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
              <span className="cs-section-tag">03  Understanding the operating model</span>
              <h2 className="cs-section-title">The source of truth wasn't a research deck — it was the business itself.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Contraktek's operating logic — how escrow is released, how a delivery gets confirmed, how a dispute is raised and resolved — was documented by the founder in a detailed MVP Business Rules specification, built from firsthand knowledge of how procurement actually breaks down on Nigerian construction sites. My job wasn't to run discovery research from scratch; it was to read that operating model closely, ask where it was ambiguous, and turn it into an interface for the platform's two real roles, plus a directory model for tracking vendors and drivers who never log in at all.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Full-span Breakout */}
          <motion.div
            className="cs-full-breakout"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cs-mockup-full no-bg">
              <motion.img
                src="/projects/contraktek/section 3.png"
                alt="Contraktek Order Assignment & Vendor Suggestion Flow"
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
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Working through the rules</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>Delivery confirmation needed to be anchored entirely in the client's own word — the moment they confirm, the system trusts it completely and releases payment automatically, with no intermediate manual step.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>Vendors and drivers don't need logins of their own — they're structured records the Super Admin manages directly: assigned to orders, tracked through delivery, and paid out automatically. Keeping that data in one place mattered more than giving them separate accounts.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>A generic "order category" wasn't specific enough — a client ordering cement and a client ordering tile need different information at delivery, so the item itself, not just its category, had to drive what each screen shows.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">4</span>
                  <p>The client's anxiety doesn't end the moment they pay — it was just as important that the platform stay visibly "alive" between escrow and delivery: pickup confirmed, in transit, or running behind schedule, rather than going quiet until the order shows up.</p>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Target user roles</motion.h3>
              <motion.div variants={fadeUp} className="cs-personas-grid">
                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">🧾</div>
                    <div className="cs-persona-identity">
                      <h4>The Client</h4>
                      <span>Buyer / Site Owner</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>Certainty that funds are held safely and released only against a confirmed delivery — with real-time visibility into pickup, transit, and delay status along the way, and a simple way to confirm delivery themselves.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>No visibility into where their money or materials stood once a vendor was paid, outside of phone calls and manual follow-up.</p>
                  </div>
                </div>

                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">⚙️</div>
                    <div className="cs-persona-identity">
                      <h4>The Super Admin</h4>
                      <span>Platform Operator</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>Full oversight of every order and escrow status, plus one place to manage the vendor and driver directory and step in when a dispute needs a human judgment call.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>No central view tying client confirmations, vendor and driver assignment, and payout status to a single order record.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="cs-card" style={{ marginTop: '2rem' }}>
                <span className="cs-card-tag">Deliberately not a role</span>
                <p>Vendors and drivers aren't logged-in users — they're structured records the Super Admin adds and manages directly: assigned to orders, tracked through delivery, and paid out automatically the moment the client confirms. No separate vendor or driver dashboard exists, by design — it keeps trust and accountability centralized in one system instead of split across multiple logins.</p>
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
              <h2 className="cs-section-title">Four rules for a platform built on trust</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                With money, materials, and a strict split between who's a logged-in user and who's just a managed record, every screen had to answer one question first: does this make the process more legible, or less?
              </motion.p>

              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>Escrow legibility for a nervous client</h4>
                    <p>A client sending a large sum to a vendor they've never met needs to see exactly what's held, what's been released, and where their order physically stands — picked up, in transit, or delayed — at every stage, not just at the end.</p>
                    <div className="cs-principle-mockup">
                      <motion.img
                        src="/projects/contraktek/principle 1.png"
                        alt="Principle 01: Escrow legibility for a nervous client"
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
                    <h4>The client's confirmation is the trigger, not just the record</h4>
                    <p>The moment a client confirms delivery, escrow releases automatically. There's no intermediate human step between the client's word and the vendor's payout — the confirmation does the work.</p>
                    <div className="cs-principle-mockup">
                      <motion.img
                        src="/projects/contraktek/principle 2.png"
                        alt="Principle 02: The client's confirmation is the trigger, not just the record"
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
                    <h4>Vendors and drivers are data, not dashboards</h4>
                    <p>Rather than building separate logins, vendors and drivers are managed entirely inside the Super Admin's system — assigned, tracked, and paid without an account of their own. One auditable record beats truth split across three apps.</p>
                    <div className="cs-principle-mockup">
                      <motion.img
                        src="/projects/contraktek/principle 3.png"
                        alt="Principle 03: Vendors and drivers are data, not dashboards"
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
                  <span className="cs-principle-num">Principle 04</span>
                  <div className="cs-principle-content">
                    <h4>The item, not the category, drives the screen</h4>
                    <p>Cement and tile are both "materials," but they mean different things at delivery. Order detail is built around the specific item, so expectations and confirmations stay accurate.</p>
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
              <h2 className="cs-section-title">From business rules to an interface</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Started by mapping every rule in the MVP Business Rules document to a screen and an action — one column per role (including the vendor and driver directory), one row per rule — before opening Figma. That mapping surfaced the questions the document didn't answer (what happens during a dispute, what the Super Admin can override) and became the running list I brought back to the founder for clarification.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                From there, I built the escrow and order-status system first — it underpins everything else — then the client's confirmation flow, and the Super Admin's oversight view, including how vendors and drivers are added, assigned, and tracked as managed records rather than separate logins, keeping a shared visual language across both surfaces so the platform reads as one product.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Full-span Breakout */}
          <motion.div
            className="cs-full-breakout"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cs-mockup-full no-bg">
              <motion.img
                src="/projects/contraktek/Section 5.png"
                alt="Contraktek Add Vendor Flow"
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
                  <span className="cs-iteration-tag">Iteration 1: Early direction</span>
                  <p>My first pass on delivery confirmation assumed a driver would log into the system to confirm each delivery — closer to a logistics app than a trust platform. Revisiting the business rules with the founder clarified that drivers don't need a login at all; the client's own confirmation should be the trigger.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 2: Refinement</span>
                  <p>Removed the intermediate confirmation step entirely and made the client's own confirmation release escrow automatically — cutting a redundant internal action and putting trust exactly where it belongs.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 3: Vendor &amp; driver management</span>
                  <p>Early drafts considered giving vendors their own login to check payment status. Decided against it — vendors and drivers are managed as records inside the Super Admin's system instead, keeping trust and accountability centralized rather than split across logins.</p>
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
              <h2 className="cs-section-title">A finished design system, honestly framed</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Design and prototype are complete — Contraktek hasn't launched publicly yet, but the design system is finished: both real user roles, plus a full vendor and driver management model, translated directly from the founder's documented operating model and ready to move into build.
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
                src="/projects/contraktek/Section 6.png"
                alt="Final Contraktek Platform Design"
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
                <span className="cs-outcome-value">2</span>
                <span className="cs-outcome-delta">Client &amp; Super Admin, designed end-to-end</span>
                <span className="cs-outcome-label">Interactive Roles</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value cs-outcome-value--text">Complete</span>
                <span className="cs-outcome-delta">Design &amp; prototype finished — ready for build</span>
                <span className="cs-outcome-label">Platform Status</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value cs-outcome-value--text">Tracked &amp; Auto-Released</span>
                <span className="cs-outcome-delta">Live pickup/delay status, escrow pays out on confirmation</span>
                <span className="cs-outcome-label">Trust Model</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value cs-outcome-value--text">Rules → Interface</span>
                <span className="cs-outcome-delta">MVP business rules translated end-to-end</span>
                <span className="cs-outcome-label">Design System Coverage</span>
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
              <h2 className="cs-section-title">Designing from someone else's operating model</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Mapping every business rule to a screen and role before designing anything. It turned a dense specification document into a concrete backlog, and surfaced ambiguities early instead of mid-design.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>What I'd do differently</h4>
                  <p>Push earlier for direct conversations with the founder about edge cases — disputes, partial deliveries, refunds — rather than inferring them from the document alone. Several assumptions needed correcting once I asked directly.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>Next steps</h4>
                  <p>Usability testing with real clients and the Super Admin's operations team now that the prototype is build-ready, and a dedicated dispute-resolution flow with clearer escalation states.</p>
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
            <Link href="/projects/erastus-quartus" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/erastus-quartus/hero.png" alt="Erastus Quartus Projects" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Erastus Quartus Projects</h4>
                <span>Construction &amp; Structural Engineering</span>
              </div>
            </Link>

            <Link href="/projects/waystream" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/waystream/hero.png" alt="Waystream" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Waystream</h4>
                <span>Audio &amp; Creator Economy</span>
              </div>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
