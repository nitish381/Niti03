import { AppStoreBadge } from '@/components/AppStoreBadge';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { library } from '@/content/raahi';

/** Five-slide book carousel. Cover renders pending export. */
export function BookCarousel() {
  return (
    <Section id="the-app" name="book-carousel">
      <div className="book-carousel__head">
        <SectionHeading title={library.title} lede={library.body} />
        <div className="book-carousel__badges">
          <AppStoreBadge store="google" />
          <AppStoreBadge store="apple" />
        </div>
      </div>

      <ul className="book-carousel__track">
        {library.slides.map((slide) => (
          <li key={slide.index} className="book-carousel__slide">
            <span className="book-carousel__index">{slide.index}</span>
            <div
              className="book-carousel__cover"
              data-asset={`book-${slide.index}`}
              aria-label={slide.title}
            />
            <span className="book-carousel__cta">{slide.cta}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
