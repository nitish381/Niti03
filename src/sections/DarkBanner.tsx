import { Container } from '@/components/Container';
import { darkBanner } from '@/content/raahi';

export function DarkBanner() {
  return (
    <div className="dark-banner">
      <Container>
        <div className="dark-banner__panel is-inverse">
          <h2 className="dark-banner__title">{darkBanner.title}</h2>
        </div>
      </Container>
    </div>
  );
}
