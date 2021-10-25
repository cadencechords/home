export default function Section({ children, id, className }) {
	return (
		<section className={`${className} my-44`} id={id}>
			{children}
		</section>
	);
}

Section.defaultProps = {
	className: "",
};
