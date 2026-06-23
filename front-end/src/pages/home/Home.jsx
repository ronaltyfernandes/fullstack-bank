import DateFilter from "../../ui/filtros/DateFilter";
import CardsSalarios from "./CardsSalarios";
import Graficos from "./Graficos";

//todo: icon de filtro funcionar
export function Home() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-4">
        <h1 className="text-text text-3xl md:text-4xl font-bold">Gráficos</h1>

        <div className="flex flex-row gap-2 flex-wrap justify-end w-full md:w-auto">
          <DateFilter />
          <DateFilter />
        </div>

      </div>
      <CardsSalarios />
      <Graficos />
    </div>  
);
}
