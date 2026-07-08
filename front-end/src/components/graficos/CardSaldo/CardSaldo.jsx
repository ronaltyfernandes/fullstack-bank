import { ArrowUpRight, ArrowDownRight, Minus, Wallet, Handbag, BanknoteArrowUp } from "lucide-react";
import { calculateVariacao } from "../../../utils/calcularVariacao";
import { parseCurrency } from "../../../utils/parseCurrency";
import CardContainer from "./CardContainer";
import CardBody from "./CardBody";

function CardSaldo(props) {
  const { nome, saldo, valorAnterior, variant = "saldo", cor } = props;

  const vSaldo = parseCurrency(saldo);
  const vAnterior = parseCurrency(valorAnterior);

  const { variacao, percentRounded } = calculateVariacao(vSaldo, vAnterior);

  const percentColor =
    percentRounded > 0
      ? "text-green-600"
      : percentRounded < 0
      ? "text-red-600"
      : "text-slate-500";

  const VariacaoIcon =
    percentRounded > 0
      ? ArrowUpRight
      : percentRounded < 0
      ? ArrowDownRight
      : Minus;

  const cardIconMap = {
    saldo: Wallet,
    despesas: Handbag,
    receitas: BanknoteArrowUp,
  };

  const CardIcon = cardIconMap[variant] ?? Wallet;

  return (
    <CardContainer variant={variant} cor={cor}>
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[110px]">
        <CardBody
          nome={nome}
          saldo={saldo}
          variacao={variacao}
          percentColor={percentColor}
          cardIcon={CardIcon}
          variationIcon={VariacaoIcon}
          variant={variant}
          variationIconColorClass={
            percentRounded > 0
              ? "text-green-500"
              : percentRounded < 0
              ? "text-red-500"
              : "text-slate-400"
          }
        />
      </div>
    </CardContainer>
  );
}

export default CardSaldo;