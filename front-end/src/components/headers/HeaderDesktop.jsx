import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeSwitch } from "../../ui/Inputs/ThemeSwitch";
import NavLinkHeader from "../../ui/NavLink";
import Logo from "../../ui/Logo";
import { getInitials } from "../../utils/getInitials";


export function HeaderDesktop({ isAuthenticated, onLogout, userName }) {
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
      <Logo />

      <nav className="">
        <NavLinkHeader end to="/" text="Gráficos" />
        <NavLinkHeader to="/contas" text="Contas Bancarias" />
        <NavLinkHeader to="/categorias" text="Categorias" />
        <NavLinkHeader to="/transacoes" text="Transações" />
      </nav>

      <ThemeSwitch toggleTheme={toggleTheme} isDark={theme === "dark"} />

      <div className="space-x-3 flex items-center">
        {isAuthenticated ? (
          <div
            className="
              flex items-center gap-3
              rounded-2xl
              pl-2 pr-3 py-1.5
              border border-gray-200 dark:border-zinc-700
              bg-white/40 dark:bg-white/5
            "
          >
            {/* Avatar com iniciais */}
            <div
              className="
                w-9 h-9 rounded-full
                flex items-center justify-center
                bg-primary text-white
                text-sm font-semibold
                select-none
                shrink-0
              "
            >
              {getInitials(userName)}
            </div>

            {/* Nome + status online */}
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-text max-w-[140px] truncate">
                {userName || "Usuário"}
              </span>
              <span className="flex items-center gap-1 text-xs text-text/60">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                Online
              </span>
            </div>

            {/* Divisor */}
            <div className="w-px h-6 bg-gray-200 dark:bg-zinc-700" />

            <button
              type="button"
              onClick={onLogout}
              aria-label="Sair"
              className="
                rounded-xl px-3 py-1.5 text-sm text-text
                hover:bg-red-500/10 hover:text-red-500
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary/30
              "
            >
              Sair
            </button>
          </div>
        ) : (
          <>
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
              className="rounded-xl px-4 py-2 bg-primary text-white hover:brightness-95 transition-all dark:bg-primary/90 dark:hover:brightness-90"
            >
              Cadastrar
            </Link>
          </>
        )}
      </div>
    </div>
  );
}