function VariacaoBadge({ children, percentColor }) {
  return (
    <span
      className={`bg-white px-3 py-1.5 rounded-xl text-sm font-semibold shadow ${percentColor}`}
    >
      {children}
    </span>
  );
}

export default VariacaoBadge;
