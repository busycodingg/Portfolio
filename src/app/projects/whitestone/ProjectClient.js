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

export default function WhitestoneCaseStudy() {
  const principleImg = (src, alt) => (
    <div className="cs-principle-mockup">
      <motion.img
        src={src}
        alt={alt}
        style={{ borderRadius: "12px" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );

  const breakout = (src, alt) => (
    <motion.div
      className="cs-full-breakout"
      variants={fadeUp}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="cs-mockup-full no-bg">
        <motion.img
          src={src}
          alt={alt}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );

  const sectionProps = {
    className: "cs-section-grid",
    variants: staggerContainer,
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, margin: "-100px" },
  };

  return (
    <main className="case-study-container">
      <div className="layout-wrapper">
        <Navigation />

        {/* ── 01  HOOK ── */}
        <section className="case-study-hero">
          <motion.div className="cs-hero-grid" variants={staggerContainer} initial="hidden" animate="show">
            <motion.div className="cs-hero-left" variants={staggerContainer}>
              <motion.h1 className="case-study-title" variants={fadeUp}>
                <span className="cs-title-line">Whitestone</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="case-study-body-text" style={{ marginTop: "2rem" }}>
                A website and admin portal for a Lagos children&apos;s clinic, built to turn a parent&apos;s worry into a booked consultation.
              </motion.p>

              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">UX/UI Designer, Copywriter &amp; Developer</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Platform</span>
                    <span className="meta-value">Website + Web App (Admin Portal)</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Domain</span>
                    <span className="meta-value">Healthcare &amp; Child Development</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Status</span>
                    <span className="meta-value">Website live · Admin portal live for clinic staff</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Timeline</span>
                    <span className="meta-value">Jul – Sep 2026</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Scope</span>
                    <span className="meta-value">4-page public site · Admin portal</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://whitestonespecialneeds.vercel.app/"
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
                src="/projects/whitestone/hero.jpg"
                alt="Whitestone website shown on a laptop"
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
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">02  Problem framing</span>
              <h2 className="cs-section-title">Parents arrive with a worry, not a service name.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Whitestone supports neurodiverse children and vulnerable learners in Lagos, from autism and ADHD to speech delay and learning disabilities. Families come to it on site, from across Nigeria and from abroad.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                The clinic needed two things. A public site that could explain a wide range of specialised services to a parent who has noticed something about their child but doesn&apos;t yet know what to call it. And, behind it, the start of a private portal where therapists can share progress with families. I designed the structure, wrote the copy and built the site, then designed and built the portal&apos;s admin layer.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>A clinic with a broad, specialised service range needed a website that turns concern into a booked consultation, and a secure foundation for keeping families informed once therapy begins.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>A parent noticing delays in speech, attention, learning or behaviour needs reassurance and a clear next step, not clinical jargon or a long catalogue of services. Clinic staff need one place to control who can access the portal before therapists and parents join it.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {breakout("/projects/whitestone/problem.jpg", "Whitestone: why families choose the clinic")}

          <motion.div {...sectionProps} className="cs-section-grid cs-section-grid--centered">
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-statement">
                <span className="cs-card-tag">Problem statement</span>
                <blockquote className="cs-blockquote">
                  &quot;How might we help a worried parent take a first step, and give the clinic a secure way to keep families informed once therapy begins?&quot;
                </blockquote>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 03  STRUCTURING THE CONTENT ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">03  Structuring the content</span>
              <h2 className="cs-section-title">Concern first, services second.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Whitestone offers ABA therapy, psychoeducational assessments, consultations, caregiver training, IEP development, speech therapy and re-evaluations. Listed like that, it reads well to professionals and poorly to a parent. So the site starts from the concern a family recognises, and only then introduces the service.
              </motion.p>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">What shaped the structure</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>The homepage leads with six conditions families already recognise: autism, ADHD, Down syndrome, speech and language delay, learning disabilities and developmental delay. Each has its own card, so a parent finds their child before meeting any clinical terms.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>The full service list lives on its own page, for visitors who already know what they need.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>Remote consultation is stated plainly in the services copy and the FAQ. Families come from across Nigeria and abroad, and shouldn&apos;t need a phone call to find out.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 04  DESIGN PRINCIPLES ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">04  Design principles</span>
              <h2 className="cs-section-title">Three rules for turning concern into confidence.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>Start with the child, not the clinic.</h4>
                    <p>Each condition gets a full-width card with a photo, a plain-language description and a consultation button. The page speaks to one child, not a list of services.</p>
                    {principleImg("/projects/whitestone/principle-1.jpg", "Principle 01: Start with the child, not the clinic")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 02</span>
                  <div className="cs-principle-content">
                    <h4>Show the whole path before the first call.</h4>
                    <p>A six-step journey, from first enquiry and parent interview to assessment, planning, therapy and re-evaluation, shows parents what happens next. Booking stops feeling like a leap.</p>
                    {principleImg("/projects/whitestone/principle-2.jpg", "Principle 02: Show the whole path before the first call")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 03</span>
                  <div className="cs-principle-content">
                    <h4>Let credentials and warmth sit side by side.</h4>
                    <p>The About page places the founder&apos;s message and qualifications next to the clinic&apos;s values, so parents see professional credibility and a human tone in one view.</p>
                    {principleImg("/projects/whitestone/principle-3.jpg", "Principle 03: Let credentials and warmth sit side by side")}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 05  DESIGN & BUILD ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">05  Design &amp; build</span>
              <h2 className="cs-section-title">Four pages, one clear action.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The site has four pages, Home, About, Services and Blog, with a &quot;Book Free Consultation&quot; button in every header and again at the end of the Home and Services pages. The next step is never more than a click away.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                Type and colour keep a sensitive subject approachable: a bold grotesque for headlines with a single italic accent, soft pastel service cards, generous white space, and one strong blue reserved for every booking action.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                I built the site myself in Next.js and Tailwind CSS, so these decisions went live as designed, with no handoff in between. It&apos;s live and still being refined.
              </motion.p>
            </motion.div>
          </motion.div>

          {breakout("/projects/whitestone/sitemap.jpg", "Whitestone Site Map")}
        </section>

        {/* ── 06  ADMIN PORTAL ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">06  Admin portal</span>
              <h2 className="cs-section-title">The website brings families in. The portal will keep them informed.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Once therapy begins, parents want to know how it&apos;s going. The clinic plans a private portal where therapists log session feedback and parents follow their child&apos;s progress. I designed and built its foundation: the admin portal.
              </motion.p>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">What it does</motion.h3>
              <motion.p variants={fadeUp} className="cs-section-body">
                Clinic admins manage staff accounts for supervisors and therapists, add children and assign each one a therapist, and invite parents by email. They schedule recurring and one-off sessions on a shared calendar, set goals from templates, and see missed sessions, attendance and reports awaiting review at a glance.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Screen 01</span>
                  <div className="cs-principle-content">
                    <h4>Overview</h4>
                    <p>Missed sessions, reports awaiting review, today&apos;s schedule and recent sessions on one screen.</p>
                    {principleImg("/projects/whitestone/admin-dashboard.png", "Whitestone admin portal overview dashboard")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Screen 02</span>
                  <div className="cs-principle-content">
                    <h4>Staff accounts</h4>
                    <p>Every supervisor and therapist with their role and status, searchable and filterable, with accounts switched on or off from each row.</p>
                    {principleImg("/projects/whitestone/admin-staff.png", "Whitestone admin portal staff accounts list")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Screen 03</span>
                  <div className="cs-principle-content">
                    <h4>Add staff member</h4>
                    <p>Adding someone to the team takes a name, an email and a role.</p>
                    {principleImg("/projects/whitestone/admin-add-staff.png", "Whitestone admin portal add staff member form")}
                  </div>
                </div>
              </motion.div>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">How I built it</motion.h3>
              <motion.p variants={fadeUp} className="cs-section-body">
                I designed it, then built it with Claude and Claude Code, using AI-assisted development to move from design to working software quickly. It&apos;s live for clinic staff.
              </motion.p>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">What&apos;s next</motion.h3>
              <motion.p variants={fadeUp} className="cs-section-body">
                Therapist and parent portals are the next phase, built on the access controls the admin portal already manages.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 07  OUTCOME & IMPACT ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">07  Outcome &amp; impact</span>
              <h2 className="cs-section-title">A live front door, and the foundation behind it.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer} style={{ paddingTop: "39px" }}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The site gives families a clear route from first worry to booked consultation, across four pages and one consistent call to action. Behind it, a live admin portal lays the foundation for therapist and parent access.
              </motion.p>
            </motion.div>
          </motion.div>

          {breakout("/projects/whitestone/outcome.jpg", "Whitestone services page")}

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <motion.div variants={fadeUp} className="cs-outcome-grid cs-outcome-grid--full">
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">6</span>
                <span className="cs-outcome-delta">Conditions, each with its own card and consultation action</span>
                <span className="cs-outcome-label">Service Coverage</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">6-Step</span>
                <span className="cs-outcome-delta">From first enquiry to ongoing re-evaluation</span>
                <span className="cs-outcome-label">Care Journey</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value cs-outcome-value--text">On-site + Remote</span>
                <span className="cs-outcome-delta">Lagos, across Nigeria and abroad</span>
                <span className="cs-outcome-label">Reach</span>
              </div>
              <div className="cs-outcome-card">
                <span className="cs-outcome-value">1</span>
                <span className="cs-outcome-delta">Admin portal, live for clinic staff</span>
                <span className="cs-outcome-label">Client Portal</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 08  REFLECTION ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">08  Reflection</span>
              <h2 className="cs-section-title">From first sketch to live site, in one pair of hands.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Leading with the concerns families recognise, and keeping detailed services on their own page, made a broad specialist offer approachable. Building the site myself meant nothing was lost between design and code.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>Next steps</h4>
                  <p>Design and build the therapist and parent portals on top of the admin portal, so families can follow their child&apos;s progress between sessions. Keep refining the site and blog as the clinic grows, with the single consultation action consistent on every page.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 09  DISCOVERY GRID ── */}
        <section className="cs-discovery">
          <div className="discovery-header">
            <h3>More Case Studies</h3>
          </div>

          <div className="discovery-grid DiscoveryGrid-2col">
            <Link href="/projects/waystream" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/waystream/mockup-featured.jpg" alt="Waystream" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Waystream</h4>
                <span>Audio &amp; Creator Economy</span>
              </div>
            </Link>

            <Link href="/projects/contraktek" className="discovery-card">
              <div className="discovery-image">
                <Image src="/projects/contraktek/mockup-card.jpg" alt="Contraktek" width={400} height={300} />
              </div>
              <div className="discovery-info">
                <h4>Contraktek</h4>
                <span>Construction &amp; Procurement</span>
              </div>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
