import { Button } from '@/components/Button';
import { hero } from '@/content/raahi';

/** Dark cinematic opener. Layered backdrop + path graphic arrive in Phase 03. */
export function Hero() {
  return (
    <section id="home" className="section section--inverse hero">
      <div className="section__decor" data-asset-group="hero" />
      <div className="section__inner hero__inner">
        <h1>{hero.title}</h1>
        {hero.body.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <Button variant="sm">{hero.cta}</Button>
      </div>
    </section>
  );
}
