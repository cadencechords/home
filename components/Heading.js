export default function Heading({ className, children, size }) {
  return (
    <h1 className={`${SIZES[size]} font-bold ${className}`}>{children}</h1>
  );
}

const SIZES = {
  sm: 'text-lg md:text-xl',
  md: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-5xl',
};

Heading.defaultProps = {
  className: '',
  size: 'lg',
};
