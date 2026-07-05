import { useEffect, useState, useCallback } from "react";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";

const TOKEN_KEY = "finan_login_token";

function Header() {
  const userName = localStorage.getItem('finan_user_name');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 767px)").matches
      : false
  );


  useEffect(() => {
    // Verifica se existe um token salvo
    const token = localStorage.getItem(TOKEN_KEY);
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handle = (e) => setIsMobile(e.matches);

    setIsMobile(mq.matches);

    if (mq.addEventListener) mq.addEventListener("change", handle);
    else mq.addListener(handle);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handle);
      else mq.removeListener(handle);
    };
  }, []);

  // Limpa o token do localStorage e atualiza o estado de autenticação
  const handleLogout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('finan_user_name');
    setIsAuthenticated(false);
    window.location.reload();
  }, []);

  return isMobile ? (
    <HeaderMobile isAuthenticated={isAuthenticated} onLogout={handleLogout} userName={userName} />
  ) : (
    <HeaderDesktop isAuthenticated={isAuthenticated} onLogout={handleLogout} userName={userName} />
  );
}

export default Header;