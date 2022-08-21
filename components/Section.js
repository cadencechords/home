export default function Section({ children, id, className }) {
  return (
    <section className={`md:my-44 ${className}`} id={id}>
      {children}
    </section>
  );
}

Section.defaultProps = {
  className: '',
};
