export default function Input({
  className,
  placeholder,
  onChange,
  value,
  type,
}) {
  return (
    <input
      className={`resize-y border border-gray-300 rounded-md outline-none focus:outline-none focus:ring-2 ring-offset-1 focus:ring-blue-500 transition-all p-2 ${className}`}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      value={value || ''}
      type={type}
    />
  );
}
