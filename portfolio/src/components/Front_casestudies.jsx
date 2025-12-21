import "../styles/front_casestudies.css";
import { Cases } from "../data/Cases.jsx";
import CaseCard from "../components/CaseCard";
// import { useState } from "react";

export default function FrontCase() {
  // const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <section className="frontcase_wrapper">
        <article className="frontcase_container">
          <div className="frontcase_headline">
            <span>Case </span>
            <span>studies</span>
          </div>
        </article>

        <section className="case_wrapper">
          {Cases.map((item) => (
            <CaseCard key={item.id} project={item} />
          ))}
        </section>
      </section>
    </>
  );
}
