import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: EonrizeForge,
})

// Icons as inline SVG components
function IconZap() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function IconTarget() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconTrendingUp() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

function IconUsers() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function IconBrain() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  )
}

function IconBook() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function IconSmartphone() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function IconTool() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function IconDollar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function IconEye() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function IconBarChart() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function IconTwitter() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function IconYoutube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  )
}

function IconStar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function EonrizeForge() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setJoined(true)
  }

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(5,5,8,0.85)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(139,92,246,0.15)',
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: 18, color: 'white',
            }}>E</div>
            <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.5px' }}>
              Eonrize <span className="gradient-text">Forge</span>
            </span>
          </div>
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="hidden-mobile-nav">
            {['About', 'Services', 'Features', 'Community'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8b5cf6')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >{item}</a>
            ))}
          </div>
          <a href="#join" className="btn-primary" style={{ textDecoration: 'none', fontSize: 14, padding: '10px 24px' }}>
            Get Started
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', overflow: 'hidden', padding: '120px 24px 80px',
      }}>
        {/* Animated gradient background */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(109,40,217,0.35) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(6,182,212,0.2) 0%, transparent 60%), var(--bg-primary)',
        }} />

        {/* Particle orbs */}
        <div className="particle-orb" style={{ width: 400, height: 400, top: '10%', left: '-10%', background: 'radial-gradient(circle, rgba(109,40,217,0.3) 0%, transparent 70%)', animationDelay: '0s' }} />
        <div className="particle-orb" style={{ width: 300, height: 300, bottom: '15%', right: '-5%', background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)', animationDelay: '1.5s' }} />
        <div className="particle-orb" style={{ width: 200, height: 200, top: '60%', left: '10%', background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)', animationDelay: '0.8s' }} />

        {/* Floating grid lines */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}>
          <div style={{
            display: 'inline-block', padding: '6px 18px', borderRadius: 100,
            background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)',
            fontSize: 13, fontWeight: 600, color: '#a78bfa', marginBottom: 28, letterSpacing: 1,
            textTransform: 'uppercase',
          }}>
            The Future Is Built — Not Given
          </div>

          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 92px)', fontWeight: 900, lineHeight: 1.05,
            marginBottom: 24, letterSpacing: '-2px',
          }}>
            Forge Your <span className="gradient-text">Future</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)', color: 'var(--text-secondary)', fontWeight: 400,
            lineHeight: 1.7, marginBottom: 48, maxWidth: 640, margin: '0 auto 48px',
          }}>
            Build discipline, create income, and become unstoppable with Eonrize Forge.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#join" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Get Started <IconArrow />
            </a>
            <a href="#services" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Explore Tools
            </a>
          </div>

          {/* Stats bar */}
          <div style={{
            marginTop: 80, display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap',
          }}>
            {[['10K+', 'Members'], ['500+', 'Resources'], ['4.9★', 'Rating']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div className="gradient-text" style={{ fontSize: 32, fontWeight: 800 }}>{num}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500, marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ color: '#8b5cf6', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              Our Story
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-1px' }}>
              Built From the <span className="gradient-text">Grind Up</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: 16, marginBottom: 20 }}>
              Eonrize Forge was born from a simple truth: real transformation doesn't come from motivation—it comes from <strong style={{ color: 'var(--text-primary)' }}>systems, discipline, and relentless consistency</strong>.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: 16, marginBottom: 20 }}>
              We started in a basement with a notebook and a vision. No investors. No shortcuts. Just daily execution, building tools that actually work for people serious about upgrading their lives.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: 16 }}>
              Today, Eonrize Forge is a growing ecosystem of digital tools, content, and community—designed for those who refuse to settle. Whether you're building a side income, sharpening your mindset, or engineering your future, this is your forge.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: '🔥', label: 'Discipline First', desc: 'Systems over emotions, every single day.' },
              { icon: '⚡', label: 'Build & Earn', desc: 'Turn skills and tools into real income.' },
              { icon: '🎯', label: 'Stay Locked In', desc: 'Focus is your most powerful asset.' },
              { icon: '📈', label: 'Compound Growth', desc: 'Small wins stack into massive results.' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="premium-card" style={{ padding: 24, borderRadius: 16 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{label}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: '120px 24px', background: 'rgba(10,10,18,0.8)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ color: '#06b6d4', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              What We Offer
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 16 }}>
              Everything You Need to <span className="gradient-text">Level Up</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
              Four pillars built to help you grow, earn, and stay ahead of the curve.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              {
                icon: <IconTool />,
                color: '#8b5cf6',
                glow: 'rgba(139,92,246,0.3)',
                title: 'Digital Tools',
                subtitle: 'Productivity & Templates',
                desc: 'Plug-and-play productivity systems, notion templates, habit trackers, and business frameworks built to save you hundreds of hours.',
              },
              {
                icon: <IconBook />,
                color: '#06b6d4',
                glow: 'rgba(6,182,212,0.3)',
                title: 'Content & Guides',
                subtitle: 'Blogs & Mindset Content',
                desc: 'Deep-dive articles, mindset breakdowns, and tactical guides on discipline, money, and personal development curated for doers.',
              },
              {
                icon: <IconSmartphone />,
                color: '#a78bfa',
                glow: 'rgba(167,139,250,0.3)',
                title: 'Future Apps',
                subtitle: 'GrindOn & More',
                desc: 'Our upcoming app ecosystem—starting with GrindOn, a habit and accountability platform designed to make discipline your default mode.',
              },
              {
                icon: <IconUsers />,
                color: '#22d3ee',
                glow: 'rgba(34,211,238,0.3)',
                title: 'Community',
                subtitle: 'Builders & Grinders',
                desc: 'Join a network of like-minded builders sharing wins, resources, and accountability. Your circle determines your ceiling—upgrade it.',
              },
            ].map(({ icon, color, glow, title, subtitle, desc }) => (
              <div key={title} className="premium-card" style={{ borderRadius: 20, padding: 32, position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: 120, height: 120,
                  background: `radial-gradient(circle at top right, ${glow} 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: `rgba(${color === '#8b5cf6' ? '139,92,246' : color === '#06b6d4' ? '6,182,212' : color === '#a78bfa' ? '167,139,250' : '34,211,238'},0.15)`,
                  border: `1px solid ${color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color, marginBottom: 20,
                }}>
                  {icon}
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: color, marginBottom: 8 }}>{subtitle}</div>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 14 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FEATURES / VALUE ── */}
      <section id="features" style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ color: '#8b5cf6', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              Why Eonrize Forge
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1px' }}>
              Four Pillars of <span className="gradient-text">Transformation</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              {
                icon: <IconZap />,
                color: '#f59e0b',
                glow: 'rgba(245,158,11,0.15)',
                title: 'Build Discipline',
                desc: 'Engineer unbreakable habits and routines. Discipline is the bridge between goals and results—we help you build it systematically.',
              },
              {
                icon: <IconDollar />,
                color: '#10b981',
                glow: 'rgba(16,185,129,0.15)',
                title: 'Earn Consistently',
                desc: 'Turn skills and digital products into reliable income streams. Stop trading hours for pennies—build assets that work while you sleep.',
              },
              {
                icon: <IconEye />,
                color: '#8b5cf6',
                glow: 'rgba(139,92,246,0.15)',
                title: 'Stay Focused',
                desc: 'Cut through the noise. Our frameworks and tools are built to eliminate distraction and keep you locked in on what actually matters.',
              },
              {
                icon: <IconBarChart />,
                color: '#06b6d4',
                glow: 'rgba(6,182,212,0.15)',
                title: 'Track Progress',
                desc: 'What gets measured gets managed. Use our tracking systems to see real growth, maintain momentum, and celebrate every milestone.',
              },
            ].map(({ icon, color, glow, title, desc }) => (
              <div key={title} className="premium-card" style={{
                borderRadius: 20, padding: '40px 28px', textAlign: 'center',
                background: `linear-gradient(135deg, var(--bg-card) 0%, ${glow} 100%)`,
              }}>
                <div style={{
                  width: 68, height: 68, borderRadius: '50%',
                  background: `${glow}`,
                  border: `2px solid ${color}44`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color, margin: '0 auto 20px',
                }}>
                  {icon}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 14 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── TESTIMONIALS ── */}
      <section id="community" style={{ padding: '120px 24px', background: 'rgba(10,10,18,0.8)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <div style={{ color: '#06b6d4', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              Community Voices
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1px' }}>
              Real People, <span className="gradient-text">Real Results</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              {
                name: 'Marcus T.',
                role: 'Freelancer → Digital Entrepreneur',
                avatar: 'M',
                stars: 5,
                text: "Eonrize Forge completely changed how I approach my goals. The templates and tools gave me the structure I was missing. I went from scattered to generating $3K/month in 4 months.",
              },
              {
                name: 'Priya K.',
                role: 'Student & Content Creator',
                avatar: 'P',
                stars: 5,
                text: "The mindset content hit different. It's not fluff — it's tactical. I built my first digital product and grew my audience to 5K in 60 days following the guides here.",
              },
              {
                name: 'Devon R.',
                role: 'Software Dev & Side Hustler',
                avatar: 'D',
                stars: 5,
                text: "I've tried every productivity system out there. What Eonrize Forge offers is different — it's built for people who actually want to build things. The community alone is worth it.",
              },
              {
                name: 'Aisha M.',
                role: 'Fitness Coach & Entrepreneur',
                avatar: 'A',
                stars: 5,
                text: "I was skeptical at first, but the discipline frameworks are legit. I applied them to my coaching business and tripled my client base. The GrindOn app waitlist can't come fast enough.",
              },
            ].map(({ name, role, avatar, stars, text }) => (
              <div key={name} className="premium-card" style={{ borderRadius: 20, padding: 28 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} style={{ color: '#f59e0b' }}><IconStar /></span>
                  ))}
                </div>
                <p style={{ color: '#cbd5e1', lineHeight: 1.75, fontSize: 14, marginBottom: 20, fontStyle: 'italic' }}>
                  "{text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: 15,
                  }}>{avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{name}</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: 12 }}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── CTA ── */}
      <section id="join" style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(109,40,217,0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block', padding: '6px 18px', borderRadius: 100,
            background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.3)',
            fontSize: 13, fontWeight: 600, color: '#22d3ee', marginBottom: 28, letterSpacing: 1,
            textTransform: 'uppercase',
          }}>
            Join The Movement
          </div>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 20, letterSpacing: '-1.5px' }}>
            Start Your Journey <span className="gradient-text">Today</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 18, lineHeight: 1.7, marginBottom: 48 }}>
            Join thousands of builders who are forging their futures with discipline, tools, and community. Drop your email — your journey starts now.
          </p>

          {joined ? (
            <div style={{
              padding: '24px 40px', borderRadius: 16,
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
              color: '#34d399', fontSize: 18, fontWeight: 600,
            }}>
              🎉 Welcome to Eonrize Forge! Check your inbox.
            </div>
          ) : (
            <form onSubmit={handleJoin} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{
                  flex: '1 1 280px', padding: '14px 20px', borderRadius: 8,
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.3)',
                  color: 'var(--text-primary)', fontSize: 15, outline: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(139,92,246,0.8)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)')}
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Join the Forge <IconArrow />
              </button>
            </form>
          )}

          <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: 20 }}>
            No spam. No fluff. Just value — delivered straight to your inbox.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── FOOTER ── */}
      <footer style={{ padding: '64px 24px 40px', background: 'rgba(5,5,8,0.95)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 56 }}>
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: 18,
                }}>E</div>
                <span style={{ fontWeight: 700, fontSize: 17 }}>Eonrize <span className="gradient-text">Forge</span></span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, maxWidth: 220 }}>
                Building discipline, income, and community for the next generation of self-made builders.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                {[
                  { icon: <IconTwitter />, label: 'Twitter' },
                  { icon: <IconInstagram />, label: 'Instagram' },
                  { icon: <IconYoutube />, label: 'YouTube' },
                ].map(({ icon, label }) => (
                  <a key={label} href="#" aria-label={label} style={{
                    width: 38, height: 38, borderRadius: 8,
                    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(139,92,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.2)'; e.currentTarget.style.color = '#a78bfa'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                  >{icon}</a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 20, letterSpacing: 0.5 }}>Platform</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Digital Tools', 'Content & Guides', 'Future Apps', 'Community'].map(item => (
                  <a key={item} href="#services" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#8b5cf6')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >{item}</a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 20, letterSpacing: 0.5 }}>Company</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['About', 'Blog', 'Careers', 'Press'].map(item => (
                  <a key={item} href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#8b5cf6')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >{item}</a>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 20, letterSpacing: 0.5 }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a href="mailto:hello@eonrizeforge.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#06b6d4')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >hello@eonrizeforge.com</a>
                <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Available Mon–Fri</span>
                <a href="#join" style={{ color: '#8b5cf6', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Join the community →</a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(139,92,246,0.15)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
              © 2026 Eonrize Forge. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacy Policy', 'Terms of Service'].map(item => (
                <a key={item} href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#8b5cf6')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >{item}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile nav hide style */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile-nav { display: none !important; }
        }
      `}</style>
    </div>
  )
}
