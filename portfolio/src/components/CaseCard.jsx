import { Link } from "react-router-dom";
import "../styles/case_card.css";

// import arrowImage from "../assets/right-arrow.png";

export default function CaseCard({ project }) {
  return (
    <article
      className="case_container"
      //   style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className="case_item">
        <p>{project.project}</p>
      </div>

      <div className="case_company">
        <p>{project.description}</p>
        <h3>{project.title}</h3>

        <Link to={project.link} className="project_link">
          View project
          {/* <img src={arrowImage} alt="Arrow" className="arrow_image" /> */}
        </Link>
      </div>
    </article>
  );
}
