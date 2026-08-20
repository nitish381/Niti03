import { Logo } from '@/components/Logo';
import { footer } from '@/content/raahi';

export function Footer() {
  return (
    <footer className="site-footer">
      <hr className="site-footer__rule" />

      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Logo withWordmark={false} />
          <p className="site-footer__wordmark">{footer.tagline}</p>
          <p>{footer.description}</p>
        </div>

        <div className="site-footer__columns">
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="site-footer__column-title">{column.title}</h3>
              {column.items.map((item) => (
                <p key={item} className="site-footer__column-item">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <hr className="site-footer__rule" />

      <div className="site-footer__legal">
        <p>{footer.copyright}</p>
        <div className="site-footer__legal-links">
          {footer.legal.map((link) => (
            <a key={link.href} className="site-footer__legal-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <hr className="site-footer__rule" />
    </footer>
  );
}
