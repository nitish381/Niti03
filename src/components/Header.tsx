import { Link } from 'react-router-dom';
import { meta } from '@/content/site';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__mark">
        {meta.name}
      </Link>
      <div className="site-header__actions">
        <ThemeToggle />
        <Link to="/contact" className="site-header__contact">
          Say hello
        </Link>
      </div>
    </header>
  );
}
