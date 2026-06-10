import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/grindon/privacy-policy')({
  head: () => ({
    meta: [
      { title: 'GrindOn — Privacy Policy | Eonrize Forge Pvt Ltd' },
      {
        name: 'description',
        content:
          'Privacy Policy for GrindOn, a daily appreciation app by Eonrize Forge Pvt Ltd.',
      },
    ],
  }),
  component: GrindOnPrivacyPolicy,
})

const EFFECTIVE_DATE = 'June 10, 2026'

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>
          Welcome to <strong>GrindOn</strong> ("the App"), a daily appreciation
          app developed and published by{' '}
          <strong>Eonrize Forge Pvt Ltd</strong> ("we", "our", or "us").
          GrindOn is designed to help users acknowledge and appreciate their
          daily efforts, progress, consistency, and personal achievements
          through scheduled reminders and positive reinforcement.
        </p>
        <p>
          <strong>GrindOn is a daily appreciation and self-reflection
          application.</strong> It is not a medical, healthcare, mental health,
          therapy, fitness, or counseling service. The App does not provide
          medical advice, psychological treatment, diagnosis, or any form of
          therapeutic care.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect
          information when you use GrindOn. By installing or using the App, you
          agree to the practices described in this policy. If you do not agree,
          please discontinue use of the App.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p>
          We collect only the minimum information necessary to provide and
          improve the App's functionality. We do not sell your personal data to
          third parties.
        </p>
        <h4>Information Stored Locally on Your Device</h4>
        <ul>
          <li>User preferences and app settings</li>
          <li>Notification schedules and reminder times you configure</li>
          <li>Streak information and consistency records</li>
          <li>Daily progress and achievement data you choose to log</li>
        </ul>
        <h4>Information Collected Automatically</h4>
        <ul>
          <li>
            <strong>Usage data</strong> — general app interactions, feature
            usage, and session information collected via Firebase Analytics
          </li>
          <li>
            <strong>Crash and diagnostic data</strong> — error logs and
            technical crash reports collected via Firebase Crashlytics to help
            us identify and fix issues
          </li>
          <li>
            <strong>Advertising identifiers</strong> — your device's advertising
            ID may be used by Google AdMob to display relevant advertisements in
            the free version of the App
          </li>
        </ul>
        <h4>Information We Do NOT Collect</h4>
        <ul>
          <li>Your name, email address, or contact information (unless you contact us directly)</li>
          <li>Health, medical, or biometric data</li>
          <li>Location data</li>
          <li>Contacts or calendar data</li>
          <li>Financial payment details (payments are handled entirely by Google Play)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    content: (
      <>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            <strong>App functionality</strong> — to deliver scheduled
            appreciation reminders, voice notifications, and personalized
            settings
          </li>
          <li>
            <strong>Streaks and progress tracking</strong> — to maintain your
            consistency records and display your achievements within the App
          </li>
          <li>
            <strong>App improvement</strong> — to analyse usage patterns,
            diagnose crashes, and improve the App's performance and user
            experience
          </li>
          <li>
            <strong>Advertising</strong> — to display advertisements in the
            free version of the App via Google AdMob
          </li>
          <li>
            <strong>Customer support</strong> — to respond to queries or
            support requests you send us directly
          </li>
        </ul>
        <p>
          We do not use your information to make automated decisions that
          significantly affect you, to build user profiles for sale to
          advertisers, or for any purpose unrelated to operating and improving
          GrindOn.
        </p>
      </>
    ),
  },
  {
    id: 'notifications',
    title: 'Notifications and Reminders',
    content: (
      <>
        <p>
          GrindOn allows you to schedule local notifications and appreciation
          reminders at times of your choosing. These notifications are generated
          and delivered entirely on your device — they are not sent from our
          servers and do not involve transmitting your personal information to
          us or any third party.
        </p>
        <p>
          You can enable or disable notifications at any time through the App's
          settings or your device's system notification settings. Disabling
          notifications will not affect other App functionality.
        </p>
      </>
    ),
  },
  {
    id: 'advertising',
    title: 'Advertising',
    content: (
      <>
        <p>
          The free version of GrindOn may display advertisements provided by{' '}
          <strong>Google AdMob</strong>. AdMob may collect and use your device's
          advertising identifier (GAID on Android) and other technical
          information to serve ads that may be relevant to your interests.
        </p>
        <p>
          Google AdMob's data practices are governed by Google's Privacy Policy.
          We encourage you to review it at{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy
          </a>
          .
        </p>
        <p>
          You may opt out of interest-based advertising by adjusting your
          device's advertising settings (e.g., "Opt out of Ads Personalisation"
          on Android) or by upgrading to GrindOn Premium, which removes
          advertisements.
        </p>
      </>
    ),
  },
  {
    id: 'premium-subscriptions',
    title: 'Premium Subscriptions and Payments',
    content: (
      <>
        <p>
          GrindOn may offer optional premium subscriptions that unlock
          additional features. All premium purchases and subscription billing
          are processed exclusively through{' '}
          <strong>Google Play Billing</strong>. We do not directly process,
          store, or have access to your payment card details or financial
          information.
        </p>
        <p>
          Your purchase history and subscription status are managed by Google
          Play. For billing questions, cancellations, or refund requests,
          please refer to Google Play's support or your Google account
          settings.
        </p>
      </>
    ),
  },
  {
    id: 'analytics-crash-reporting',
    title: 'Analytics and Crash Reporting',
    content: (
      <>
        <p>
          We use the following Firebase services provided by Google to maintain
          and improve the App:
        </p>
        <ul>
          <li>
            <strong>Firebase Analytics</strong> — collects anonymised usage data
            such as feature interactions and session durations to help us
            understand how users engage with the App
          </li>
          <li>
            <strong>Firebase Crashlytics</strong> — collects crash reports and
            diagnostic information to help us identify, prioritise, and fix
            technical issues
          </li>
        </ul>
        <p>
          The data collected by these services is processed in accordance with
          Google's Privacy Policy. Firebase Analytics data is aggregated and
          anonymised wherever possible. Crashlytics reports may contain limited
          device information (e.g., OS version, device model) but do not
          contain information that directly identifies you.
        </p>
        <p>
          You may opt out of analytics collection by adjusting the App's
          settings where this option is available, or through your device's
          privacy settings.
        </p>
      </>
    ),
  },
  {
    id: 'data-storage-security',
    title: 'Data Storage and Security',
    content: (
      <>
        <p>
          Most data generated by GrindOn — including your preferences,
          schedules, and streak records — is stored locally on your device and
          is not transmitted to our servers.
        </p>
        <p>
          Analytics and crash data processed by Firebase are stored on Google's
          secure infrastructure. We take commercially reasonable measures to
          protect information from unauthorised access, alteration, disclosure,
          or destruction. However, no method of transmission or storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>
        <p>
          If you uninstall the App, locally stored data will be removed from
          your device. Analytics data retained by third-party services is
          subject to their respective data retention policies.
        </p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    title: "Children's Privacy",
    content: (
      <>
        <p>
          GrindOn is intended for users aged <strong>13 and older</strong>. We
          do not knowingly collect personal information from children under the
          age of 13. If you are a parent or guardian and believe your child
          under 13 has provided personal information through the App, please
          contact us at{' '}
          <a href="mailto:support@eonrizeforge.com">support@eonrizeforge.com</a>{' '}
          and we will take prompt steps to delete such information.
        </p>
        <p>
          In jurisdictions where the minimum age for digital consent is higher
          (e.g., 16 in certain EU countries), users below that age should only
          use the App with verifiable parental or guardian consent.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    content: (
      <>
        <p>
          GrindOn integrates with or links to the following third-party
          services. Each service operates under its own privacy policy, and we
          encourage you to review them:
        </p>
        <div className="third-party-table">
          {[
            {
              service: 'Google AdMob',
              purpose: 'In-app advertising (free version)',
              link: 'https://policies.google.com/privacy',
            },
            {
              service: 'Firebase Analytics',
              purpose: 'Usage analytics and reporting',
              link: 'https://firebase.google.com/support/privacy',
            },
            {
              service: 'Firebase Crashlytics',
              purpose: 'Crash and error reporting',
              link: 'https://firebase.google.com/support/privacy',
            },
            {
              service: 'Google Play Billing',
              purpose: 'Premium subscription payments',
              link: 'https://policies.google.com/privacy',
            },
          ].map(({ service, purpose, link }) => (
            <div key={service} className="third-party-row">
              <div className="third-party-name">{service}</div>
              <div className="third-party-purpose">{purpose}</div>
              <a href={link} target="_blank" rel="noopener noreferrer" className="third-party-link">
                Privacy Policy ↗
              </a>
            </div>
          ))}
        </div>
        <p>
          We are not responsible for the privacy practices of these third
          parties. Their collection and use of information is governed
          exclusively by their own policies.
        </p>
      </>
    ),
  },
  {
    id: 'user-rights',
    title: 'User Rights and Choices',
    content: (
      <>
        <p>You have the following rights and options regarding your data:</p>
        <ul>
          <li>
            <strong>Access and deletion</strong> — since most data is stored
            locally on your device, you can review or delete it by uninstalling
            the App or clearing App data through your device settings
          </li>
          <li>
            <strong>Notification control</strong> — enable or disable all
            reminders and notifications at any time in the App or your device
            settings
          </li>
          <li>
            <strong>Advertising opt-out</strong> — limit ad personalisation via
            your device's advertising settings
          </li>
          <li>
            <strong>Analytics opt-out</strong> — where available, you may
            disable analytics collection within the App's settings
          </li>
          <li>
            <strong>Contact us</strong> — for any privacy-related requests or
            concerns, reach us at{' '}
            <a href="mailto:support@eonrizeforge.com">support@eonrizeforge.com</a>
          </li>
        </ul>
        <p>
          If you are located in the European Economic Area, the United Kingdom,
          or California, you may have additional rights under applicable data
          protection laws (such as GDPR or CCPA). Please contact us to exercise
          those rights.
        </p>
      </>
    ),
  },
  {
    id: 'policy-changes',
    title: 'Changes to This Privacy Policy',
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in the App, applicable laws, or our data practices. When we make
          material changes, we will update the "Effective Date" at the top of
          this page and, where appropriate, notify you through the App or by
          other reasonable means.
        </p>
        <p>
          We encourage you to review this policy periodically. Continued use of
          GrindOn after any changes constitutes your acceptance of the revised
          policy. The most current version is always available at{' '}
          <a href="https://eonrizeforge.com/grindon/privacy-policy">
            https://eonrizeforge.com/grindon/privacy-policy
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or your data, please contact us:
        </p>
        <div className="contact-block">
          <div className="contact-row">
            <span className="contact-label">Company</span>
            <span>Eonrize Forge Pvt Ltd</span>
          </div>
          <div className="contact-row">
            <span className="contact-label">Email</span>
            <a href="mailto:support@eonrizeforge.com">support@eonrizeforge.com</a>
          </div>
          <div className="contact-row">
            <span className="contact-label">Website</span>
            <a href="https://eonrizeforge.com" target="_blank" rel="noopener noreferrer">
              https://eonrizeforge.com
            </a>
          </div>
        </div>
        <p>
          We aim to respond to all privacy-related inquiries within{' '}
          <strong>7 business days</strong>.
        </p>
      </>
    ),
  },
]

function GrindOnPrivacyPolicy() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      <style>{`
        .pp-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(5,5,8,0.90);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(139,92,246,0.15);
          padding: 0 24px;
        }
        .pp-nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          height: 64px;
        }
        .pp-brand {
          display: flex; align-items: center; gap: 10px;
          text-decoration: none; color: inherit;
        }
        .pp-brand-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: linear-gradient(135deg, #7c3aed, #0ea5e9);
          display: flex; align-items: center; justify-content: center;
          font-weight: 900; font-size: 18px; color: white;
          flex-shrink: 0;
        }
        .pp-brand-name { font-weight: 700; font-size: 17px; letter-spacing: -0.5px; }
        .pp-back {
          font-size: 13px; font-weight: 500; color: var(--text-secondary);
          text-decoration: none; display: flex; align-items: center; gap: 6px;
          transition: color 0.2s;
        }
        .pp-back:hover { color: #8b5cf6; }

        .pp-hero {
          padding: 140px 24px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .pp-hero-bg {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(109,40,217,0.25) 0%, transparent 70%);
        }
        .pp-hero-grid {
          position: absolute; inset: 0; z-index: 0; opacity: 0.03; pointer-events: none;
          background-image:
            linear-gradient(rgba(139,92,246,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .pp-badge {
          display: inline-block; padding: 6px 18px; border-radius: 100px;
          background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.3);
          font-size: 12px; font-weight: 600; color: #a78bfa; margin-bottom: 24px;
          letter-spacing: 1px; text-transform: uppercase;
          position: relative; z-index: 1;
        }
        .pp-title {
          font-size: clamp(36px, 6vw, 64px); font-weight: 900; line-height: 1.1;
          letter-spacing: -2px; margin-bottom: 16px;
          position: relative; z-index: 1;
        }
        .pp-subtitle {
          font-size: 16px; color: var(--text-secondary);
          margin-bottom: 8px; position: relative; z-index: 1;
        }
        .pp-effective {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 8px;
          background: rgba(6,182,212,0.08); border: 1px solid rgba(6,182,212,0.2);
          font-size: 13px; font-weight: 500; color: #22d3ee;
          margin-top: 16px; position: relative; z-index: 1;
        }

        .pp-layout {
          max-width: 900px; margin: 0 auto; padding: 0 24px 100px;
          display: grid; grid-template-columns: 1fr;
          gap: 0;
        }

        .pp-toc {
          background: var(--bg-card);
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 20px; padding: 32px;
          margin-bottom: 48px;
        }
        .pp-toc-title {
          font-size: 13px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; color: #8b5cf6; margin-bottom: 20px;
        }
        .pp-toc-list {
          list-style: none; display: flex; flex-direction: column; gap: 0;
        }
        .pp-toc-item { border-bottom: 1px solid rgba(139,92,246,0.1); }
        .pp-toc-item:last-child { border-bottom: none; }
        .pp-toc-link {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 0; text-decoration: none;
          color: var(--text-secondary); font-size: 14px; font-weight: 500;
          transition: color 0.2s;
        }
        .pp-toc-link:hover { color: #8b5cf6; }
        .pp-toc-num {
          font-size: 11px; font-weight: 700; color: #8b5cf6;
          min-width: 20px; opacity: 0.7;
        }

        .pp-section {
          margin-bottom: 56px;
          scroll-margin-top: 88px;
        }
        .pp-section-header {
          display: flex; align-items: center; gap: 14px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(139,92,246,0.15);
        }
        .pp-section-num {
          width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
          background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700; color: #8b5cf6;
        }
        .pp-section-title {
          font-size: clamp(18px, 2.5vw, 22px); font-weight: 700;
          letter-spacing: -0.5px;
        }
        .pp-section-content p {
          color: var(--text-secondary); line-height: 1.85; font-size: 15px;
          margin-bottom: 16px;
        }
        .pp-section-content p:last-child { margin-bottom: 0; }
        .pp-section-content p strong {
          color: var(--text-primary);
        }
        .pp-section-content h4 {
          font-size: 14px; font-weight: 700; color: #a78bfa;
          letter-spacing: 0.5px; margin: 20px 0 10px;
          text-transform: uppercase; font-size: 12px; letter-spacing: 1.5px;
        }
        .pp-section-content ul {
          list-style: none; display: flex; flex-direction: column; gap: 8px;
          margin-bottom: 16px; padding-left: 0;
        }
        .pp-section-content li {
          display: flex; align-items: flex-start; gap: 10px;
          color: var(--text-secondary); font-size: 15px; line-height: 1.7;
        }
        .pp-section-content li::before {
          content: '▸'; color: #8b5cf6; font-size: 12px; margin-top: 4px;
          flex-shrink: 0;
        }
        .pp-section-content li strong { color: var(--text-primary); }
        .pp-section-content a {
          color: #06b6d4; text-decoration: none;
          border-bottom: 1px solid rgba(6,182,212,0.3);
          transition: color 0.2s, border-color 0.2s;
        }
        .pp-section-content a:hover {
          color: #22d3ee; border-color: rgba(34,211,238,0.6);
        }

        .third-party-table {
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 12px; overflow: hidden;
          margin: 16px 0 20px;
        }
        .third-party-row {
          display: grid; grid-template-columns: 1.5fr 2fr 1fr;
          gap: 16px; padding: 14px 20px;
          border-bottom: 1px solid rgba(139,92,246,0.1);
          align-items: center;
        }
        .third-party-row:last-child { border-bottom: none; }
        .third-party-row:first-child { background: rgba(139,92,246,0.06); }
        .third-party-name { font-size: 14px; font-weight: 600; color: var(--text-primary); }
        .third-party-purpose { font-size: 13px; color: var(--text-secondary); }
        .third-party-link {
          font-size: 12px; font-weight: 600; color: #06b6d4 !important;
          border-bottom: none !important; white-space: nowrap;
        }

        .contact-block {
          background: var(--bg-card);
          border: 1px solid rgba(139,92,246,0.2);
          border-radius: 16px; padding: 24px;
          margin: 16px 0 20px; display: flex; flex-direction: column; gap: 0;
        }
        .contact-row {
          display: flex; align-items: center; gap: 16px;
          padding: 12px 0; border-bottom: 1px solid rgba(139,92,246,0.08);
        }
        .contact-row:last-child { border-bottom: none; }
        .contact-label {
          font-size: 12px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; color: #8b5cf6; min-width: 80px;
        }
        .contact-row span:last-child, .contact-row a {
          font-size: 14px; color: var(--text-secondary);
        }

        .pp-footer {
          padding: 40px 24px;
          border-top: 1px solid rgba(139,92,246,0.15);
          background: rgba(5,5,8,0.95);
          text-align: center;
        }
        .pp-footer-brand {
          font-size: 13px; color: var(--text-secondary);
          margin-bottom: 8px;
        }
        .pp-footer-links {
          display: flex; justify-content: center; gap: 24px; flex-wrap: wrap;
        }
        .pp-footer-link {
          font-size: 13px; color: var(--text-secondary); text-decoration: none;
          transition: color 0.2s;
        }
        .pp-footer-link:hover { color: #8b5cf6; }

        @media (max-width: 600px) {
          .third-party-row {
            grid-template-columns: 1fr;
            gap: 4px;
          }
          .third-party-link { margin-top: 4px; }
        }
      `}</style>

      {/* Nav */}
      <nav className="pp-nav">
        <div className="pp-nav-inner">
          <a href="/" className="pp-brand">
            <div className="pp-brand-icon">E</div>
            <span className="pp-brand-name">
              Eonrize <span className="gradient-text">Forge</span>
            </span>
          </a>
          <a href="/" className="pp-back">
            ← Back to Home
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-hero-bg" />
        <div className="pp-hero-grid" />
        <div className="pp-badge">Legal</div>
        <h1 className="pp-title">
          GrindOn <span className="gradient-text">Privacy Policy</span>
        </h1>
        <p className="pp-subtitle">
          Published by Eonrize Forge Pvt Ltd
        </p>
        <div className="pp-effective">
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', flexShrink: 0, display: 'inline-block' }} />
          Effective Date: {EFFECTIVE_DATE}
        </div>
      </section>

      <div className="section-divider" />

      <div className="pp-layout" style={{ marginTop: 64 }}>

        {/* Table of Contents */}
        <div className="pp-toc">
          <div className="pp-toc-title">Table of Contents</div>
          <ol className="pp-toc-list">
            {sections.map((s, i) => (
              <li key={s.id} className="pp-toc-item">
                <a href={`#${s.id}`} className="pp-toc-link">
                  <span className="pp-toc-num">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="pp-section">
            <div className="pp-section-header">
              <div className="pp-section-num">{String(i + 1).padStart(2, '0')}</div>
              <h2 className="pp-section-title">{s.title}</h2>
            </div>
            <div className="pp-section-content">{s.content}</div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="pp-footer">
        <p className="pp-footer-brand">
          © 2026 Eonrize Forge Pvt Ltd — All rights reserved.
        </p>
        <div className="pp-footer-links">
          <a href="/" className="pp-footer-link">Home</a>
          <a href="mailto:support@eonrizeforge.com" className="pp-footer-link">support@eonrizeforge.com</a>
          <a href="https://eonrizeforge.com" target="_blank" rel="noopener noreferrer" className="pp-footer-link">eonrizeforge.com</a>
        </div>
      </footer>
    </div>
  )
}
