import CardGraficoBarras from "../../components/graficos/graficoBarras/CardGraficoBarras";
import CardGraficoDunut from "../../components/graficos/graficoDonut/CardGraficoDunut";
import CardGraficoLinha from "../../components/graficos/graficoLinha/CardGraficoLinha";

//todo: colocar icone em filtros

function Graficos({ startDate, endDate }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-2">
        <CardGraficoDunut startDate={startDate} endDate={endDate} />
        <CardGraficoBarras startDate={startDate} endDate={endDate} />
      </div>
      <CardGraficoLinha startDate={startDate} endDate={endDate} />
    </div>
  );
}

export default Graficos;
