import { Link } from 'react-router-dom';
import { meta } from '@/content/site';

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__mark">
        {meta.name}
      </Link>
      <Link to="/contact" className="site-header__contact">
        Say hello
      </Link>
    </header>
  );
}
