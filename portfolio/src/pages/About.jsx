import "../styles/about.css";
import { HeroImages } from "../data/HeroImages.jsx";
import about from "../data/AboutMeData";
import AboutMeDataImages from "../data/AboutMeDataImages.jsx";
import Section from "../components/AboutMe";

export default function About() {
  return (
    <div className="about_wrapper">
      <main className="about_intro_container">
        <section className="about_header">
          <div className="about_header_content">
            <div className="about_header_image_container">
              <figure className="about_header_image">
                <img
                  src={HeroImages.medium}
                  srcSet={`
                    ${HeroImages.small} 400w,
                    ${HeroImages.medium} 800w,
                    ${HeroImages.large} 1600w
                  `}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  loading="lazy"
                  alt="Michelle"
                />
              </figure>
            </div>
            <h1>
              <span>More about</span>
              <span>Michelle V. Johansen</span>
            </h1>
          </div>
        </section>

        <section className="case_wrapper">
          {about.map((item) => (
            <article key={item.id} className="case_box">
              <div className="inner_case">
                <h3>{item.headline}</h3>
                <p>{item.line}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
