"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MediaProvider, Slot, MetricShift } from "@/components/case-study/CaseStudyMedia";
import { SLOTS } from "./slots";
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

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-100px" },
};

// Section opener: number and name on the left, narrative on the right.
function SectionHead({ num, title, children }) {
  return (
    <motion.div className="cs-section-grid" variants={staggerContainer} {...inView}>
      <motion.div className="cs-section-left" variants={fadeUp}>
        <span className="cs-section-tag">{num}</span>
        <h2 className="cs-section-title">{title}</h2>
      </motion.div>
      <motion.div className="cs-section-right" variants={staggerContainer}>
        {children}
      </motion.div>
    </motion.div>
  );
}

// Follow-on narrative inside a section, aligned to the right column.
function Narrative({ children }) {
  return (
    <motion.div className="cs-section-grid" variants={staggerContainer} {...inView}>
      <div className="cs-section-left"></div>
      <motion.div className="cs-section-right" variants={staggerContainer}>
        {children}
      </motion.div>
    </motion.div>
  );
}

function Body({ children }) {
  return (
    <motion.p variants={fadeUp} className="cs-section-body">
      {children}
    </motion.p>
  );
}

function Visual({ slot, variant }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Slot slot={slot} variant={variant} />
    </motion.div>
  );
}

export default function WaystreamCaseStudy({ mediaPath, media }) {
  return (
    <MediaProvider basePath={mediaPath} files={media}>
      <main className="case-study-container">
        <div className="layout-wrapper">
          <Navigation />

          {/* ── HERO ── */}
          <section className="case-study-hero">
            <motion.div className="cs-hero-grid" variants={staggerContainer} initial="hidden" animate="show">
              <motion.div className="cs-hero-left" variants={staggerContainer}>
                <motion.h1 className="case-study-title" variants={fadeUp}>
                  <span className="cs-title-line">Waystream</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: "2rem" }}>
                  A Multi-Sided Platform for Live Audio Streaming
                </motion.p>

                <motion.div variants={fadeUp} className="case-study-meta">
                  <div className="meta-row">
                    <div className="meta-item">
                      <span className="meta-label dimmed">Role</span>
                      <span className="meta-value">Founding Design Lead</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label dimmed">Timeline</span>
                      <span className="meta-value">May 2022 – Present</span>
                    </div>
                  </div>
                  <hr className="meta-divider" />
                  <div className="meta-row">
                    <div className="meta-item">
                      <span className="meta-label dimmed">Product</span>
                      <span className="meta-value">Live audio streaming / SaaS</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label dimmed">Platforms</span>
                      <span className="meta-value">iOS, Android, web app, desktop app and marketing website</span>
                    </div>
                  </div>
                  <hr className="meta-divider" />
                  <div className="meta-row">
                    <div className="meta-item">
                      <span className="meta-label dimmed">Team &amp; Collaboration</span>
                      <span className="meta-value">Product, design, engineering, QA, marketing and stakeholders</span>
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
                  alt="Waystream"
                  className="case-study-hero-image"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                />
              </motion.div>
            </motion.div>
          </section>

          {/* ── 01  PROJECT OVERVIEW ── */}
          <section className="cs-section">
            <SectionHead num="01" title="Project overview">
              <Body>
                Waystream is a live audio streaming platform that enables creators, including churches and independent broadcasters, to connect with audiences through live audio. Creators can broadcast, manage content, understand performance and earn when listeners give. Listeners can discover broadcasts, listen, participate in the live experience and send gifts to the creators they love.
              </Body>
              <Body>
                I joined the product team as Founding Design Lead and led product design across the platform, shaping experiences for creators, listeners and administrators from the ground up.
              </Body>
              <Body>
                My scope included creator and listener products, the admin platform, payment and subscription journeys, the marketing website and the product design system.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.screen01} />
          </section>

          {/* ── 02  THE CHALLENGE ── */}
          <section className="cs-section">
            <SectionHead num="02" title="The challenge">
              <Body>
                Waystream evolved gradually from its early product offering towards a more self-service, product-led growth model. The product needed to support three user groups with different goals and operational needs.
              </Body>
            </SectionHead>
            <motion.div variants={fadeUp} {...inView} className="csm-trio csm-trio--wide">
              <div className="cs-card">
                <span className="cs-card-tag">Creators</span>
                <p>Needed to onboard, broadcast, schedule content, monitor performance and monetise their audiences.</p>
              </div>
              <div className="cs-card">
                <span className="cs-card-tag">Listeners</span>
                <p>Needed to discover broadcasts, follow creators, listen, chat, share streams and engage with live content.</p>
              </div>
              <div className="cs-card">
                <span className="cs-card-tag">Administrators</span>
                <p>Needed to manage users, creators, broadcasts, subscriptions, payments and content, and oversee platform activity.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} {...inView} className="cs-statement csm-statement">
              <span className="cs-card-tag">Problem statement</span>
              <blockquote className="cs-blockquote">
                &quot;How might we let a church or independent creator go live, grow an audience and earn, from any device, without technical help?&quot;
              </blockquote>
            </motion.div>
            <Visual slot={SLOTS.screen02} />
          </section>

          {/* ── 03  PRODUCT DISCOVERY AND COLLABORATION ── */}
          <section className="cs-section">
            <SectionHead num="03" title="Product discovery and collaboration">
              <Body>
                I worked closely with the product team through brainstorming sessions, product discussions and feature exploration. Sometimes we developed ideas collaboratively; at other times, I worked from Business Requirements Documents (BRDs) or Product Requirements Documents (PRDs). I translated business and product requirements into user flows, wireframes, interaction models and high-fidelity interfaces.
              </Body>
              <Body>
                I used a combination of research methods, including user interviews, surveys, usability testing, competitor research and feedback from listeners, to understand user needs and inform design decisions. I considered the goals and context of each user group rather than treating the platform as a single audience.
              </Body>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Target user archetypes</motion.h3>
              <motion.div variants={fadeUp} className="cs-personas-grid">
                <div className="cs-persona-card">
                  <div className="cs-persona-header">
                    <div className="cs-persona-avatar cs-persona-avatar--icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/projects/waystream/persona-church-admin.png" alt="" />
                    </div>
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
                    <div className="cs-persona-avatar cs-persona-avatar--icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/projects/waystream/persona-independent-creator.png" alt="" />
                    </div>
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
            </SectionHead>
          </section>

          {/* ── 04  DESIGNING THE CREATOR EXPERIENCE ── */}
          <section className="cs-section">
            <SectionHead num="04" title="Designing the creator experience">
              <Body>
                I designed the end-to-end creator experience, from account creation through broadcasting and monetisation. The journey covered content uploads, going live, scheduling broadcasts, performance analytics, subscription plans, payment and billing management.
              </Body>
              <Body>
                I organised the creator dashboard around quick actions, performance information and broadcast management, with going live prioritised as the primary action. I also put WhatsApp support in the dashboard header. A creator stuck minutes before a broadcast can&apos;t wait for an email reply, so help needed to be one tap away.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.flow04a} />
            <Visual slot={SLOTS.screen04b} />
            <Visual slot={SLOTS.flow04c} />
            <Visual slot={SLOTS.flow04cLive} />
            <Visual slot={SLOTS.screen04d} />
          </section>

          {/* ── 05  DESIGNING THE LISTENER EXPERIENCE ── */}
          <section className="cs-section">
            <SectionHead num="05" title="Designing the listener experience">
              <Body>
                I designed the listener experience from scratch, focusing on content discovery, live listening and audience engagement. Listeners could discover and access broadcasts, follow or subscribe to creators, participate through live chat, share livestreams and receive notifications about creators and scheduled broadcasts.
              </Body>
              <Body>
                The experience was designed to make listening participatory: people could do more than consume audio. They could engage during a broadcast, stay connected to creators and share streams with others.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.flow05a} />
            <Visual slot={SLOTS.screen05b} />
          </section>

          {/* ── 06  DESIGNING THE ADMIN EXPERIENCE ── */}
          <section className="cs-section">
            <SectionHead num="06" title="Designing the admin experience">
              <Body>
                Alongside the creator and listener products, I designed the administrative platform used to oversee Waystream&apos;s operations. It covered user and creator management, broadcast monitoring, subscription and payment management, content management and wider platform oversight.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.screen06} />
          </section>

          {/* ── 07  PAYMENT AND SUBSCRIPTION JOURNEYS ── */}
          <section className="cs-section">
            <SectionHead num="07" title="Payment and subscription journeys">
              <Body>
                I designed end-to-end payment and subscription experiences for creators and listeners. My work covered payment method selection, entering payment details, checkout, transaction success states, subscription renewals and billing management.
              </Body>
              <Body>
                Waystream&apos;s creator model allowed creators to broadcast for 15 minutes every day at no cost. Creators who needed longer broadcasts could subscribe to a paid plan. The team wanted Waystream to be partly free, not totally free: every creator can broadcast daily without paying, and the paid plans sell one clear benefit, longer broadcasts. I designed the plans and upgrade flow around that line.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.flow07} />
          </section>

          {/* ── 08  SUPPORTING PRODUCT-LED GROWTH ── */}
          <section className="cs-section">
            <SectionHead num="08" title="Supporting product-led growth">
              <Body>
                As Waystream evolved, the product team introduced improvements intended to make adoption easier and encourage organic growth. I contributed to several initiatives across onboarding, referrals, sharing and listener engagement.
              </Body>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Reducing onboarding friction</motion.h3>
              <Body>
                When we reviewed the creator funnel in Mixpanel, only 30% of people who started onboarding finished registration. To make sign-up faster, we added Google and Apple sign-in alongside the existing form, and I designed the updated sign-up screen. Completion rose from 30% to 50%.
              </Body>
            </SectionHead>

            <Visual slot={SLOTS.flow08a} />
            <Narrative>
              <motion.div variants={fadeUp}>
                <MetricShift
                  label="Creator onboarding completion"
                  from={30}
                  to={50}
                  note="After Google and Apple sign-in were added alongside the existing registration process. The 30% starting point came from Mixpanel funnel analysis."
                />
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Redesigning the marketing website</motion.h3>
              <Body>
                The old marketing website wasn&apos;t built around what creators get from Waystream. I worked with the marketing team on a redesign that listed creator features clearly, adapted language and imagery to each region, put pricing and the free 15 minutes up front, and repeated one call to action: Start for free. Creator subscriptions rose 25% after launch.
              </Body>
            </Narrative>

            <Visual slot={SLOTS.flow08b} />
            <Narrative>
              <motion.div variants={fadeUp}>
                <MetricShift
                  label="Creator subscriptions"
                  value="+25%"
                  note="After the marketing website redesign."
                />
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Encouraging creator referrals</motion.h3>
              <Body>
                We introduced a referral programme that allowed existing creators to invite other creators to join Waystream, supporting organic user acquisition.
              </Body>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Making livestreams easier to share</motion.h3>
              <Body>
                I designed a modal that prompted creators to share their livestream when they went live, alongside a share option available within the livestream experience. These touchpoints made it easier to distribute broadcasts beyond Waystream and bring existing audiences onto the platform.
              </Body>
            </Narrative>

            <Visual slot={SLOTS.screen08c} />

            <Narrative>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Encouraging listeners to return</motion.h3>
              <Body>
                I designed creator-following, notifications when followed creators went live, and reminders for scheduled broadcasts. These features helped listeners stay connected to creators and upcoming content.
              </Body>
            </Narrative>

            <Visual slot={SLOTS.screen08d} />
          </section>

          {/* ── 09  USABILITY TESTING AND ITERATION ── */}
          <section className="cs-section">
            <SectionHead num="09" title="Usability testing and iteration">
              <Body>
                I conducted usability testing with three creators, including churches and independent creators, focusing on the experience of going live. During testing, I observed that users had difficulty navigating some broadcast controls. These observations informed design improvements, including a walkthrough that guides creators through the broadcast controls, which made the broadcasting experience easier to understand and use.
              </Body>
              <Body>
                Following the improvements, go-live-related support requests reduced significantly. Listener feedback also informed the evolution of the listening experience and helped us understand how people interacted with broadcasts and where engagement opportunities could be improved.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.screen09} />
          </section>

          {/* ── 10  CROSS-PLATFORM DESIGN AND ENGINEERING COLLABORATION ── */}
          <section className="cs-section">
            <SectionHead num="10" title="Cross-platform design and engineering collaboration">
              <Body>
                I led design across iOS, Android, web, desktop and the marketing website, working to keep the product experience coherent across different environments.
              </Body>
              <Body>
                I established Waystream&apos;s design system from the ground up, defining foundational styles and developing reusable components as the product evolved. This created a shared design language across the product, improved component reuse and gave designers and engineers a consistent reference during implementation.
              </Body>
              <Body>
                Throughout development, I worked closely with engineers to clarify design decisions, explain interaction behaviours, review implementations and resolve discrepancies between designs and the built product.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.screen10a} />
            <Visual slot={SLOTS.screen10b} />
          </section>

          {/* ── 11  OUTCOMES AND IMPACT ── */}
          <section className="cs-section">
            <SectionHead num="11" title="Outcomes and impact">
              <Body>
                The work contributed to improvements across onboarding, creator subscriptions, broadcasting usability and the overall product experience.
              </Body>
            </SectionHead>

            <motion.div variants={staggerContainer} {...inView}>
              <motion.div variants={fadeUp} className="cs-outcome-grid cs-outcome-grid--full csm-outcomes">
                <div className="cs-outcome-card">
                  <span className="csm-metric-tag csm-outcome-tag">Measured</span>
                  <span className="cs-outcome-value">30% → 50%</span>
                  <span className="cs-outcome-delta">Following improvements to the registration experience</span>
                  <span className="cs-outcome-label">Creator onboarding completion</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="csm-metric-tag csm-outcome-tag">Measured</span>
                  <span className="cs-outcome-value">+25%</span>
                  <span className="cs-outcome-delta">Following the marketing website redesign</span>
                  <span className="cs-outcome-label">Creator subscriptions</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="csm-metric-tag csm-metric-tag--qualitative csm-outcome-tag">Qualitative</span>
                  <span className="cs-outcome-value cs-outcome-value--text">Reduced support requests</span>
                  <span className="cs-outcome-delta">Go-live-related support requests reduced significantly after usability-led improvements; no percentage is available</span>
                  <span className="cs-outcome-label">Broadcasting experience</span>
                </div>
                <div className="cs-outcome-card">
                  <span className="csm-metric-tag csm-metric-tag--qualitative csm-outcome-tag">Contribution</span>
                  <span className="cs-outcome-value cs-outcome-value--text">Across the ecosystem</span>
                  <span className="cs-outcome-delta">Introduced and designed product experiences supporting creator referrals, social sharing, listener following, live chat and broadcast notifications. Established a cross-platform design system and designed the creator, listener and admin experiences across Waystream&apos;s product ecosystem.</span>
                  <span className="cs-outcome-label">Additional product contributions</span>
                </div>
              </motion.div>
            </motion.div>

            <Visual slot={SLOTS.screen11} />
          </section>

          {/* ── 12  REFLECTION ── */}
          <section className="cs-section">
            <SectionHead num="12" title="Reflection">
              <Body>
                Working on Waystream gave me the opportunity to contribute to a product across its lifecycle, from early product definition and user research to design, implementation and continuous improvement.
              </Body>
              <Body>
                If I did it again, I&apos;d set up measurement earlier. Onboarding and subscriptions have numbers because tracking was already in place. The broadcast walkthrough doesn&apos;t, so I can only say support requests fell. On my next product, I&apos;d agree how each change will be measured before it ships.
              </Body>
            </SectionHead>
          </section>

          {/* ── DISCOVERY GRID ── */}
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
    </MediaProvider>
  );
}
