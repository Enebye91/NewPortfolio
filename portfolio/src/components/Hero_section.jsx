import "../styles/hero_section.css";
import { HeroImages } from "../data/HeroImages.jsx";
import arrows from "/images/arrows.png";

export default function Hero() {
  return (
    <section className="Hero_wrapper">
      <article className="Hero_text_wrapper">
        <div className="Hero_text_container">
          <h1>
            <span className="hero_italic">Digital Designer</span>
            <span> - Located in</span>
            <span className="hero_italic">Horsens</span>
          </h1>
          <figure className="arrow_img_container">
            <img src={arrows} alt="arrows" />
          </figure>
        </div>
      </article>

      <div className="Hero_CTA_container">
        <div className="color_box_container">
          <figure className="Hero_img_container">
            <img
              src={HeroImages.medium}
              srcSet={`${HeroImages.small} 400w, ${HeroImages.medium} 800w, ${HeroImages.large} 1600w`}
              sizes="(max-width: 768px) 90vw, 800px"
              loading="lazy"
              alt="Project"
            />
          </figure>
        </div>
        <div className="CTA_text_container">
          <article>
            <span>
              <h2>Junior</h2>
            </span>
            <span>
              <h3>Junior</h3>
            </span>
            <span>
              <p>
                Hi, I work with UX design and frontend development. I design
                intuitive, user-friendly digital experiences by combining
                research, design, and technical insight. With a foot in both
                design and code, I focus on creating solutions that are both
                thoughtful and practical.
              </p>
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}
