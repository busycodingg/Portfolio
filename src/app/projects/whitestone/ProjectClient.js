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
                A website for a Lagos clinic supporting neurodiverse children, designed, written and built so parents who aren&apos;t sure where to start can understand the services, see the path ahead, and book a free consultation.
              </motion.p>

              <motion.div variants={fadeUp} className="case-study-meta">
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Role</span>
                    <span className="meta-value">UX/UI Designer, Copywriter &amp; Developer</span>
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
                    <span className="meta-value">Therapy &amp; Special Needs Support</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Status</span>
                    <span className="meta-value">Live, Still Being Refined</span>
                  </div>
                </div>
                <hr className="meta-divider" />
                <div className="meta-row">
                  <div className="meta-item">
                    <span className="meta-label dimmed">Audience</span>
                    <span className="meta-value">Parents, Caregivers &amp; Educators</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label dimmed">Scope</span>
                    <span className="meta-value">Structure, UX, Copy &amp; Build</span>
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
                Whitestone is a Lagos-based clinic supporting neurodiverse children and vulnerable learners, from autism and ADHD to speech delay and learning disabilities. It offers on-site care in Lagos and remote support for families across Nigeria and abroad.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                The challenge was a site that could hold a wide range of specialised services without overwhelming the person reading it: a parent who has noticed something about their child and isn&apos;t sure what to call it, what an assessment involves, or whether this clinic is the right fit. I designed the structure, wrote the on-page copy, and built the site, aiming for a tone that is warm and clear rather than clinical.
              </motion.p>

              <motion.div variants={fadeUp} className="cs-card-pair">
                <div className="cs-card">
                  <span className="cs-card-tag">Business problem</span>
                  <p>A clinic with a broad, specialised service range needed a website that explains what it offers, shows its credentials, and turns concern into a booked consultation.</p>
                </div>
                <div className="cs-card">
                  <span className="cs-card-tag">User problem</span>
                  <p>A parent noticing delays in speech, attention, learning or behaviour needs reassurance and a clear next step, not clinical jargon or a long catalogue of services.</p>
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
                  &quot;How might we help a worried parent understand the support available and take a first step, without needing to know the clinical terms first?&quot;
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
              <h2 className="cs-section-title">Organise by concern first, then by service.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Whitestone offers a lot: ABA therapy, psychoeducational assessments, consultations, caregiver training, IEP development, speech therapy and re-evaluations. A clinical list like that reads well to professionals and poorly to a parent. The structure starts from the concern a family recognises, and only then moves into the services.
              </motion.p>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">What shaped the structure</motion.h3>
              <motion.div variants={fadeUp} className="cs-insights">
                <div className="cs-insight">
                  <span className="cs-insight-num">1</span>
                  <p>The homepage leads with the conditions families already recognise (autism, ADHD, Down syndrome, speech and language delay, learning disabilities and developmental delay), each with its own card, so a parent can find their child before meeting any clinical terminology.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">2</span>
                  <p>The detailed service list lives on its own Services page, for visitors who already know what they are looking for, rather than competing with the homepage story.</p>
                </div>
                <div className="cs-insight">
                  <span className="cs-insight-num">3</span>
                  <p>Families come from Lagos, across Nigeria and abroad, so remote consultation is stated plainly in the services copy and the FAQ instead of being left for a phone call to reveal.</p>
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
              <h2 className="cs-section-title">Three rules for turning concern into confidence</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-principles">
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 01</span>
                  <div className="cs-principle-content">
                    <h4>Start with the child, not the clinic</h4>
                    <p>Each condition gets a full-width card with a photo, a plain-language description and a consultation button, so the page speaks to a specific child instead of listing clinical services.</p>
                    {principleImg("/projects/whitestone/principle-1.jpg", "Principle 01: Start with the child, not the clinic")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 02</span>
                  <div className="cs-principle-content">
                    <h4>Show the whole path before the first call</h4>
                    <p>A six-step journey, from first enquiry and parent interview through assessment, planning, therapy and ongoing re-evaluation, makes the process visible, so booking feels less like a leap into the unknown.</p>
                    {principleImg("/projects/whitestone/principle-2.jpg", "Principle 02: Show the whole path before the first call")}
                  </div>
                </div>
                <div className="cs-principle">
                  <span className="cs-principle-num">Principle 03</span>
                  <div className="cs-principle-content">
                    <h4>Let credentials and warmth sit side by side</h4>
                    <p>The About page puts the founder&apos;s message and qualifications next to the clinic&apos;s values, pairing professional credibility with the human tone parents are looking for.</p>
                    {principleImg("/projects/whitestone/principle-3.jpg", "Principle 03: Let credentials and warmth sit side by side")}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 05  DESIGN & ITERATION ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">05  Design &amp; iteration</span>
              <h2 className="cs-section-title">Four pages, one clear action</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The site is organised into Home, About, Services and Blog, with a &quot;Book Free Consultation&quot; button in the header of every page and repeated at the end of the home and services pages, so the next step is never more than a click away.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                Type and colour keep a sensitive subject approachable: a bold grotesque for headlines with a single italic accent, soft pastel service cards, generous white space, and one strong blue reserved for every booking action.
              </motion.p>
              <motion.p variants={fadeUp} className="cs-section-body">
                I built the site myself using Next.js, Tailwind CSS and TypeScript, hosted on Vercel, so the design decisions above went live exactly as intended, with no handoff in between.
              </motion.p>
            </motion.div>
          </motion.div>

          {breakout("/projects/whitestone/sitemap.jpg", "Whitestone Site Map")}

          <motion.div {...sectionProps} className="cs-section-grid cs-section-grid--centered">
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.h3 variants={fadeUp} className="cs-sub-heading">Ongoing refinement</motion.h3>
              <motion.div variants={fadeUp} className="cs-iterations">
                <div className="cs-iteration">
                  <span className="cs-iteration-tag">Status: Live, still being refined</span>
                  <p>The site is published and continues to be refined, so this case study documents its current structure and decisions rather than a finished version.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 06  ADMIN PORTAL ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">06  Admin portal</span>
              <h2 className="cs-section-title">The website brings families in. The portal is how the clinic will keep them informed.</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.p variants={fadeUp} className="cs-section-body">
                Alongside the public site, Whitestone is building a private portal where therapists log session feedback and parents follow their child&apos;s progress. I designed and built its foundation: the admin portal.
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
                I designed and built the admin portal using AI-assisted development with Claude and Claude Code. It&apos;s live for clinic staff.
              </motion.p>

              <motion.h3 variants={fadeUp} className="cs-sub-heading">What&apos;s next</motion.h3>
              <motion.p variants={fadeUp} className="cs-section-body">
                The therapist and parent portals are planned as the next phase, building on the access controls the admin portal already manages.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── 07  OUTCOME & IMPACT ── */}
        <section className="cs-section">
          <motion.div {...sectionProps}>
            <motion.div className="cs-section-left" variants={fadeUp}>
              <span className="cs-section-tag">07  Outcome &amp; impact</span>
              <h2 className="cs-section-title">A live site built around the first step</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer} style={{ paddingTop: "39px" }}>
              <motion.p variants={fadeUp} className="cs-section-body">
                The site is live and gives families a clear route from first worry to booked consultation, across four pages and a single consistent call to action. Behind the public site, a live admin portal lays the foundation for therapist and parent access.
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
                <span className="cs-outcome-value cs-outcome-value--text">Live</span>
                <span className="cs-outcome-delta">Published and still being refined</span>
                <span className="cs-outcome-label">Status</span>
              </div>
              <div className="cs-outcome-card cs-outcome-card--full">
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
              <h2 className="cs-section-title">Designing, writing and building, together</h2>
            </motion.div>
            <motion.div className="cs-section-right" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="cs-reflection-grid">
                <div className="cs-reflection-card">
                  <h4>What worked well</h4>
                  <p>Organising the homepage around the concerns families already recognise, and keeping the detailed services on their own page, kept a broad specialist offer approachable.</p>
                </div>
                <div className="cs-reflection-card">
                  <h4>Next steps</h4>
                  <p>Keep refining the site as the clinic&apos;s needs evolve, including the content and structure of the blog, while keeping the single consultation action consistent across every page. Design and build the therapist and parent portals on top of the admin portal, so families can follow their child&apos;s progress between sessions.</p>
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
