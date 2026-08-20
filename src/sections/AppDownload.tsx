import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { appDownload } from '@/content/raahi';

function StoreBadge({ store }: { store: 'apple' | 'google' }) {
  const copy =
    store === 'apple'
      ? { kicker: 'Download on the', name: 'App Store', asset: 'store-apple' }
      : { kicker: 'Get it On', name: 'Google Play', asset: 'store-google-play' };

  return (
    <a className={`app-badge app-badge--${store}`} href="#" aria-label={`${copy.kicker} ${copy.name}`}>
      <span className="app-badge__icon">
        <AssetImage id={copy.asset} alt="" objectFit="contain" decorative />
      </span>
      <span className="app-badge__text">
        <span className="app-badge__kicker">{copy.kicker}</span>
        <span className="app-badge__store">{copy.name}</span>
      </span>
    </a>
  );
}

/**
 * The conversion moment. Two phone mockups break out of the #201F1A band on
 * both its top and bottom edges — that overflow is the section's signature and
 * is preserved at every width down to 768, where it reduces to a single phone
 * overlapping the top edge only.
 */
export function AppDownload() {
  return (
    <section className="app-download">
      <div className="app-download__inner">
        <div className="app-download__band">
          <span className="app-download__texture" aria-hidden="true">
            <AssetImage id="cta-texture" alt="" objectFit="cover" decorative />
          </span>

          <div className="app-download__phones" aria-hidden="true">
            <AssetImage
              id="phone-home"
              alt=""
              className="app-download__phone app-download__phone--back"
              width={259}
              height={530}
              objectFit="cover"
              decorative
            />
            <AssetImage
              id="phone-book-detail"
              alt=""
              className="app-download__phone app-download__phone--front"
              width={258}
              height={530}
              objectFit="cover"
              decorative
            />
          </div>

          <Reveal className="app-download__copy">
            <h2 className="app-download__title">
              <span className="app-download__title-lead">{appDownload.titleLead}</span>
              <span className="app-download__title-main">{appDownload.titleMain}</span>
            </h2>
            <p className="app-download__body">{appDownload.body}</p>
            <div className="app-download__badges">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
