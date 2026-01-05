import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layout/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CaseStudie from "./pages/CaseStudie.jsx";
import CasePage from "./pages/CasePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/CaseStudie", element: <CaseStudie /> },
      {
        path: "cases/:slug",
        element: <CasePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
