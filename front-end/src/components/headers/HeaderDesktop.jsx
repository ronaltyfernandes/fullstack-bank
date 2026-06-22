import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeSwitch } from "../../ui/ThemeSwitch";
import NavLinkHeader from "../../ui/NavLink";
import Logo from "../../ui/Logo";

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

      <Logo/>

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

      <div className="space-x-1 flex items-center">
        <Link
          to="/login"
          aria-label="Entrar"
          className="rounded-xl px-4 py-2 text-text border border-gray-200 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-zinc-700 dark:hover:bg-white/5"
        >
          Entrar
        </Link>

        <Link
          to="/cadastro"
          aria-label="Cadastrar"
          className="rounded-xl px-4 py-2 bg-primary text-white hover:brightness-95 transition-all  dark:bg-primary/90 dark:hover:brightness-90"
        >
          Cadastrar
        </Link>
      </div>
    </div>
  );
}
