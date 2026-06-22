import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home.jsx";
import { DefaultLayout } from "../layouts/DefaultLayout.jsx";
import Contas from "../pages/conta/Contas.jsx";
import Categorias from "../pages/categorias/Categorias.jsx";
import Transacoes from "../pages/transacoes/Transacoes.jsx";
import Login from "../pages/login/Login.jsx";
import Cadastro from "../pages/cadastro/Cadastro.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contas" element={<Contas />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/transacoes" element={<Transacoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  );
}
