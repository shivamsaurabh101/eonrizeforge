import { useState, type FormEvent } from 'react'

type SiteShellProps = {
  content: string
}

export function SiteShell({ content }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleSubmit(event: FormEvent<HTMLDivElement>) {
    const form = event.target
    if (!(form instanceof HTMLFormElement) || form.id !== 'contact-form') return

    event.preventDefault()
    if (!form.reportValidity()) return

    const values = new FormData(form)
    const subject = encodeURIComponent(`Project enquiry: ${values.get('project')}`)
    const body = encodeURIComponent(
      `Name: ${values.get('name')}\nEmail: ${values.get('email')}\nProject type: ${values.get('project')}\n\nProject details:\n${values.get('details') || 'Not provided'}`,
    )
    window.location.href = `mailto:admin@eonrizeforge.com?subject=${subject}&body=${body}`
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="site-app">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <a className="brand" href="/" aria-label="EonRize Forge home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-name">EONRIZE<span>FORGE</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        ><span /><span /></button>
        <nav className={`primary-nav${menuOpen ? ' open' : ''}`} id="primary-nav" aria-label="Main navigation">
          <details className="nav-services">
            <summary>Services <span aria-hidden="true">⌄</span></summary>
            <div className="nav-submenu">
              <a href="/services" onClick={closeMenu}>All services</a>
              <a href="/game-development" onClick={closeMenu}>Game development</a>
              <a href="/3d-assets" onClick={closeMenu}>3D assets</a>
              <a href="/ai-software" onClick={closeMenu}>AI &amp; software</a>
            </div>
          </details>
          <a href="/portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="/products/" onClick={closeMenu}>Products</a>
          <a href="/about" onClick={closeMenu}>Studio</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href="/contact">Start a project <span aria-hidden="true">↗</span></a>
      </header>

      <div className="site-page-content" onSubmit={handleSubmit} dangerouslySetInnerHTML={{ __html: content }} />

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-name">EONRIZE<span>FORGE</span></span>
          </a>
          <p>Engineering digital experiences.<br />Building what’s next.</p>
          <a className="back-top" href="#top">BACK TO TOP ↑</a>
        </div>
        <div className="footer-links">
          <a href="/services">Services</a><a href="/game-development">Game development</a>
          <a href="/3d-assets">3D assets</a><a href="/ai-software">AI &amp; software</a>
          <a href="/portfolio">Portfolio</a><a href="/products/">Products</a>
          <a href="/about">About</a><a href="/contact">Contact</a>
          <a href="/grindon/privacy-policy">GrindOn privacy</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EonRize Forge OPC Pvt. Ltd.</span>
          <span>INDEPENDENT TECHNOLOGY &amp; CREATIVE DEVELOPMENT STUDIO</span>
          <a href="mailto:admin@eonrizeforge.com">EMAIL THE STUDIO ↗</a>
        </div>
      </footer>
    </div>
  )
}

