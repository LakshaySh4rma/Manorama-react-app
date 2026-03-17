import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Meta from "../HOC/Meta";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Layout() {
  return (
    <HelmetProvider>
      <Meta />

      <div className="flex flex-col min-h-screen bg-gray-100">

        <Header />

        <main className="grow max-w-7xl mx-auto w-full px-4 py-6">
          <Outlet />
        </main>

        <Footer />

      </div>

    </HelmetProvider>
  );
}