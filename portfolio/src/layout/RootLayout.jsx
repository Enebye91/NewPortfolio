import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
