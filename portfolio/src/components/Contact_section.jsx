import { ContactData } from "../data/ContactData";
import "../styles/contact_section.css";

export default function Contact() {
  return (
    <section className="section_wrapper">
      <article>
        <div className="contact_img_wrapper">
          <img src="/images/ShakingHands.png" alt="Contact" />
        </div>
      </article>
      <article className="text_wrapper">
        <div className="text_container">
          <p>Lets work</p>
          <p>Together</p>
        </div>
        <div className="contact_button_wrapper">
          {ContactData.map((item) => (
            <button key={item.type} className="contact_button">
              <a href={item.href}>{item.label}</a>
            </button>
          ))}
        </div>
      </article>
    </section>
  );
}
