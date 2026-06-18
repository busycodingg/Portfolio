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

export default function WaystreamCaseStudy() {

  return (
    <main className="case-study-container case-study-container--waystream">
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
              <motion.div className="flagship-badge" variants={fadeUp}>
                <span className="pulse-dot"></span>
                Flagship Case Study
                <div className="flagship-audio-wave" style={{ marginLeft: "10px" }}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </motion.div>

              <motion.h1 className="case-study-title" variants={fadeUp}>
                <span className="cs-title-line text-gradient-audio">Waystream</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: '2rem' }}>
                Africa's first audio streaming platform built to give creators, churches, and communities a voice without bandwidth barriers or foreign payment walls.
              </motion.p>

              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">Solo UX/UI Designer</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Platform</span>
                    <span className="meta-value">Mobile &middot; Web &middot; Desktop</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Domain</span>
                    <span className="meta-value">Audio &amp; Creator Economy</span>
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
                    <span className="meta-value">3+ Years</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Users</span>
                    <span className="meta-value">40,000+</span>
                  </div>
                </div>
              </motion.div>

              <motion.div className="floating-player-mockup" variants={fadeUp}>
                <div className="player-header">
                  <div className="player-status-badge">
                    <span className="live-dot"></span>
                    Live Broadcast
                  </div>
                  <div className="player-track-info">
                    40k+ listening
                  </div>
                </div>
                <div className="player-body">
                  <div className="player-art">
                    📻
                  </div>
                  <div className="player-details">
                    <h5>Lagos Sunday Service</h5>
                    <p>Grace Sanctuary Choir</p>
                  </div>
                  <div className="player-controls">
                    <div className="player-visualizer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="cs-hero-right" variants={staggerContainer}>
              <motion.img
                src="/projects/waystream/hero.png"
                alt="Waystream Hero"
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
              <h2 className="cs-section-title">The gap existing platforms ignored</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Platforms like Spotify, Apple Music, and YouTube are engineered for global audiences  not African creators. Nigerian churches, independent podcasters and DJs trying to broadcast to their communities hit the same walls every time: payment systems that didn't support local currencies across Africa, video-first platforms that choked on low-bandwidth connections, and no real-time broadcasting for the creators who needed it most.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>No platform existed that combined live audio broadcasting, on-demand podcasting, and local payment infrastructure for African creators in one place.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>Creators were losing audiences they'd already built  not because their content was bad, but because the tools available weren't built for their reality.</p>
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
                    src="/projects/waystream/fragmented.png"
                    alt="Current Fragmented Ecosystem Mapping"
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
                  "How might we design a live broadcasting experience so simple that a church admin in Lagos can go live to their congregation in under 60 seconds  from any device, on any network?"
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
              <h2 className="cs-section-title">What creators actually needed</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Spoke directly with creators across Waystream's core audience segments  church admins, DJs, independent and podcasters  to understand how they were currently reaching their audiences and where they were breaking down.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-research-grid">
                <div className="cs-research-card">
                  <span className="cs-research-type">User conversations</span>
                  <span className="cs-research-stat">Churches, DJs, podcasters</span>
                </div>
                <div className="cs-research-card">
                  <span className="cs-research-type">Competitive audit</span>
                  <span className="cs-research-stat">5 platforms  Spotify, Apple Music, YouTube, Anchor, Mixlr</span>
                </div>
                <div className="cs-research-card">
                  <span className="cs-research-type">Journey mapping</span>
                  <span className="cs-research-stat">Broadcaster setup-to-live flow</span>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Key insights</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>Creators were promoting live events on WhatsApp and Instagram but had nowhere to actually host the stream affordably  they'd link out to YouTube and lose control of the experience entirely.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>Nigerian churches were the most underserved segment. They had large, loyal audiences ready to listen and donate  but no platform that accepted local payment methods or offered a simple enough broadcast setup.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>The most common request across every user type was the same: "I just want to go live from my phone without needing a cameraman, an editor, or a dollar card."</p>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Target User Archetypes</motion.h3>
              <motion.div variants={fadeUp} className="cs-personas-grid">
                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">⛪</div>
                    <div className="cs-persona-identity">
                      <h4>The Church Admin</h4>
                      <span>High frequency &middot; Community scale</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>Reliable Sunday morning broadcast to domestic and diaspora members  requires zero technical friction and localized payment support (Naira) for donations.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>Existing tools require dollar cards and stable 4G. YouTube pushes members to secular content after the service ends, breaking the communal experience.</p>
                  </div>
                </div>

                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar">🎤</div>
                    <div className="cs-persona-identity">
                      <h4>The Independent Creator</h4>
                      <span>Growth-focused &middot; Content-heavy</span>
                    </div>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Core Need</span>
                    <p>Modular dashboard to manage live audio shows and recorded podcasts in one space. Needs to see growth metrics (listeners, engagement) instantly.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary Frustration</span>
                    <p>Fragmented tools. Having to host audio on one platform, live stream on another, and collect payments on a third  losing data and audience in the middle.</p>
                  </div>
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
              <h2 className="cs-section-title">Two rules that guided every decision</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                To solve for the Lagos church admin and the independent creator, I defined two principles that optimized for low-bandwidth reality and high-frequency use.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>One tap to live</h4>
                    <p>Broadcasting setup must be fast enough to start mid-service. Every extra field is a reason to abandon the stream.</p>
                    <div className="cs-principle-mockup">
                      <motion.img
                        src="/projects/waystream/Principle 01.png"
                        alt="Principle 01: One tap to live"
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
                    <h4>No foreign barriers</h4>
                    <p>Optimized for mid-range Android devices on 3G/Edge networks. Native support for local payment gateways for automated donation payouts.</p>
                    <div className="cs-principle-dual-mockup">
                      <div className="cs-principle-mockup cs-principle-mockup--mobile">
                        <motion.img
                          src="/projects/waystream/mobile 1.png"
                          alt="Principle 02: Mobile view 1"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                        />
                      </div>
                      <div className="cs-principle-mockup cs-principle-mockup--mobile">
                        <motion.img
                          src="/projects/waystream/mobile 2.png"
                          alt="Principle 02: Mobile view 2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

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
              <h2 className="cs-section-title">Building the broadcaster experience</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Started with low-fidelity wireframes to test the broadcaster setup flow  the single most critical journey on the platform. Going live had to feel like pressing one button, not configuring a studio. Progressed to high-fidelity dark-mode screens with a strict modular grid designed to work across desktop (primary broadcast surface) and mobile (channel management and monitoring).
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Full-span Comparison Breakout */}
          <motion.div
            className="cs-full-breakout"
            variants={fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cs-before-after">
              <div className="cs-ba-card cs-ba-card--before">
                <span className="cs-ba-label cs-ba-label--before">Current Market Benchmarks</span>
                <div className="cs-mockup-card">
                  <motion.img
                    src="/projects/waystream/benchmarks.png"
                    alt="Current Market Benchmarks"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <h4>Broadcast setup  6 steps</h4>
                <p>YouTube and Anchor require significant configuration  title, description, category, privacy, tags, and audio input  before the 'Go Live' button becomes active.</p>
              </div>
              <div className="cs-ba-arrow">→</div>
              <div className="cs-ba-card cs-ba-card--after">
                <span className="cs-ba-label cs-ba-label--after">Waystream Solution</span>
                <div className="cs-mockup-card">
                  <motion.img
                    src="/projects/waystream/solution.png"
                    alt="Waystream Proposed Solution"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <h4>Broadcast setup  2 steps</h4>
                <p>Optimized for mid-service speed. Title and Go Live. Technical settings are handled intelligently in the background and can be adjusted mid-stream.</p>
              </div>
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
                  <span className="cs-iteration-tag">Iteration 1: Feedback</span>
                  <p>Initial testing showed broadcasters couldn't share their live link without leaving the 'Broadcaster HUD'. Moving away broke the session monitoring and discouraged growth.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 2: The 'Live Share' Bridge</span>
                  <p>Designed a persistent, one-tap sharing bridge directly in the HUD. Instead of hiding the broadcast stats to find a link, broadcasters can now generate and push high-conversion WhatsApp/Instagram links mid-sermon, ensuring growth without breaking the one-tap simplicity.</p>
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
              <h2 className="cs-section-title">A new home for African voices</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Waystream launched as the continent's first dedicated live audio homeoptimizing for the reality of mid-range Android devices and 3G networks. By removing technical and financial friction (Naira payments, one-tap speed), it achieved rapid adoption from the most underserved creators.
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
                src="/projects/waystream/Modular.png"
                alt="Final Modular Broadcaster Dashboard Shipped"
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
                <span className="cs-outcome-value">40,000+</span>
                <span className="cs-outcome-delta">Users on the platform</span>
                <span className="cs-outcome-label">Active Users</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">Millions</span>
                <span className="cs-outcome-delta">Listeners reached</span>
                <span className="cs-outcome-label">Across Africa</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">#1</span>
                <span className="cs-outcome-delta">First dedicated</span>
                <span className="cs-outcome-label">Live audio platform</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">Local payments</span>
                <span className="cs-outcome-delta">Removed foreign payment barriers</span>
                <span className="cs-outcome-label">Creators across Africa can now access premium features in their local currency</span>
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
              <h2 className="cs-section-title">What I learned</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Committing to audio-only wasn't a limitation  it was the product's biggest strength. It meant lower bandwidth requirements, simpler interfaces, and a focused experience that video platforms couldn't replicate. The dark-mode-first aesthetic also reduced cognitive load for creators managing live broadcasts under pressure.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>What I'd do differently</h4>
                  <p>I'd invest more time upfront mapping the donation flow specifically for church use cases. It became the most-used monetisation feature but was designed relatively late. Earlier focus there would have produced a more refined experience at launch.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>Next steps / v2</h4>
                  <p>A lightweight mobile-first broadcast mode for creators who go live from their phones regularly  stripped down to title, one-tap live, and live chat. No dashboard, no settings. Just broadcast.</p>
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
            <Link href="/projects/drive45" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/drive45/hero.png" alt="Drive45" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Drive45 Mobility</h4>
                <span>Fintech &amp; Mobility</span>
              </div>
            </Link>

            <Link href="/projects/logistic-app" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/Logistic/hero.png" alt="Logistic App" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Logistic App</h4>
                <span>Logistics &amp; Operations</span>
              </div>
            </Link>
          </div>

        </section>
        <Footer />
      </div>
    </main>
  );
}
