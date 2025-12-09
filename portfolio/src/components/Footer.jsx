import { Link } from "react-router-dom";
import { FooterData } from "../data/FooterLinks.jsx";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        {FooterData.map((section, index) => (
          <div className="container_div" key={index}>
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, i) => (
                <li key={i}>
                  {link.to ? (
                    <Link to={link.to}>{link.label}</Link>
                  ) : link.href ? (
                    <a href={link.href}>{link.label}</a>
                  ) : (
                    <span>{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
