import Logo from "../ui/Logo";

export function Footer() {
  return (
    <footer className="bg-bg-secondary text-slate-500">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo / Descrição */}
        <div className="flex flex-col items-center sm:items-start">
          <Logo />
          <p className="mt-3 text-sm text-slate-500 text-center sm:text-left">
            Soluções financeiras inteligentes para simplificar sua gestão e acelerar seus resultados.
          </p>
        </div>

        {/* Produto */}
        <div>
          <h3 className="text-sm font-semibold text-text uppercase tracking-wide text-center sm:text-left">
            Produto
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-center sm:text-left">
            <li><a href="#" className="hover:text-text">Conta Digital</a></li>
            <li><a href="#" className="hover:text-text">Pagamentos</a></li>
            <li><a href="#" className="hover:text-text">Cartões</a></li>
            <li><a href="#" className="hover:text-text">API Financeira</a></li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h3 className="text-sm font-semibold text-text uppercase tracking-wide text-center sm:text-left">
            Empresa
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-center sm:text-left">
            <li><a href="#" className="hover:text-text">Sobre nós</a></li>
            <li><a href="#" className="hover:text-text">Carreiras</a></li>
            <li><a href="#" className="hover:text-text">Blog</a></li>
            <li><a href="#" className="hover:text-text">Contato</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold text-text uppercase tracking-wide text-center sm:text-left">
            Legal
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-center sm:text-left">
            <li><a href="#" className="hover:text-text">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-text">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-text">LGPD</a></li>
            <li><a href="#" className="hover:text-text">Compliance</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Finan Tecnologia Financeira S.A.  
        Todos os direitos reservados. <br />

        <span className="text-slate-500">
          Desenvolvido por{" "}
          <a
            href="https://ronaltyfernandes.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light"
          >
            Ronalty Fernandes
          </a>
        </span>
      </div>
    </footer>
  );
}
