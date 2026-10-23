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
                <span className="cs-title-line">Waystream</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: '2rem' }}>
                An audio streaming platform for African creators, churches and communities, built for low bandwidth and local payments.
              </motion.p>

              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">Founding Design Lead</span>
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
                    <span className="meta-value">May 2022 – Present</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Users</span>
                    <span className="meta-value">3,000+</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://waystream.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-value"
                  style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
                >
                  View the live site ↗
                </a>
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
                Spotify, Apple Music and YouTube are built for global audiences, not African creators. Nigerian churches, independent podcasters and DJs trying to reach their communities hit the same walls: payment systems that didn't support local currencies, video-first platforms that struggled on low-bandwidth connections, and no simple way to broadcast live.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                I was Waystream's founding designer and its only designer from launch, designing the product end to end across mobile, web and desktop. As the team grew, I mentored the junior designers who joined.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>No platform combined live audio broadcasting, on-demand podcasting and local payments for African creators in one place.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>Creators were losing audiences they had already built. Not because their content was weak, but because the tools available weren't built for their reality.</p>
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
                  "How might we design a live broadcasting experience so simple that a church admin in Lagos can go live to their congregation in under 60 seconds, from any device, on any network?"
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
                I spoke directly with creators across Waystream's core segments, church admins, DJs and independent podcasters, to understand how they reached their audiences and where that broke down.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-research-grid">
                <div className="cs-research-card">
                  <span className="cs-research-type">User conversations</span>
                  <span className="cs-research-stat">Churches, DJs, podcasters</span>
                </div>
                <div className="cs-research-card">
                  <span className="cs-research-type">Competitive audit</span>
                  <span className="cs-research-stat">5 platforms (Spotify, Apple Music, YouTube, Anchor, Mixlr)</span>
                </div>
                <div className="cs-research-card">
                  <span className="cs-research-type">Journey mapping</span>
                  <span className="cs-research-stat">The broadcaster's setup-to-live flow</span>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Key insights</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>Creators promoted live events on WhatsApp and Instagram, but had nowhere affordable to host the stream. They linked out to YouTube and lost control of the experience.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>Nigerian churches were the most underserved segment: large, loyal audiences ready to listen and give, but no platform that accepted local payment methods or offered a simple enough broadcast setup.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>The most common request, across every user type: "I just want to go live from my phone without needing a cameraman, an editor, or a dollar card."</p>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Target user archetypes</motion.h3>
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
                    <span className="cs-persona-label">Core need</span>
                    <p>A reliable Sunday broadcast to members at home and abroad, with no technical friction and donations in Naira.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary frustration</span>
                    <p>Existing tools need dollar cards and stable 4G. YouTube pushes members toward unrelated content after the service, breaking the communal experience.</p>
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
                    <span className="cs-persona-label">Core need</span>
                    <p>One dashboard for live shows and recorded podcasts, with listener and engagement numbers at a glance.</p>
                  </div>
                  <div className="cs-persona-detail">
                    <span className="cs-persona-label">Primary frustration</span>
                    <p>Fragmented tools. Audio hosted in one place, live streams in another, payments in a third, with data and audience lost in between.</p>
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
                To serve both the church admin and the independent creator, I set two principles built around low bandwidth and frequent use.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>One tap to live.</h4>
                    <p>Setup has to be fast enough to start mid-service. Every extra field is a reason to abandon the stream.</p>
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
                    <h4>No foreign barriers.</h4>
                    <p>Built for mid-range Android phones on 3G and EDGE networks, with local payment gateways for automatic donation payouts.</p>
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
              <h2 className="cs-section-title">Building the broadcaster experience</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                I started with low-fidelity wireframes of the broadcaster setup flow, the most critical journey on the platform. Going live had to feel like pressing one button, not configuring a studio. The high-fidelity screens use a dark-mode modular grid that works on desktop, the main broadcast surface, and on mobile for channel management and monitoring.
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
            <div className="cs-before-after cs-before-after--no-arrow">
              <div className="cs-ba-card cs-ba-card--before">
                <div className="cs-mockup-card" style={{ border: "none" }}>
                  <motion.img
                    src="/projects/waystream/benchmarks.png"
                    alt="Current Market Benchmarks"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p><strong>Market benchmark: 6 steps.</strong> YouTube and Anchor ask for a title, description, category, privacy, tags and audio input before Go Live becomes active.</p>
              </div>
              <div className="cs-ba-card cs-ba-card--after">
                <div className="cs-mockup-card" style={{ border: "none" }}>
                  <motion.img
                    src="/projects/waystream/solution.png"
                    alt="Waystream Proposed Solution"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p><strong>Waystream: 2 steps.</strong> A title, then Go Live. Technical settings are handled in the background and can be adjusted mid-stream.</p>
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
                  <span className="cs-iteration-tag">Iteration 1 · What testing showed</span>
                  <p>Broadcasters couldn't share their live link without leaving the Broadcaster HUD, which broke session monitoring and held back growth.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Iteration 2 · The Live Share bridge</span>
                  <p>A persistent, one-tap share button inside the HUD. Broadcasters can push WhatsApp and Instagram links mid-sermon without hiding their stats or leaving the live view.</p>
                </div>
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Testing with creators</span>
                  <p>I ran usability tests with 10 creators, watching them go live and noting where they got stuck. Fixing those friction points significantly reduced go-live support requests.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 06  GROWING THE PRODUCT ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">06  Growing the product</span>
              <h2 className="cs-section-title">Beyond the broadcaster</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                As Waystream grew, the work moved from one critical flow to the whole product.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p><strong>A design system for four platforms.</strong> I built an 80+ component Figma design system used across iOS, Android, web and desktop, so the product stays consistent everywhere as it grows.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p><strong>Onboarding that people finish.</strong> Mixpanel funnel analysis showed people dropping off in a form-only sign-up flow. I redesigned onboarding around Google and Apple sign-in, raising completion from 30% to 50%, a 67% relative lift.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p><strong>A landing page for a global audience.</strong> With the marketing team, I redesigned the landing page with language based on where the visitor is, region-relevant imagery and sharper messaging. Creator subscriptions rose 25%.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 07  OUTCOME & IMPACT ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">07  Outcome &amp; impact</span>
              <h2 className="cs-section-title">A home for African voices, built for their reality</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Waystream shipped as a dedicated live audio platform for African creators, designed for mid-range Android phones and 3G networks. By removing technical and financial friction, with Naira payments and a two-step go-live, it won over the creators existing platforms served worst.
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
                <span className="cs-outcome-value">3,000+</span>
                <span className="cs-outcome-delta">Users on the platform</span>
                <span className="cs-outcome-label">Users</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">2 steps</span>
                <span className="cs-outcome-delta">From setup to live, down from 6</span>
                <span className="cs-outcome-label">Go-Live</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">30% → 50%</span>
                <span className="cs-outcome-delta">Onboarding completion after the redesign</span>
                <span className="cs-outcome-label">Onboarding</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">+25%</span>
                <span className="cs-outcome-delta">Creator subscriptions after the landing page redesign</span>
                <span className="cs-outcome-label">Subscriptions</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 08  REFLECTION ── */}
        <section className="cs-section">
          <motion.div
            className="cs-section-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">08  Reflection</span>
              <h2 className="cs-section-title">What I learned</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Committing to audio-only turned out to be the product's biggest strength. It meant lower bandwidth, simpler interfaces and a focus that video platforms couldn't match. Dark mode by default also reduced cognitive load for creators running a live broadcast under pressure.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>What I'd do differently</h4>
                  <p>Map the church donation flow earlier. It became the most-used way to earn on the platform but was designed relatively late, and earlier focus would have meant a more refined experience at launch.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>Next steps</h4>
                  <p>A lightweight mobile broadcast mode for creators who go live from their phones: title, one-tap live and live chat. No dashboard, no settings. Just broadcast.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 09  DISCOVERY GRID (v4) ── */}
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
                <Image src="/projects/Logistic/hero.png" alt="Operations Management Platform" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Operations Management Platform</h4>
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
