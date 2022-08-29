export default function Section({ children, id, className }) {
  return (
    <section className={`mt-20 ${className}`} id={id}>
      {children}
    </section>
  );
}

Section.defaultProps = {
  className: '',
};
