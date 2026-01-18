import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home.jsx";
import { DefaultLayout } from "../layouts/DefaultLayout.jsx";
import Contas from "../pages/categorias/Contas.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contas" element={<Contas />} />
        <Route path="/categorias" element={<Home />} />
        <Route path="/transacoes" element={<Home />} />
      </Route>
    </Routes>
  );
}
