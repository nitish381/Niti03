import { AssetImage } from '@/components/AssetImage';
import { Reveal } from '@/components/Reveal';
import { useParallax } from '@/hooks/useParallax';
import { appDownload } from '@/content/raahi';

function StoreBadge({ store }: { store: 'apple' | 'google' }) {
  const copy =
    store === 'apple'
      ? { kicker: 'Download on the', name: 'App Store' }
      : { kicker: 'Get it On', name: 'Google Play' };

  return (
    <a
      className={`app-badge app-badge--${store}`}
      href="#"
      aria-label={`${copy.kicker} ${copy.name}`}
    >
      <span className="app-badge__text">
        <span className="app-badge__kicker">{copy.kicker}</span>
        <span className="app-badge__store">{copy.name}</span>
      </span>
    </a>
  );
}

/**
 * The conversion moment.
 *
 * `raahi-app-showcase-background.png` is the finished 1599 × 415 band — the
 * dark ground, the organic texture and the rounded corners are all in the
 * artwork, so no colour fill or blend mode is applied over it.
 *
 * The two phone screens sit on top at the Figma offsets. As in the source file
 * the band clips them, so they bleed off its lower edge. They drift at slightly
 * different rates on scroll, which is what gives the pair its depth — neither
 * is scaled unevenly or cropped.
 */
export function AppDownload() {
  const backRef = useParallax<HTMLDivElement>(0.06, { max: 34 });
  const frontRef = useParallax<HTMLDivElement>(0.11, { max: 52 });

  return (
    <section className="app-download">
      <div className="app-download__inner">
        <div className="app-download__band">
          <AssetImage
            id="raahi-app-showcase-background"
            alt=""
            className="app-download__texture"
            width={1599}
            height={415}
            objectFit="cover"
            decorative
          />

          <div className="app-download__phones" aria-hidden="true">
            <div className="app-download__phone app-download__phone--back" ref={backRef}>
              <AssetImage
                id="raahi-app-screen-01"
                alt=""
                width={259}
                height={455}
                objectFit="contain"
                decorative
              />
            </div>
            <div className="app-download__phone app-download__phone--front" ref={frontRef}>
              <AssetImage
                id="raahi-app-screen-02"
                alt=""
                width={259}
                height={496}
                objectFit="contain"
                decorative
              />
            </div>
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
