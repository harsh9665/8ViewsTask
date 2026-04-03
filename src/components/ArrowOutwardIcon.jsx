export default function ArrowOutwardIcon({
  className = '',
  size = 24,
  color = 'currentColor',
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M7.05 18.364 5.636 16.95 14.586 8H6.5V6H18v11.5h-2V9.414l-8.95 8.95Z"
        fill={color}
      />
    </svg>
  );
}
