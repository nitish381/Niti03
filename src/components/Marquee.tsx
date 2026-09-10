import { useReducedMotion } from '@/hooks/useReducedMotion';

const KEYWORDS = [
  'PRODUCT DESIGN',
  'UX',
  'UI',
  'WEB3',
  'FINTECH',
  'RWA',
  'AI',
  'DESIGN SYSTEMS',
];

export function Marquee() {
  const reducedMotion = useReducedMotion();
  const row = KEYWORDS.join(' / ') + ' / ';

  return (
    <div className="marquee" aria-hidden="true">
      {reducedMotion ? (
        <p className="marquee__track marquee__track--static">{row.repeat(3)}</p>
      ) : (
        <div className="marquee__track">
          <span>{row}</span>
          <span>{row}</span>
        </div>
      )}
    </div>
  );
}
