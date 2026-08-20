import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AssetImage } from '@/components/AssetImage';
import { useScrolled } from '@/hooks/useScrolled';
import { brand, nav } from '@/content/raahi';

/** Gradient "Install App" pill — #98C8E8 → #FFAC66 → #98C8E8, radius 200. */
function InstallPill({ compact = false }: { compact?: boolean }) {
  return (
    <a className="install-pill" href="#the-app">
      <span className="install-pill__icon">
        <AssetImage id="install-app" alt="" width={18} height={18} decorative />
      </span>
      <span className="install-pill__label">
        {compact ? 'Install' : brand.installCta}
      </span>
    </a>
  );
}

export function Header() {
  const scrolled = useScrolled(100);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('home');

  // Highlight the section currently occupying the upper half of the viewport.
  useEffect(() => {
    const ids = nav.map((link) => link.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActiveId(hit.target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const classes = ['site-header', scrolled ? 'site-header--scrolled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      <div className="site-header__inner">
        <a className="logo" href="#home" aria-label="Raahi — home">
          <AssetImage
            id="raahi-mark"
            alt=""
            className="logo__mark"
            width={54}
            height={54}
            loading="eager"
            decorative
          />
          <span className="logo__wordmark">{brand.name}</span>
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {nav.map((link) => {
            const isActive = link.href.slice(1) === activeId;
            return (
              <a
                key={link.href}
                className={[
                  'site-header__link',
                  isActive ? 'site-header__link--active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <div className="site-header__pill">
            <InstallPill />
          </div>
          <button
            type="button"
            className="site-header__burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <Offcanvas
        show={menuOpen}
        onHide={() => setMenuOpen(false)}
        placement="end"
        className="site-drawer"
        aria-label="Menu"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="site-drawer__title">
            {brand.name}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="site-drawer__nav" aria-label="Mobile">
            {nav.map((link) => (
              <a
                key={link.href}
                className="site-drawer__link"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="site-drawer__cta">
            <InstallPill />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
