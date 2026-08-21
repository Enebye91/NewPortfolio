import CardData from "../data/cards";
import { useState, useRef, useEffect } from "react";

export default function Valueard() {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setActiveCard(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section ref={sectionRef} className="about_values">
      <h4 className="about_values_title">What I value</h4>

      <div className="about_grid">
        <div
          className="card"
          onClick={() =>
            setActiveCard(activeCard === "creativity" ? null : "creativity")
          }
        >
          {activeCard === "creativity"
            ? CardData.creativity.text
            : CardData.creativity.label}
        </div>

        <div
          className="card"
          onClick={() => setActiveCard(activeCard === "code" ? null : "code")}
        >
          {activeCard === "code" ? CardData.code.text : CardData.code.label}
        </div>

        <div
          className="card"
          onClick={() =>
            setActiveCard(activeCard === "collab" ? null : "collab")
          }
        >
          {activeCard === "collab"
            ? CardData.collab.text
            : CardData.collab.label}
        </div>
      </div>
    </section>
  );
}
