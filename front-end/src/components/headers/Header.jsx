import { useEffect, useState } from "react";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";

function Header() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );

  useEffect(() => {
    //verifica tamanho da tela, ajusta se for mobile ou não
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

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}

export default Header