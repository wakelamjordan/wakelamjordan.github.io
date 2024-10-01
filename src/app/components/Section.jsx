const Section = ({ children, additionalClass = [], title }) => {
  const listClass = [
    // "min-h-screen",
    "min-h-fit",
    "mt-0",
    "bg-neutral",
    "my-6",
    "rounded-lg",
    "p-10",
    ...additionalClass,
  ].join(" ");
  return (
    <section className={listClass}>
      {title ? <h2 className="text-center text-3xl">{title}</h2> : null}
      {children}
    </section>
  );
};

export default Section;
