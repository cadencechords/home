export default function Subtext({ children, className }) {
	return <p className={`text-gray-500 ${className}`}>{children}</p>;
}

Subtext.defaultProps = {
	className: "",
};
