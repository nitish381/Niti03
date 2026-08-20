import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Container } from '@/components/Container';
import { appDownload } from '@/content/raahi';

/** Dark conversion band with phone mockups that overflow it top and bottom. */
export function AppDownload() {
  return (
    <div className="app-download">
      <Container>
        <div className="app-download__band is-inverse">
          <div className="app-download__texture" data-asset="cta-texture" />
          <div className="app-download__phones">
            <div className="app-download__phone app-download__phone--back" data-asset="phone-home" />
            <div className="app-download__phone app-download__phone--front" data-asset="phone-detail" />
          </div>

          <div className="app-download__copy">
            <h2 className="app-download__title">
              <span className="app-download__title-lead">{appDownload.titleLead}</span>
              <span className="app-download__title-main">{appDownload.titleMain}</span>
            </h2>
            <p className="app-download__body">{appDownload.body}</p>
            <div className="app-download__badges">
              <AppStoreBadge store="apple" />
              <AppStoreBadge store="google" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
