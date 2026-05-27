import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { calculateVariacao } from "../../utils/calcularVariacao";
import { parseCurrency } from "../../utils/parseCurrency";

function CardSaldo(props) {
  const { nome, saldo, valorAnterior, variant = "primary", cor } = props;

  const vSaldo = parseCurrency(saldo);
  const vAnterior = parseCurrency(valorAnterior);

  const { variacao, percentRounded } = calculateVariacao(vSaldo, vAnterior);

  const percentColor =
    percentRounded > 0
      ? "text-green-500"
      : percentRounded < 0
      ? "text-red-500"
      : "text-gray-500";

  const VariacaoIcon =
    percentRounded > 0
      ? ArrowUpRight
      : percentRounded < 0
      ? ArrowDownRight
      : Minus;

  const iconColor =
    percentRounded > 0
      ? "text-green-400"
      : percentRounded < 0
      ? "text-red-400"
      : "text-gray-300";

  const gradientVariants = {
    saldo: "bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800",
    despesas: "bg-gradient-to-r from-red-500 via-red-700 to-red-800",
    receitas: "bg-gradient-to-r from-teal-500 via-green-500 to-green-800",
    primary: "bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800",
  };

  const containerClass =
    cor ?? gradientVariants[variant] ?? gradientVariants.primary;

  return (
    <div
      className={`${containerClass} rounded-lg shadow h-[209px] flex flex-col justify-between p-6 text-white`}
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-4xl font-semibold">{nome}</h2>
        <VariacaoIcon className={`w-14 h-8 mt-2 mx-3 my-1 bg-white rounded-full ${iconColor}`} />
      </div>

      {/* Conteúdo */}
      <div className="flex justify-between items-end">
        <p className="md:text-5xl text-3xl font-medium">{saldo}</p>

        <span
          className={`w-16 text-sm bg-white p-1 rounded-md flex items-center justify-center ${percentColor}`}
        >
          {variacao}
        </span>
      </div>
    </div>
  );
}

export default CardSaldo;
