import DateFilter from "../../ui/filtros/DateFilter";
import CardsSalarios from "./CardsSalarios";
import Graficos from "./Graficos";

//todo: icon de filtro funcionar
export function Home() {
  return (
    <div className="">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-text text-4xl font-bold">Gráficos</h1>
        <div className="flex gap-2">
          <DateFilter/>
          <DateFilter/>
        </div>
      </div>
      <CardsSalarios />
      <Graficos />
    </div>  
);
}
