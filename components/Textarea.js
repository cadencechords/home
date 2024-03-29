export default function Textarea({ placeholder, onChange, className, value }) {
  return (
    <textarea
      placeholder={placeholder}
      rows={6}
      value={value || ''}
      onChange={e => onChange(e.target.value)}
      className={`border border-gray-300 rounded-md outline-none focus:outline-none focus:ring-2 ring-offset-1 focus:ring-blue-500 transition-all p-2 ${className}`}
    ></textarea>
  );
}

Textarea.defaultProps = {
  className: '',
};
