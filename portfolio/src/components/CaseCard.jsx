import { Link } from "react-router-dom";
import "../styles/case_card.css";
import "../data/Cases.jsx";

export default function CaseCard({ project }) {
  return (
    <Link
      to={`/cases/${project.slug}`}
      className="case_container"
      style={{
        "--bg-small": `url(${project.images.small})`,
        "--bg-medium": `url(${project.images.medium})`,
        "--bg-large": `url(${project.images.large})`,
      }}
    >
      <div className="case_item">
        <p>{project.project}</p>
      </div>

      <div className="case_company">
        <p>{project.description}</p>
        <h3>{project.title}</h3>

        <Link to={`/cases/${project.slug}`} className="project_link">
          View project
        </Link>
      </div>
    </Link>
  );
}
