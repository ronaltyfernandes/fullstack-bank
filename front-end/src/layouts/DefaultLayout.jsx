import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { HeaderMobile } from "../components/headers/HeaderMobile";
import { HeaderDesktop } from "../components/headers/HeaderDesktop";
import Header from "../components/headers/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="bg-bg min-h-screen pb-2">
        <div className="max-w-[1640px] mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
