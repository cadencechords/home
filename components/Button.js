import PulseLoader from "react-spinners/PulseLoader";

export default function Button({
	variant,
	onClick,
	full,
	className,
	color,
	disabled,
	loading,
	children,
}) {
	let props = { variant, onClick, full, className, color, children, disabled, loading };

	if (variant === "light") {
		return <LightButton {...props}>{children}</LightButton>;
	} else if (variant === "text") {
		return <TextButton {...props}>{children}</TextButton>;
	} else {
		return <SolidButton {...props}>{children}</SolidButton>;
	}
}

function LightButton({ full, onClick, children, className, color }) {
	return (
		<button
			className={
				`px-3 py-2 rounded-md font-semibold ` +
				`${LIGHT_BUTTON_COLORS[color]} ${full ? "w-full" : ""} ${className}`
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

function SolidButton({ full, onClick, children, className, color, disabled, loading }) {
	return (
		<button
			className={
				`px-3 py-2 rounded-md font-medium whitespace-nowrap ` +
				`${
					disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : SOLID_BUTTON_COLORS[color]
				} ${full ? "w-full" : ""} ${className}`
			}
			disabled={disabled}
			onClick={onClick}
		>
			{loading ? <PulseLoader color="white" size={7} /> : children}
		</button>
	);
}

function TextButton({ full, onClick, children, className, color }) {
	return (
		<button
			className={
				`px-3 py-2 rounded-md font-medium  hover:bg-gray-100 focus:bg-gray-100 transition-colors ` +
				`${TEXT_BUTTON_COLORS[color]} ${full ? "w-full" : ""} ${className}`
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

const TEXT_BUTTON_COLORS = {
	gray: "text-gray-600",
	blue: "text-blue-600",
};

const SOLID_BUTTON_COLORS = {
	blue: "text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 transition-colors",
};

const LIGHT_BUTTON_COLORS = {
	blue: "text-blue-700 bg-blue-50",
};

Button.defaultProps = {
	full: false,
	color: "blue",
	className: "",
};
