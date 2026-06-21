import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeSwitch } from "../../ui/ThemeSwitch";
import NavLinkHeader from "../../ui/NavLink";

export function HeaderDesktop() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="
        bg-bg-secondary
        text-text
        flex justify-between
        min-h-[75px]
        items-center
        px-8
        max-h-[75px]
      "
    >
      <div className="sombra-azul">logo</div>
      <nav className="">
        <NavLinkHeader end to="/" text="Gráficos" />
        <NavLinkHeader to="/contas" text="Contas Bancarias" />
        <NavLinkHeader to="/categorias" text="Categorias" />
        <NavLinkHeader to="/transacoes" text="Transações" />
      </nav>

      <ThemeSwitch
        toggleTheme={toggleTheme}
        isDark={theme === "dark"}
      />

      <div className="space-x-2">
        <Link to="/login" className="sombra-secundaria bg-primary text-white">Entrar</Link>
        <Link to="/cadastro" className="sombra-azul-redonda">Cadastrar</Link>
      </div>
    </div>
  );
}
