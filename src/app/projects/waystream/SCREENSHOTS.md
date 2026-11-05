# Waystream case study: screenshots

The Waystream case study (`/projects/waystream`) shows a labelled placeholder for every screen and flow in the annotated brief. To replace one:

1. Export the screen from Figma (2x, PNG, JPG or WebP).
2. Save it in `public/projects/waystream/case-study/` with the exact file name below. Any of `.png`, `.jpg` or `.webp` works.
3. Refresh the page. The placeholder is replaced automatically; no code changes needed.

Each frame keeps the ratio listed below so layouts stay stable; your image is fitted inside it without cropping. To change a ratio, caption or title, edit `src/app/projects/waystream/slots.js`.

Rules from the brief: use real Waystream exports only, no stock images or illustrative mockups. Redact payment details and personal information.

- **Screen 08C** reuses the three Screen 05C files, so you only export those once.

| Slot | Screen | File name | Frame ratio |
| --- | --- | --- | --- |
| Screen 01 | Waystream product overview | `screen-01-product-overview.png` | 2400/1032 (added, flat screens) |
| Screen 02 | The three product experiences · Creator | `screen-02a-creator-experience.png` | 4/3 |
| Screen 02 | The three product experiences · Listener | `screen-02b-listener-experience.png` | 4/3 |
| Screen 02 | The three product experiences · Administrator | `screen-02c-admin-experience.png` | 4/3 |
| Flow 04A | Creator onboarding · Sign up (with Google and Apple) | `flow-04a-1-creator-sign-up.png` | 16/10 (added) |
| Flow 04A | Creator onboarding · Into the dashboard | `flow-04a-3-into-dashboard.png` | 16/10 (added) |
| Screen 04B | Creator dashboard | `screen-04b-creator-dashboard.png` | 16/10 |
| Flow 04C | Upload, schedule and go live · Upload content | `flow-04c-1-upload-content.png` | 16/10 (added) |
| Flow 04C | Upload, schedule and go live · Schedule it | `flow-04c-3-schedule-broadcast.png` | 16/10 (added) |
| Flow 04C · Set up and go live | The desktop broadcast studio | `flow-04c-4-live-controls.png` | 2000/1003 (added from `Principle 01.png`) |
| Screen 04D | Creator subscription and billing management · Subscription plans | `screen-04d-2-subscription-plans.png` | 16/10 (added) |
| Screen 04D | Creator subscription and billing management · Billing management | `screen-04d-3-billing.png` | 16/10 (added) |
| Flow 05A | Discover and listen · Discover | `flow-05a-1-discover.png` | 9/19.5 (added) |
| Flow 05A | Discover and listen · Creator or broadcast | `flow-05a-2-creator-detail.png` | 9/19.5 (added: Lively Hub channel, top of page) |
| Flow 05A | Discover and listen · Listen live | `flow-05a-3-live-listening.png` | 9/19.5 (added) |
| Screen 05B | Live engagement · Live chat | `screen-05b-1-live-chat.png` | 9/19.5 (added) |
| Screen 05B | Live engagement · Send a gift | `screen-05b-2-gifting.png` | 9/19.5 (added) |
| Screen 05C | Following and notifications · Subscribe to a creator | `screen-05c-1-follow-creator.png` | 9/19.5 (added) |
| Screen 05C | Following and notifications · Go-live notification | `screen-05c-2-go-live-notification.png` | 9/19.5 (added) |
| Screen 06 | Admin platform · Admin dashboard | `screen-06-1-admin-dashboard.png` | 1673/1124 (added) |
| Screen 06 | Admin platform · User and creator management | `screen-06-2-user-creator-management.png` | 1994/1000 (added) |
| Screen 06 | Admin platform · Payments and subscriptions | `screen-06-4-payments-subscriptions.png` | 1994/1000 (added) |
| Flow 07 | Payment and subscription journey · Choose a plan | `flow-07-1-plan-selection.png` | 16/10 (reuses 04D plans) |
| Flow 07 | Payment and subscription journey · Payment method and details | `flow-07-2-payment-details.png` | 2000/1093 (added, email, QR code, name and address blurred) |
| Flow 07 | Payment and subscription journey · Checkout | `flow-07-3-checkout.png` | 16/10 (added: order summary) |
| Flow 07 | Payment and subscription journey · Success | `flow-07-4-success.png` | 16/10 (added) |
| Flow 07 | Payment and subscription journey · Renewal and billing | `flow-07-6-billing-renewal.png` | 16/10 (reuses 04D billing) |
| Flow 08A | Onboarding improvement: before and after · Before | `flow-08a-1-registration-before.png` | 2000/1172 (added) |
| Flow 08A | Onboarding improvement: before and after · After | `flow-08a-2-sign-in-after.png` | 2000/1172 (added) |
| Screen 08B | Referral and social-sharing touchpoints · Creator referral | `screen-08b-1-referral-invite.png` | 16/10 (added) |
| Screen 08B | Referral and social-sharing touchpoints · Share prompt on going live | `screen-08b-2-go-live-share-modal.png` | 16/10 (added) |
| Screen 08B | Referral and social-sharing touchpoints · In-stream share | `screen-08b-3-in-stream-share.png` | 16/10 (added, full desktop live page) |
| Screen 09 | Broadcast controls: tested experience and improvements · Tested | `screen-09-1-controls-tested.png` | 2000/1003 (added) |
| Screen 09 | Broadcast controls: tested experience and improvements · Improved | `screen-09-2-controls-improved.png` | 2000/1003 (added) |
| Screen 10A | Design system foundations and components · Typography | `screen-10a-1-typography.png` | 1387/1770 (added) |
| Screen 10A | Design system foundations and components · Colour | `screen-10a-2-colour.png` | 1387/1770 (added, built from colours sampled from real exports) |
| Screen 10A | Design system foundations and components · Components and states | `screen-10a-3-components.png` | 2000/442 (added) |
| Screen 10B | Cross-platform product consistency · Mobile | `screen-10b-1-mobile.png` | 9/19.5 (added) |
| Screen 10B | Cross-platform product consistency · Desktop | `screen-10b-3-desktop.png` | 2000/1003 (added, desktop studio) |
| Screen 11 | Outcome recap | `screen-11-outcome-image.png` | 3/2 (added, creator dashboard) |
