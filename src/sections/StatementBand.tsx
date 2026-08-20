import { Reveal } from '@/components/Reveal';
import { statementBand } from '@/content/raahi';

/** Thesis line bridging the hero into the personalization diagram. */
export function StatementBand() {
  return (
    <section className="statement-band">
      <div className="statement-band__inner">
        <Reveal as="h2" className="statement-band__title">
          {statementBand.title}
        </Reveal>
        <Reveal as="p" className="statement-band__body" delay={100}>
          {statementBand.body}
        </Reveal>
      </div>
    </section>
  );
}
