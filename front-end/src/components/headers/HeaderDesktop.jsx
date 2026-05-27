import { NavLink } from "react-router-dom";
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
        <button className="sombra-secundaria bg-primary text-white">Entrar</button>
        <button className="sombra-azul-redonda">Cadastrar</button>
      </div>
    </div>
  );
}
