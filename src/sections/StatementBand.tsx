import { Section } from '@/components/Section';
import { statementBand } from '@/content/raahi';

export function StatementBand() {
  return (
    <Section name="statement-band" variant="tight">
      <h2>{statementBand.title}</h2>
      <p>{statementBand.body}</p>
    </Section>
  );
}
