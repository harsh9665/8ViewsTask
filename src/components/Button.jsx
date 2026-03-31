import styles from '@/styles/Button.module.css';

export default function Button({
  children,
  variant = 'outline',   // 'outline' | 'solid' | 'ghost'
  size = 'md',           // 'sm' | 'md' | 'lg'
  onClick,
  href,
  className = '',
  ...props
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}