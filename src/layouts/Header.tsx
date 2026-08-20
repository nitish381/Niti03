import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from '@/components/Button';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useScrolled } from '@/hooks/useScrolled';
import { brand, nav } from '@/content/raahi';

export function Header() {
  const scrolled = useScrolled(100);
  const [menuOpen, setMenuOpen] = useState(false);

  const classes = ['site-header', scrolled ? 'site-header--scrolled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={classes}>
      <div className="site-header__inner">
        <Logo />

        <nav className="site-header__nav" aria-label="Primary">
          {nav.map((link) => (
            <a key={link.href} className="site-header__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <Button variant="pill">{brand.installCta}</Button>
          <button
            type="button"
            className="site-header__toggle d-lg-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      <Offcanvas
        show={menuOpen}
        onHide={() => setMenuOpen(false)}
        placement="end"
        aria-label="Menu"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{brand.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav aria-label="Mobile">
            {nav.map((link) => (
              <a
                key={link.href}
                className="site-header__link d-block py-2"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
