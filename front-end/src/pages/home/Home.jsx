import CardsSalarios from "./CardsSalarios";
import Graficos from "./Graficos";

//todo: icon de filtro funcionar
export function Home() {
  return (
    <div className="">
      <div className="flex justify-between items-center py-1">
        <h1 className="text-text text-4xl sombra-azul">Graficos</h1>
        <div>
          <h1 className="text-text text-xl sombra-azul">Filtro</h1>
        </div>
      </div>
      <CardsSalarios />
      <Graficos />
    </div>  
);
}
