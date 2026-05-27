import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import Header from "../components/headers/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="bg-bg min-h-screen pb-2">
        <div className="max-w-410 mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
