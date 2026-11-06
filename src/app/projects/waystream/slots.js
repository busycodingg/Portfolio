// Every SCREEN / FLOW callout from the annotated Waystream case study.
//
// To add a real screenshot, export it from Figma and save it in
// public/projects/waystream/case-study/ using the item's `file` name
// (.png, .jpg or .webp). The page picks it up automatically; until then a
// labelled placeholder is shown. `ratio` sets the frame size so layouts stay
// stable; real images are fitted inside it without cropping.
//
// `show` is the brief's "What to show" note: it appears on the placeholder
// only, never on a real image. `caption` is the reader-facing text.

const DESKTOP = "16 / 10";
const MOBILE = "9 / 19.5";
const WIDE = "16 / 9";

export const SLOTS = {
  screen01: {
    label: "Screen 01",
    title: "Waystream product overview",
    layout: "single",
    show: "A curated set of actual Waystream screens across mobile, web and desktop. One strong hero device composition, not a crowded collage.",
    items: [
      { file: "screen-01-product-overview", ratio: "2400 / 1032", alt: "The same Waystream live broadcast in the desktop studio and the mobile app" },
    ],
  },

  screen02: {
    label: "Screen 02",
    title: "The three product experiences",
    layout: "grid",
    columns: 3,
    caption: "One platform, three experiences: creators broadcast, listeners discover and take part, administrators keep the platform running.",
    show: "One creator screen, one listener screen and one admin screen, using actual product screens.",
    items: [
      { file: "screen-02a-creator-experience", ratio: "3 / 2", title: "Creator", alt: "Waystream creator experience" },
      { file: "screen-02b-listener-experience", ratio: "3 / 2", title: "Listener", alt: "Waystream listener experience" },
      { file: "screen-02c-admin-experience", ratio: "3 / 2", title: "Administrator", alt: "Waystream admin experience" },
    ],
  },

  flow04a: {
    label: "Flow 04A",
    title: "Creator onboarding",
    layout: "sequence",
    show: "Creator sign-up and the transition into the creator dashboard.",
    items: [
      { file: "flow-08a-1-registration-before", ratio: DESKTOP, title: "Sign up", caption: "Create an account with a username, email and password", alt: "Creator sign-up with username, email and password" },
      { file: "flow-04a-3-into-dashboard", ratio: DESKTOP, title: "Into the dashboard", caption: "A welcome to Waystream Studio, with Go live offered straight away", alt: "Welcome to Waystream Studio modal over the creator dashboard" },
    ],
  },

  screen04b: {
    label: "Screen 04B",
    title: "Creator dashboard",
    layout: "single",
    caption: "Going live is the primary action. Performance information and broadcast management sit alongside it.",
    show: "The main creator dashboard, with callouts for the go-live action, analytics/performance area, broadcast management and WhatsApp support entry point.",
    // x / y place each numbered marker on the screenshot (% of width / height)
    annotations: [
      { text: "Go live: the primary action on the dashboard", x: 46.6, y: 15.6 },
      { text: "Performance information at a glance", x: 21.1, y: 15.6 },
      { text: "Broadcast management: upcoming events", x: 32.8, y: 55.2 },
      { text: "WhatsApp support, added later (see Phase 4)", x: 75.8, y: 4.7 },
    ],
    items: [
      { file: "screen-04b-creator-dashboard", ratio: "3 / 2", alt: "Waystream creator dashboard" },
    ],
  },

  flow04c: {
    label: "Flow 04C",
    title: "Upload, schedule and go live",
    layout: "sequence",
    show: "Content upload and scheduling. Broadcast setup and live controls are shown in the studio view that follows.",
    items: [
      { file: "flow-04c-1-upload-content", ratio: DESKTOP, title: "Upload content", caption: "Drag and drop audio in three stages: upload, audio details and additional information", alt: "Upload audios modal with drag-and-drop upload" },
      { file: "flow-04c-3-schedule-broadcast", ratio: DESKTOP, title: "Schedule it", caption: "Create an event with a category, time zone, dates and schedule, or make it recurring", alt: "Create event form for scheduling a broadcast" },
    ],
  },

  flow04d: {
    label: "Flow 04D · Set up and go live",
    title: "The desktop broadcast studio",
    layout: "single",
    caption: "Creators set up and run a broadcast from one screen: audio sources and quality, category, the live timer and controls, sharing and live chat.",
    show: "Broadcast setup and live controls on desktop.",
    annotations: [
      { text: "Set up audio: mic source, playlist audio and output quality, with live levels", x: 14.5, y: 21.1 },
      { text: "Choose the category or create an event", x: 50.8, y: 20.3 },
      { text: "Live timer with stop and broadcast controls", x: 64.5, y: 67 },
      { text: "Share to WhatsApp, Facebook and X, or copy the link", x: 79, y: 21.3 },
      { text: "Live chat and listener count", x: 77.5, y: 40.2 },
      { text: "WhatsApp support in the header, added later", x: 81.6, y: 7.8 },
    ],
    items: [
      { file: "flow-04c-4-live-controls", ratio: "2000 / 1003", alt: "Waystream desktop broadcast studio during a live broadcast" },
    ],
  },

  screen06b: {
    label: "Screen 06B",
    title: "Creator subscription and billing management",
    layout: "grid",
    columns: 2,
    show: "Subscription plan selection and billing management. Keep payment details and personal information anonymised.",
    items: [
      { file: "screen-04d-2-subscription-plans", ratio: DESKTOP, title: "Subscription plans", alt: "Subscription plan selection" },
      { file: "screen-04d-3-billing", ratio: DESKTOP, title: "Billing management", alt: "Billing management" },
    ],
  },

  flow04e: {
    label: "Flow 04E",
    title: "Discover and listen",
    layout: "sequence",
    device: "mobile",
    show: "Listener home or discovery screen and the live listening screen.",
    items: [
      { file: "flow-05a-1-discover", ratio: MOBILE, title: "Discover", caption: "Browse by genre in a full-screen feed, with likes, comments and sharing", alt: "Listener home feed with genre filters" },
      { file: "flow-05a-2-creator-detail", ratio: MOBILE, title: "Creator channel", caption: "A creator's own page: subscribe, browse past audio and playlists, or join the live broadcast", alt: "Lively Hub channel page with a live broadcast" },
      { file: "flow-05a-3-live-listening", ratio: MOBILE, title: "Listen live", caption: "Tune in live with playback controls, likes, comments and one-tap subscribe", alt: "Listener live streaming screen for Lively Hub" },
    ],
  },

  screen04f: {
    label: "Screen 04F",
    title: "Live engagement",
    layout: "grid",
    columns: 1,
    device: "mobile",
    caption: "Listening is participatory: listeners chat with each other and the creator without leaving the live stream.",
    show: "Live chat, share control and other engagement features, with the live audio context clear.",
    items: [
      { file: "screen-05b-1-live-chat", ratio: MOBILE, title: "Live chat", caption: "Listeners and the creator talk in real time", alt: "Live chat during a Lively Hub broadcast" },
    ],
  },

  screen04g: {
    label: "Screen 04G",
    title: "Following and notifications",
    layout: "grid",
    columns: 2,
    device: "mobile",
    compact: true,
    show: "Subscribe to a creator and go-live notification. These use the screen-05c files.",
    items: [
      { file: "screen-05c-1-follow-creator", ratio: MOBILE, title: "Subscribe to a creator", alt: "Listener subscribed to Lively Hub" },
      { file: "screen-05c-2-go-live-notification", ratio: MOBILE, title: "Go-live notification", alt: "Go-live notification" },
    ],
  },

  screen08a: {
    label: "Screen 08A",
    title: "Admin platform",
    layout: "feature-grid",
    show: "Admin dashboard plus representative management screens.",
    items: [
      { file: "screen-06-1-admin-dashboard", ratio: "1673 / 1124", title: "Admin dashboard", caption: "Platform activity at a glance: users, creators, events, revenue, daily active users, and popular creators and categories", alt: "Waystream admin dashboard" },
      { file: "screen-06-4-payments-subscriptions", ratio: "1994 / 1000", title: "Payments and subscriptions", caption: "Revenue in NGN and USD, and every subscription payment", alt: "Admin payments and subscriptions table" },
    ],
  },

  flow06a: {
    label: "Flow 06A",
    title: "Payment and subscription journey",
    layout: "sequence",
    columns: 6,
    show: "Plan selection, order summary, payment method, success state, and renewal or billing management. Redact real payment details.",
    items: [
      { file: "flow-07-1-plan-selection", ratio: DESKTOP, span: 2, title: "Choose a plan", caption: "Free, Lite, Pro or 24/7, billed daily to yearly in local currency", alt: "Plan selection" },
      { file: "flow-07-3-checkout", ratio: DESKTOP, span: 2, title: "Order summary", caption: "Price, VAT and gateway charges itemised before paying, with the next charge date", alt: "Order summary before payment" },
      { file: "flow-07-2-payment-details", ratio: DESKTOP, span: 2, title: "Choose how to pay", caption: "Checkout through Paystack with local options: card, transfer, bank, USSD, OPay or Zap. Local options like bank transfer and USSD answered a frustration from research: church admins couldn't pay with dollar cards.", alt: "Payment method selection in the Paystack checkout, with personal details blurred" },
      { file: "flow-07-4-success", ratio: DESKTOP, span: 3, title: "Payment successful", caption: "A clear confirmation that the payment went through, with one action to continue", alt: "Payment successful confirmation" },
      { file: "flow-07-6-billing-renewal", ratio: DESKTOP, span: 3, title: "Renewal and billing", caption: "Current plan, expiry date and saved payment method in one place", alt: "Subscription renewal and billing management" },
    ],
  },

  flow07a: {
    label: "Flow 07A",
    title: "Onboarding improvement: before and after",
    layout: "compare",
    show: "The previous registration experience and the updated sign-in experience with Google and Apple.",
    items: [
      { file: "flow-08a-1-registration-before", ratio: "2000 / 1172", title: "Before", caption: "Registration with username, email and password only", alt: "Previous registration experience" },
      { file: "flow-08a-2-sign-in-after", ratio: "2000 / 1172", title: "After", caption: "Google and Apple sign-in added above the same form", alt: "Updated sign-in experience with Google and Apple" },
    ],
  },

  flow07b: {
    label: "Flow 07B",
    title: "Marketing website: before and after",
    layout: "compare",
    show: "The previous marketing homepage and the redesigned homepage.",
    items: [
      { file: "flow-08b-1-website-before", ratio: "408 / 219", title: "Before", caption: "The previous homepage", alt: "The previous Waystream marketing homepage" },
      { file: "flow-08b-2-website-after", ratio: "408 / 219", title: "After", caption: "The redesigned homepage, built around what creators get", alt: "The redesigned Waystream marketing homepage" },
      { file: "flow-08b-3-website-pricing", ratio: "408 / 219", wide: true, caption: "Pricing and the free 15 minutes shown up front", alt: "Waystream pricing plans, with the free Talk plan's 15-minute daily limit" },
    ],
  },

  screen07c: {
    label: "Screen 07C",
    title: "Referral and social-sharing touchpoints",
    layout: "grid",
    columns: 2,
    show: "Referral invitation screen and the go-live sharing modal.",
    items: [
      { file: "screen-08b-1-referral-invite", ratio: DESKTOP, title: "Creator referral", caption: "Share a referral link on WhatsApp, Facebook or X, then track invites, joins and earnings", alt: "Creator referral link and referral tracking" },
      { file: "screen-08b-2-go-live-share-modal", ratio: DESKTOP, title: "Share prompt on going live", caption: "The moment a creator goes live, they are prompted to share the stream", alt: "You are live prompt with share options" },
    ],
  },

  screen07d: {
    label: "Screen 07D",
    title: "Listener giving",
    layout: "grid",
    columns: 1,
    device: "mobile",
    show: "The listener gifting sheet during a live broadcast.",
    items: [
      { file: "screen-05b-2-gifting", ratio: MOBILE, title: "Send a gift", caption: "Preset gifts from ₦500 to ₦50,000, or a custom amount, sent during a live broadcast", alt: "Listener sending a gift to a creator during a live broadcast" },
    ],
  },

  screen05: {
    label: "Screen 05",
    title: "Broadcast controls: tested experience and improvements",
    layout: "compare",
    show: "The tested live-broadcast controls and the improved version with the walkthrough, with concise annotations of the friction observed and what changed.",
    items: [
      { file: "screen-09-1-controls-tested", ratio: "2000 / 1003", title: "Tested", caption: "Some broadcast controls were hard to navigate", alt: "Live broadcast controls as tested" },
      { file: "screen-09-2-controls-improved", ratio: "2000 / 1003", title: "Improved", caption: "A step-by-step walkthrough guides creators through each control, starting with the mic source", alt: "Improved live broadcast controls with a walkthrough" },
    ],
  },

  screen08b: {
    label: "Screen 08B",
    title: "Design system foundations and components",
    layout: "foundations",
    show: "Colour and typography styles, spacing or layout foundations, and a selection of representative components and states.",
    items: [
      { file: "screen-10a-1-typography", lead: true, ratio: "1387 / 1770", title: "Typography", caption: "Sofia Pro type scales for desktop and mobile: regular and bold headlines and body styles, each with set sizes and line heights.", alt: "Waystream typography styles for desktop and mobile, showing headline and body sizes in Sofia Pro" },
      { file: "screen-10a-2-colour", lead: true, ratio: "1387 / 1770", title: "Colour", caption: "A dark, content-first palette: one orange primary for actions and active states, layered neutral surfaces, and blue and green for guidance and success.", alt: "Waystream colour palette: primary orange and hover, neutral surfaces and text, guidance blue and success green" },
      { file: "screen-10a-3-components", ratio: "2000 / 442", title: "Components and states", caption: "Text fields (default, focus, success, error, disabled and multiline), primary, secondary and text buttons across default, hover, active and disabled, plus checkboxes, radios, toggles and sliders.", alt: "Waystream design system sheet showing text field, button, checkbox, radio, toggle and slider components in their states" },
    ],
  },

  screen08c: {
    label: "Screen 08C",
    title: "Cross-platform product consistency: going live",
    layout: "platforms",
    caption: "The same Panel Session broadcast, live on mobile and desktop. Both share the same structure, broadcast details, timer and controls, but each is shaped around its device: mobile puts one large control within thumb reach, while desktop shows the whole studio on a single screen.",
    items: [
      { file: "screen-10b-1-mobile", ratio: MOBILE, title: "Mobile", caption: "One central start and stop control, with edit, playlist, mic and audio settings beside it, and going live from a scheduled event.", alt: "Soul Beats Panel Session live on mobile with timer, listener stats and broadcast controls" },
      { file: "screen-10b-3-desktop", ratio: "2000 / 1003", title: "Desktop", caption: "The full studio: mic, playlist and output levels, event selection, link sharing and live chat, all visible at once.", alt: "Live broadcast in the desktop studio with audio levels, controls, sharing and live chat" },
    ],
  },

  screen09: {
    label: "Screen 09",
    title: "Outcome recap",
    layout: "single",
    caption: "The creator dashboard, where onboarding leads and where creators run their broadcasts and subscriptions: the two journeys behind the measured results above.",
    items: [
      { file: "screen-11-outcome-image", ratio: "3 / 2", alt: "Waystream creator dashboard" },
    ],
  },
};
