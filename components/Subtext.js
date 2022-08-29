export default function Subtext({ children, className }) {
  return <p className={`text-gray-600 ${className}`}>{children}</p>;
}

Subtext.defaultProps = {
  className: '',
};
