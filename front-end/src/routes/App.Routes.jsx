import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home.jsx";
import { DefaultLayout } from "../layouts/DefaultLayout.jsx";
import Contas from "../pages/conta/Contas.jsx";
import Categorias from "../pages/categorias/Categorias.jsx";
import Transacoes from "../pages/transacoes/Categorias.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contas" element={<Contas />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/transacoes" element={<Transacoes />} />
      </Route>
    </Routes>
  );
}
