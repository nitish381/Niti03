import { hero } from '@/content/site';
import { heroPortrait } from '@/content/assets';
import { UntangleLine } from '@/components/UntangleLine';
import { Monogram } from '@/components/Monogram';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <Monogram />
        <UntangleLine />
        <h1 className="hero__headline display">{hero.headline}</h1>
        <p className="hero__role">{hero.role}</p>
        <p className="hero__description">{hero.description}</p>
        <p className="hero__capabilities">{hero.capabilities}</p>
      </div>
      <div className="hero__portrait">
        <img src={heroPortrait} alt="Portrait of Nitish Kumar" />
      </div>
    </section>
  );
}
