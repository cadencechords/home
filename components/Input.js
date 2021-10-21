export default function Input({ className, placeholder, onChange, value }) {
	return (
		<input
			className={`resize-y border border-gray-300 rounded-md outline-none focus:outline-none focus:border-blue-500 transition-colors p-2 ${className}`}
			placeholder={placeholder}
			onChange={(e) => onChange(e.target.value)}
			value={value || ""}
		/>
	);
}
