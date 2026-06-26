import { TabelaDesktop } from "./TabelaDesktop";
import { CardTabelaMobile } from "./CardTabelaMobile";

export function Table(props) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <TabelaDesktop {...props} />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <CardTabelaMobile {...props} />
      </div>
    </>
  );
}