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

                <motion.p variants={fadeUp} className="cs-blockquote csm-hero-summary">
                  Founding Design Lead. I designed Waystream from the founders&apos; idea in 2022 to a live product for creators, listeners and administrators on iOS, Android, web and desktop. Creator onboarding completion rose from 30% to 50%, and creator subscriptions grew 25% after the website redesign.
                </motion.p>
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
                <motion.p variants={fadeUp} className="csm-item-caption">
                  Product screens show sample data.
                </motion.p>
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
                When I joined in May 2022, Waystream was an idea. There were no designs and no product. I designed it from the ground up, working with the founders, the product team and engineers.
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
                Creators could go live, but growing and earning was harder than it should have been. Many left sign-up before finishing, the audiences they built on WhatsApp listened somewhere else, and paying for tools often needed a dollar card. As Waystream moved toward self-service growth, the product also had to serve three groups with very different needs.
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
              <Body>
                Two findings shaped the product. Creators already promoted their streams on WhatsApp, but sent listeners elsewhere to listen, so the audience they built never landed anywhere of their own. And many creators wanted to go live from a phone, without a technical team. That&apos;s why sharing to WhatsApp is built into going live, and why the mobile app puts one large broadcast control within thumb reach.
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

          {/* ── 04  PHASE 1 · BUILDING THE FIRST VERSION ── */}
          <section className="cs-section">
            <SectionHead num="04" title="Phase 1 · Building the first version (2022)">
              <Body>
                Creators need listeners and listeners need creators, so both sides had to work on day one. I designed the creator and listener experiences together for the first launch. The screens show these experiences as they look today.
              </Body>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Creator experience</motion.h3>
              <Body>
                I designed the end-to-end creator experience, from account creation through broadcasting and monetisation. The journey covered content uploads, going live, scheduling broadcasts and performance analytics.
              </Body>
              <Body>
                I organised the creator dashboard around quick actions, performance information and broadcast management, with going live prioritised as the primary action. I also put WhatsApp support in the dashboard header. A creator stuck minutes before a broadcast can&apos;t wait for an email reply, so help needed to be one tap away.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.flow04a} />
            <Visual slot={SLOTS.screen04b} />
            <Visual slot={SLOTS.flow04c} />
            <Visual slot={SLOTS.flow04d} />
            <Narrative>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Listener experience</motion.h3>
              <Body>
                I designed the listener experience from scratch, focusing on content discovery, live listening and audience engagement. Listeners could discover and access broadcasts, follow or subscribe to creators, participate through live chat, share livestreams and receive notifications about creators and scheduled broadcasts.
              </Body>
              <Body>
                The experience was designed to make listening participatory: people could do more than consume audio. They could engage during a broadcast, stay connected to creators and share streams with others.
              </Body>
            </Narrative>
            <Visual slot={SLOTS.flow04e} />
            <Visual slot={SLOTS.screen04f} />
            <Narrative>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Testing before launch</motion.h3>
              <Body>
                Before launch, I tested the going-live experience with three creators, including churches and independent creators. Some found parts of the broadcast controls hard to navigate.
              </Body>
            </Narrative>
          </section>

          {/* ── 05  PHASE 2 · LAUNCHING FREE AND LEARNING ── */}
          <section className="cs-section">
            <SectionHead num="05" title="Phase 2 · Launching free and learning">
              <Body>
                Waystream launched in 2022, free for creators and listeners for its first months.
              </Body>
              <Body>
                Once real creators started broadcasting, support requests about going live showed the problem from testing hadn&apos;t gone away: the broadcast controls weren&apos;t easy enough to learn. I designed a walkthrough that guides creators through each control, starting with the mic source. After it shipped, go-live support requests fell significantly.
              </Body>
              <Body>
                Listener feedback also informed the evolution of the listening experience and helped us understand how people interacted with broadcasts and where engagement opportunities could be improved.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.screen05} />
          </section>

          {/* ── 06  PHASE 3 · MAKING MONEY ── */}
          <section className="cs-section">
            <SectionHead num="06" title="Phase 3 · Making money">
              <Body>
                Once creators were broadcasting regularly, Waystream introduced subscriptions.
              </Body>
              <Body>
                I designed end-to-end payment and subscription experiences for creators and listeners. My work covered payment method selection, entering payment details, checkout, transaction success states, subscription renewals and billing management.
              </Body>
              <Body>
                Waystream&apos;s creator model allowed creators to broadcast for 15 minutes every day at no cost. Creators who needed longer broadcasts could subscribe to a paid plan. The team wanted Waystream to be partly free, not totally free: every creator can broadcast daily without paying, and the paid plans sell one clear benefit, longer broadcasts. I designed the plans and upgrade flow around that line.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.flow06a} />
            <Visual slot={SLOTS.screen06b} />
          </section>

          {/* ── 07  PHASE 4 · GROWING THE PRODUCT ── */}
          <section className="cs-section">
            <SectionHead num="07" title="Phase 4 · Growing the product">
              <Body>
                As Waystream evolved, the product team introduced improvements intended to make adoption easier and encourage organic growth. I designed the product side of several initiatives across onboarding, referrals, sharing and listener engagement.
              </Body>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Reducing onboarding friction</motion.h3>
              <Body>
                When we reviewed the creator funnel in Mixpanel, only 30% of people who started onboarding finished registration. To make sign-up faster, we added Google and Apple sign-in alongside the existing form, and I designed the updated sign-up screen. Completion rose from 30% to 50%.
              </Body>
            </SectionHead>

            <Visual slot={SLOTS.flow07a} />
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

            <Visual slot={SLOTS.flow07b} />
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
                We introduced a referral programme so existing creators could invite other creators to Waystream. I designed the referral flow: a shareable link for WhatsApp, Facebook and X, with invites, joins and earnings tracked in one place.
              </Body>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">Making livestreams easier to share</motion.h3>
              <Body>
                I designed a modal that prompted creators to share their livestream when they went live, alongside a share option available within the livestream experience. These touchpoints made it easier to distribute broadcasts beyond Waystream and bring existing audiences onto the platform.
              </Body>
            </Narrative>

            <Visual slot={SLOTS.screen07c} />

            <Narrative>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Encouraging listeners to return</motion.h3>
              <Body>
                I designed creator-following, notifications when followed creators went live, and reminders for scheduled broadcasts. These features helped listeners stay connected to creators and upcoming content.
              </Body>
            </Narrative>

            <Visual slot={SLOTS.screen07d} />

            <Narrative>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Letting listeners support creators</motion.h3>
              <Body>
                As the audience grew, we added gifting, so listeners could support the creators they love during a live broadcast. I designed the gifting flow.
              </Body>
            </Narrative>

            <Visual slot={SLOTS.screen07e} />
          </section>

          {/* ── 08  WHAT GREW ALONGSIDE ── */}
          <section className="cs-section">
            <SectionHead num="08" title="What grew alongside">
              <Body>
                Some work didn&apos;t belong to one phase. It grew with the product the whole way through.
              </Body>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Admin platform</motion.h3>
              <Body>
                Alongside the creator and listener products, I designed the administrative platform used to oversee Waystream&apos;s operations. It covered user and creator management, broadcast monitoring, subscription and payment management, content management and wider platform oversight.
              </Body>
            </SectionHead>
            <Visual slot={SLOTS.screen08a} />
            <Narrative>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Design system and cross-platform design</motion.h3>
              <Body>
                I led design across iOS, Android, web, desktop and the marketing website, working to keep the product experience coherent across different environments.
              </Body>
              <Body>
                I established Waystream&apos;s design system from the ground up, defining foundational styles and developing reusable components as the product evolved. This created a shared design language across the product, improved component reuse and gave designers and engineers a consistent reference during implementation.
              </Body>
              <Body>
                Throughout development, I worked closely with engineers to clarify design decisions, explain interaction behaviours, review implementations and resolve discrepancies between designs and the built product.
              </Body>
            </Narrative>
            <Visual slot={SLOTS.screen08b} />
            <Visual slot={SLOTS.screen08c} />
            <Narrative>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Growing the design team</motion.h3>
              <Body>
                As the product grew, junior designers joined the team. I mentored them through design critiques, Figma best practices and how to use the design system.
              </Body>
            </Narrative>
          </section>

          {/* ── 09  OUTCOMES AND IMPACT ── */}
          <section className="cs-section">
            <SectionHead num="09" title="Outcomes and impact">
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

            <Visual slot={SLOTS.screen09} />
          </section>

          {/* ── 10  REFLECTION ── */}
          <section className="cs-section">
            <SectionHead num="10" title="Reflection">
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
