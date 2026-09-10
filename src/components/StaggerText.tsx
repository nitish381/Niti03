import type { CSSProperties, ElementType } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface StaggerTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** ms between each word's transition start. */
  wordDelay?: number;
  /** ms before the first word starts. */
  baseDelay?: number;
}

/**
 * Word-by-word reveal for a single heading — the SplitType-style stagger
 * from the Pixora reference, built without the dependency: split into
 * words in JSX, let CSS animate each on the same visibility trigger with a
 * per-word transition-delay. Reserved for a handful of "big statement"
 * headings (see callers); everything else keeps the simpler <Reveal>.
 */
export function StaggerText({
  text,
  as,
  className = '',
  wordDelay = 45,
  baseDelay = 0,
}: StaggerTextProps) {
  const Tag = as ?? 'span';
  const [ref, visible] = useReveal<HTMLElement>();
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={`stagger-text ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {words.flatMap((word, i) => {
        const style: CSSProperties = { transitionDelay: `${baseDelay + i * wordDelay}ms` };
        const span = (
          <span key={i} className="stagger-text__word" style={style}>
            {word}
          </span>
        );
        return i < words.length - 1 ? [span, ' '] : [span];
      })}
    </Tag>
  );
}
