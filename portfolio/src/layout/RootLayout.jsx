import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";
import Contact from "../components/Contact_section.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
