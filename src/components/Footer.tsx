import { footer } from '@/content/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__identity">
        <p className="site-footer__name">{footer.name}</p>
        <p className="site-footer__role">{footer.role}</p>
      </div>
      <p className="site-footer__tags">{footer.tags}</p>
      <p className="site-footer__copyright">{footer.copyright}</p>
    </footer>
  );
}
