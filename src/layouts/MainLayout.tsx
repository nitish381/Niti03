import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipLink } from '@/components/SkipLink';
import { RouteTransition } from '@/components/RouteTransition';

export function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content">
        <RouteTransition />
      </main>
      <Footer />
    </>
  );
}
