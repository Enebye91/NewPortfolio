import "../styles/navbar.css";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  const menuItems = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
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
    <nav className="navbar">
      <div className="logo">Michelle V.E.L</div>

      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul ref={menuRef} className={`nav-links ${open ? "show" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} onClick={() => setOpen(false)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
