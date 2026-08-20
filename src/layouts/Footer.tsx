import { AssetImage } from '@/components/AssetImage';
import { footer } from '@/content/raahi';

export function Footer() {
  return (
    <footer className="site-footer">
      <hr className="site-footer__rule" />

      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <AssetImage
            id="raahi-mark"
            alt=""
            className="site-footer__mark"
            width={54}
            height={54}
            decorative
          />
          <p className="site-footer__wordmark">{footer.tagline}</p>
          <p className="site-footer__description">{footer.description}</p>
        </div>

        <div className="site-footer__columns">
          {footer.columns.map((column) => (
            <div key={column.title} className="site-footer__column">
              <h2 className="site-footer__column-title">{column.title}</h2>
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
        <p className="site-footer__copyright">{footer.copyright}</p>
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
