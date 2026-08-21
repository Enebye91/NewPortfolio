import { useState, useRef, useEffect } from "react";
import faq from "../data/Q&A";
import "../styles/faq.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (!el) return;

      if (openIndex === index) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className="faq_container">
      <h2 className="faq_title">FAQ</h2>

      {faq.map((item, index) => (
        <div className="faq_item"key={index}>
          <button className="faq_question" onClick={() => toggle(index)}>
            <span>{item.question}</span>
            <span className="icon">{openIndex === index ? "−" : "+"}</span>
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="faq_answer"
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
