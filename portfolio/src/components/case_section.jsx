import "../styles/caseSection.css";
import CaseSectionData from "../data/caseSectionData";
import SecondPartCase from "../data/CaseData";

export default function CaseSection() {
  return (
    <section className="case_section">
      <div className="case_section_container">
        <div className="case_intro">
          <h2 className="case_title">Recent Work</h2>
          <p className="case_subtitle">
            A selection of projects I’ve designed and developed.
          </p>
        </div>

        <div className="cases_wrapper">
          <div className="c_container">
            {CaseSectionData.map((item) => (
              <div
                key={item.id}
                className="case_block"
                style={{ backgroundColor: item.bgColor }}
              >
                <img src={item.image} alt={item.title} className="case_image" />
              </div>
            ))}
          </div>

          <div className="c_next_container">
            {SecondPartCase.map((item) => (
              <div
                key={item.id}
                className="case_block"
                style={{
                  color: item.textColor,
                  letterSpacing: item.letterSpacing,
                  lineHeight: item.lineHeight,
                }}
              >
                <div className="case_inner">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="case_cta">{item.cta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
