import { AssetImage } from '@/components/AssetImage';
import { gsap } from '@/lib/scroll/gsap';
import { useScrollScene } from '@/lib/scroll/useScrollScene';
import { parallax, reveal } from '@/lib/scroll/scenes';
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
  /**
   * Layered depth on the devices. The two handsets rise into the band on
   * different beats and then travel at noticeably different rates as the
   * section passes — the front screen roughly twice as far as the one behind
   * it. That difference is the whole effect: neither is scaled unevenly and
   * neither is cropped, they simply sit at different distances.
   */
  const ref = useScrollScene<HTMLElement>((root) => {
    const back = root.querySelector('.app-download__phone--back');
    const front = root.querySelector('.app-download__phone--front');
    const band = root.querySelector('.app-download__band');
    const copy = gsap.utils.toArray<HTMLElement>('[data-cta="copy"] > *', root);

    gsap.from(band, {
      autoAlpha: 0,
      y: 40,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: root, start: 'top 82%', once: true },
    });

    gsap.from([back, front], {
      yPercent: 26,
      autoAlpha: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.14,
      scrollTrigger: { trigger: root, start: 'top 72%', once: true },
    });

    if (back) parallax(back, -34, root);
    if (front) parallax(front, -68, root);

    reveal(root, copy, { y: 26, stagger: 0.1, start: 'top 70%' });
  });

  return (
    <section className="app-download" ref={ref}>
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
            <div className="app-download__phone app-download__phone--back">
              <AssetImage
                id="raahi-app-screen-01"
                alt=""
                width={259}
                height={455}
                objectFit="contain"
                decorative
              />
            </div>
            <div className="app-download__phone app-download__phone--front">
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

          <div className="app-download__copy" data-cta="copy">
            <h2 className="app-download__title">
              <span className="app-download__title-lead">{appDownload.titleLead}</span>
              <span className="app-download__title-main">{appDownload.titleMain}</span>
            </h2>
            <p className="app-download__body">{appDownload.body}</p>
            <div className="app-download__badges">
              <StoreBadge store="apple" />
              <StoreBadge store="google" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
