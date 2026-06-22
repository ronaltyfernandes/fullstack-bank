import VariacaoBadge from "./VariacaoBadge";

function CardBody({
  nome,
  saldo,
  variacao,
  variant,
  percentColor,
  cardIcon: CardIcon,
  variationIcon: VariationIcon,
  variationIconColorClass,
}) {

  const colorIconePrincipal = 
    variant == "receitas"
    ? "text-green-500"
    : variant == "despesas"
    ? "text-red-500"
    : "text-blue-500"

  return (
    <div className="relative z-10 flex flex-col justify-between h-full min-h-[170px]">
      <div className="flex justify-between items-start">
        {/* Tipo do card */}
        <div className="flex items-center gap-4 mt-8">
          <div className="rounded-2xl bg-white backdrop-blur-sm flex items-center justify-center p-3 ">
            {CardIcon && <CardIcon className={`w-12 h-12 ${colorIconePrincipal}`} />}
          </div>

          <div>
            <h2 className="text-xl font-medium text-white/90">{nome}</h2>
            <p className="text-4xl md:text-5xl font-bold tracking-tight">
              {saldo}
            </p>
          </div>
        </div>

        {/* Variação */}
        <div className="w-14 h-10 rounded-2xl bg-white/90 flex items-center justify-center shadow-md">
          {VariationIcon && (
            <VariationIcon
              className={`w-7 h-7 ${variationIconColorClass}`}
            />
          )}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <VariacaoBadge percentColor={percentColor}>
          {variacao}
        </VariacaoBadge>

        <p className="text-white/80 text-sm">
          vs mês anterior
        </p>
      </div>
    </div>
  );
}

export default CardBody;