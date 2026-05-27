import CardGraficoBarras from "../../components/graficos/CardGraficoBarras";
import CardGraficoPizza from "../../components/graficos/CardGraficoDunut";
import CardGraficoLinha from "../../components/graficos/CardGraficoLinha";

//todo: colocar icone em filtros

function Graficos() {
  return (
    <div className="w-full flex flex-col items-center">
      <CardGraficoLinha />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-2">
        <CardGraficoPizza />
        <CardGraficoBarras />
      </div>
    </div>
  );
}

export default Graficos;
