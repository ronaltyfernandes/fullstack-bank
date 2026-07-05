  import { Link, useLocation } from "react-router-dom";
  import { useState, useEffect } from "react";
  import { useTheme } from "../../contexts/ThemeContext";
  import { ThemeSwitch } from "../../ui/Inputs/ThemeSwitch";
  import NavLinkHeader from "../../ui/NavLink";
  import Logo from "../../ui/Logo";

  export function HeaderMobile() {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
      // fecha o menu quando a rota muda
      setOpen(false);
    }, [location.pathname]);

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
        <Logo/>

        <div className="relative">
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md md:hidden"
          >
            {!open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

          <div
            id="mobile-menu"
            className={`
              absolute right-0 mt-3 w-64 z-50
              rounded-2xl border border-white/10
              bg-bg-secondary/95 backdrop-blur-xl
              shadow-2xl
              transition-all duration-300 ease-out
              ${open
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
            `}
          >
            <nav className="flex flex-col p-4 space-y-1">
              <NavLinkHeader end to="/" text="Gráficos" onClick={() => setOpen(false)} />
              <NavLinkHeader to="/contas" text="Contas Bancárias" onClick={() => setOpen(false)} />
              <NavLinkHeader to="/categorias" text="Categorias" onClick={() => setOpen(false)} />
              <NavLinkHeader to="/transacoes" text="Transações" onClick={() => setOpen(false)} />

              {/* divisor */}
              <div className="my-3 h-px bg-white/10" />

              {/* tema */}
              <div className="flex items-center justify-between px-2">
                <span className="text-sm opacity-80">Tema</span>
                <ThemeSwitch toggleTheme={toggleTheme} isDark={theme === "dark"} />
              </div>
              {/* Ações */}
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  to="/login"
                  className="flex items-center justify-center w-full py-2 rounded-xl
                  bg-primary text-white font-semibold shadow-md hover:bg-primary/90 hover:shadow-lg transition-all duration-300"
                >
                  Entrar
                </Link>

                <Link
                  to="/cadastro"
                  className="flex items-center justify-center w-full py-2 rounded-xl border
                  border-primary text-primary font-semibold bg-white hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Cadastrar
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
