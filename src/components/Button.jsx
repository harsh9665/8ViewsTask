import styles from '@/styles/Button.module.css';
import { classNames } from '@/utils/classNames';

export default function Button({
  children,
  variant = 'outline',
  size = 'md',
  onClick,
  href,
  className = '',
  ...props
}) {
  const classes = classNames(
    styles.btn,
    styles[variant],
    styles[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
