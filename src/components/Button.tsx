import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'sm' | 'lg' | 'pill';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  block?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

/** Primary CTA. Sizes mirror the two Figma button styles. */
export function Button({
  variant = 'sm',
  block = false,
  icon,
  children,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = [
    'btn-raahi',
    `btn-raahi--${variant}`,
    block ? 'btn-raahi--block' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} {...rest}>
      {icon}
      {children}
    </button>
  );
}
