import "../styles/service.css";
import { ServiceData } from "../data/Service";

export default function Services() {
  return (
    <section className="services">
      <article className="service_container">
        {ServiceData.map((section, index) => (
          <div className="service_box" key={index}>
            <div className="box">
              {" "}
              <span>{section.number}</span>
              {section.title?.map((title, i) => (
                <h5 key={i}>{title.label}</h5>
              ))}
            </div>

            <div className="description_box">
              {" "}
              {section.description?.map((scription, i) => (
                <p key={i}>{scription.label}</p>
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
