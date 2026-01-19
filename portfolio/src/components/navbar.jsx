import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  const menuItems = [
    { name: "Home", path: "#/" },
    { name: "About", path: "/About" },
    { name: "Case Studies", href: "/CaseStudie" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="logo">Michelle V.E.L</div>

      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${open ? "show" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link to={item.path} onClick={() => setOpen(false)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
