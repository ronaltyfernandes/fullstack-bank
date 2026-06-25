import LinhasDecorativasGraficos from "../../../ui/LinhasDecorativasGraficos";

function CardContainer({ children, variant = "primary", cor }) {
  const gradientVariants = {
    saldo: "bg-gradient-to-br from-primary-light via-blue-500  to-primary",
    despesas: "bg-gradient-to-br from-red-500 via-red-600 to-red-800",
    receitas: "bg-gradient-to-br from-emerald-400 via-green-500 to-green-700",
    primary: "bg-gradient-to-br from-slate-500 via-slate-600 to-slate-800",
  };

  const containerClass = cor ?? gradientVariants[variant] ?? gradientVariants.primary;

  return (
    <div
      className={`relative overflow-hidden ${containerClass} rounded-md p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
    >
      <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-white/10 rounded-md blur-3xl" />
      <LinhasDecorativasGraficos />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default CardContainer;
