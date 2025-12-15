import "../styles/hero_section.css";
import { HeroImages } from "../data/HeroImages.jsx";
import { CtaData } from "../data/CtaData.jsx";

export default function Hero() {
  return (
    <section className="Hero_wrapper">
      <article className="Hero_text_container">
        <div className="Hero_text_box">
          <h1>CREATIVE DEVELOPER</h1>
          <h2 className="Hero_headerTwo">
            <span>Focusing on Merging Code, Design & Interaction</span>
          </h2>

          <p>
            <span>
              Every project is an opportunity to merge creativity with
              technology in meaningful ways.
            </span>
          </p>
        </div>
      </article>
      <figure className="Hero_img_container">
        <img
          src={HeroImages.medium}
          srcSet={`${HeroImages.small} 400w, ${HeroImages.medium} 800w, ${HeroImages.large} 1600w`}
          sizes="(max-width: 768px) 90vw, 800px"
          style={{ borderRadius: "16px" }}
          loading="lazy"
          alt="Project"
        />
      </figure>
      <article className="Hero_CTA_container">
        <div className="CTA_text_box">
          <p>Behind the pixels</p>
          <h4>
            <span>
              As a creative developer who thrives at the intersection of design
              and code, I enjoy crafting web experiences that are both
              interactive and intuitive.
            </span>
          </h4>
        </div>
        <button className="CTA_button" to={CtaData.about.to}>
          {CtaData.about.label}
        </button>
      </article>
      <article className="note_container">
        <p>Great things aren’t built alone.</p>
      </article>
    </section>
  );
}
